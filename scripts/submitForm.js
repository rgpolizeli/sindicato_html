const patterName = /^([a-z .'à-ú]+){2,50}$/i
const patterMail = /^[a-z0-9!#$%&\'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&\'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i
const patterPhone = /^([1-9]{2})(([9]{1}[0-9]{8})|([2-5]{1}[0-9]{7}))$/

const inputClassName = 'form_input'
const textAreaClassName = 'form_textarea'
const errorInputClassName = 'form_input_error'
const errorTextAreaClassName = 'form_textarea_error'


function onClickSubmitButon(e){

  e.preventDefault()

  const name = document.getElementById('formName').value
  const mail = document.getElementById('formMail').value
  const phone = document.getElementById('formPhone').value
  const message = document.getElementById('formMessage').value
  const recaptchaResponse = grecaptcha.getResponse()

  submitForm(name, mail, phone, message, recaptchaResponse)
}

function submitForm(name, mail, phone, message, recaptchaResponse){

  if( validateFormFields(name, mail, phone, message, recaptchaResponse) ){
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "http://localhost/scripts/contact.php", true);
    xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhttp.onreadystatechange = function() {
      if (xhttp.readyState === 4) {
        if (xhttp.status === 200) {
          console.log(xhttp.responseText)
        } else {
          console.log("Error", xhttp.statusText)
        }
      }
    }

    const data = {
      name: name,
      mail: mail,
      phone: phone,
      message: message,
      rgoogle: recaptchaResponse
    }

    xhttp.send(JSON.stringify(data))
  }

}


function validateFormFields(
  name,
  mail,
  phone,
  message,
  recaptchaResponse
){

  var hasInvalid = false

  if(!validate(name, patterName)){
    addClassErrorInput(document.getElementById('formName'))
    hasInvalid = true
  } else{
    removeClassErrorInput(document.getElementById('formName'))
  }

  if(!validate(mail, patterMail)){
    addClassErrorInput(document.getElementById('formMail'))
    hasInvalid = true
  } else{
    removeClassErrorInput(document.getElementById('formMail'))
  }

  if(!validate(phone, patterPhone)){
    addClassErrorInput(document.getElementById('formPhone'))
    hasInvalid = true
  } else{
    removeClassErrorInput(document.getElementById('formPhone'))
  }

  if(message === ""){
    addClassErrorTextArea(document.getElementById('formMessage'))
    hasInvalid = true
  } else{
    removeClassErrorTextArea(document.getElementById('formMessage'))
  }

  if(recaptchaResponse === ""){
    hasInvalid = true
  }

  return !hasInvalid

}

function validate(value, pattern){
  return value.match(pattern) !== null
}

function addClassErrorInput(element){
  element.className = errorInputClassName
}

function removeClassErrorInput(element){
  element.className = inputClassName
}

function addClassErrorTextArea(element){
  element.className = errorTextAreaClassName
}

function removeClassErrorTextArea(element){
  element.className = textAreaClassName
}
