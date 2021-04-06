<?php

$json = file_get_contents('php://input');
$data = json_decode($json);

$name = filter_var($data->name, FILTER_SANITIZE_STRING, FILTER_FLAG_STRIP_HIGH);
$mail = filter_var($data->mail, FILTER_SANITIZE_EMAIL);
$phone = filter_var($data->phone, FILTER_SANITIZE_NUMBER_INT);
$message= filter_var($data->message, FILTER_SANITIZE_STRING, FILTER_FLAG_STRIP_HIGH);
$captchaToken = $data->rgoogle;

processForm($name, $mail, $phone, $message, $captchaToken);

function processForm($name, $mail, $phone, $message, $captchaToken){

	if(
		anyoneIsEmpty($name, $mail, $phone, $message, $captchaToken) ||
		!validateName($name) ||
		!validateMail($mail) ||
		!validatePhone($phone) ||
		!verifyCaptcha($captchaToken)
	){
		die('fail');
	} else{
		$sent = submitMail($name, $mail, $phone, $message);
		if($sent == true){
			die('success');
		} else{
			die('fail');
		}
		
	}

}

function anyoneIsEmpty($name, $mail, $phone, $message, $captchaToken){
	return (
		empty($name) ||
		empty($mail) ||
		empty($phone) ||
		empty($message) ||
		empty($captchaToken)
	);
}

function validateName($name) {
	$p = "/^([a-z .'à-ú]+){2,50}$/i";
  return 1 == preg_match($p, $name);
}

function validateMail($mail){
	$p = "/^[a-z0-9!#$%&\'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&\'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i";
	return 1 == preg_match($p, $mail);
}

function validatePhone($phone){
	$p = "/^([1-9]{2})(([9]{1}[0-9]{8})|([2-5]{1}[0-9]{7}))$/";
	return 1 == preg_match($p, $phone);
}

function verifyCaptcha($captcha){

	$data = array(
		'secret'=> "6Ldc9o4aAAAAAGqf9C71kWeV8-ORFqgQjASwO7Ye",
		'response' => $captcha,
		'remoteip' => $_SERVER['REMOTE_ADDR']
	);

	$options = array(
		'http' => array(
			'header' => "Content-type: application/x-www-form-urlencoded\r\n",
			'method'  => 'POST',
			'content' => http_build_query($data)
		)
	);

	try {
        $url = 'https://www.google.com/recaptcha/api/siteverify';
        $context  = stream_context_create($options);
        $result = file_get_contents($url, false, $context);
        return json_decode($result)->success == true;
    }
    catch (Exception $e) {
        return false;
    }
}

function submitMail($name, $mail, $phone, $message) {

	if(!defined('PHP_EOL'))
		define('PHP_EOL', '\r\n');

	$toMail = 'noreply@web.com';

	$subject = 'Contato';

	$m = getMailBody($subject, $name, $toMail, $mail, $message);

	$headers = getMailHeaders($toMail, $mail);	

	return mail($toMail, $subject, $m, $headers);

}



function getMailHeaders($to, $clientMail) {

	$headers = 'From: ' . $to . PHP_EOL;
	$headers .= 'Reply-To: ' . $clientMail . PHP_EOL;
	$headers .= 'MIME-Version: 1.0' . PHP_EOL;
	$headers .= 'Content-type: text/html; charset=utf-8' . PHP_EOL;

	return $headers;

}

function getMailBody($subject, $name, $toMail, $clientMail, $message) {

	$m = '<!DOCTYPE html>';
	$m .= '<html>';
	$m .= '<head><meta http-equiv="Content-Type" content="text/html;charset=UTF-8"/><title>' . $subject . '</title></head>';
	$m .= '<body style="background-color: #ffffff; color: #000000; font-style: normal; font-variant: normal; font-weight: normal; font-size: 12px; line-height: 18px; font-family: helvetica, arial, verdana, sans-serif;">';
	$m .= '<h2 style="background-color: #eeeeee; text-align:center">' . $subject . '</h2>';
	$m .= '<p><b>Nome:</b>'. $name .'</p>';
	$m .= '<p><b>E-mail:</b>'. $clientMail .'</p>';
	$m .= '<div><b>Mensagem:</b>'. $message .'</div>';
	$m .= '<br/><br/>';
	$m .= '<div style="background-color: #eeeeee; font-size: 10px; line-height: 11px;">' . $_SERVER['SERVER_NAME'] . '</div>';
	$m .= '<div style="background-color: #eeeeee; font-size: 10px; line-height: 11px;">' . $_SERVER['REMOTE_ADDR'] . '</div>';
	$m .= '</body></html>';

	return $m;
}

?>
