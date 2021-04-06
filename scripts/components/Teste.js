import {html, render} from 'https://unpkg.com/lit-html?module';

const data ={
	images: [
		"./img/clube/clube-1.jpg",
		"./img/clube/clube-2.jpg"
	],
	index: 0
}

const pageHome = (data) => html`
<section class="section_centralized">
	<div class="div_title_subtitle_text">
		<h1>NOSSA HISTÓRIA</h1>
		<h2>Sindicato dos Condutores de São José do Rio Preto</h2>
		<div>
		${galery(data)}
		<p>Em 1941 nasceu o Sindicato dos Condutores Rodoviários de São José do Rio Preto, era modesto, sem muita atuação, possuía 121 filiados.</p>
		<p>Foi através de muita luta e trabalho honesto que a diretoria elevou o Sindicato dos Motoristas de São José do Rio Preto para o topo do Movimento Sindical Brasileiro, ou seja, saímos do último lugar para o 3º maior em estrutura e o 1º em organização, ação e conquistas á família rodoviária.</p>
		<p>Hoje, o Sindicato dos Motoristas de São José do Rio Preto é consagrado pela sua ação sindical, política e é reconhecido internacionalmente em congressos em vários países, entre eles; Venezuela, Cuba, Colômbia, Portugal e Espanha. A entidade também se destaca por fazer um sindicalismo diferente no estado de São Paulo. Por isso a denominação de SINDICALISMO DE SOLUÇÃO.</p>
		<p>Hoje nosso Sindicato oferece vários Benefícios a seus mais de 12.380 filiados e familiares na Sede em São José do Rio Preto, como nas sub sedes em Monte Aprazível e Catanduva e cidades adjacentes onde é abrangida nossa base territorial.</p>
		<p>Médicos de várias especialidades, dentistas, convênios com laboratórios e clínicas, clube de campo, pousada, além dos convênios com clube de Catanduva e Praia Grande, caminhão para mudanças, Sistema de Saúde, Sede Recreativa com piscina, quadra poli esportiva e muito mais,...</p>
		<p>Venha filiar-se e participar de todos os benefícios oferecidos pelo nosso Sindicato.</p>
	</div>
</section>
`

const galery = (data) => html`
		<div id="galery" class="galery" style="background-image:url('${data.images[data.index]}')">
			<div class="galery_button_next" @click=${onNextClicked}><p>></p></div>
			<div class="galery_button_previous" @click=${onPreviousClicked}><p><</p></div>
			</div>`

window.onload = function(){
	render(pageHome(data), document.body)
}

const onNextClicked = {
  handleEvent(e) {
		if(data.index < data.images.length-1){
			data.index = data.index+1
		} else{
			data.index = 0
		}
		render(pageHome(data), document.body);
  },
  capture: true
}

const onPreviousClicked = {

	handleEvent(e) {
		if(data.index > 0){
			data.index = data.index-1
		} else{
			data.index = 0
		}
		render(pageHome(data), document.body);
  },
  capture: true
}


function htmlToElem(html) {
  let temp = document.createElement('template');
  html = html.trim(); // Never return a space text node as a result
  temp.innerHTML = html;
  return temp.content.firstChild;
}
