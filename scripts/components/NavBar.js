/**
*	Modulo criado para representar o componente NavBar.
*/

//guarda o component em código html.
var component


/**
* Inicia o componente, recebendo os parâmetros a serem alterados ou definidos como parâmetro. Obtenha a instancia do componente, altere os parâmetros(se necessario) e adicione o componente ao DOM (se necessário).
* Os parâmetros são codigos html, então, por exemplo, se um componente é formado por um h1, um h2 e um conjunto de p's, basta passar o h1 por parâmetro, incluindo a tag de inicio e fim, o h2 e os p's. Não é necessário parâmetro para cada p ou uma lista, apenas uma string contendo todos os p's
*/
export function initComponent(){
	let c = getComponent()
	if(!isAttachedOnDOM()) attachOnDOM()
}

/**
* Retorna o componente se este já estiver instanciado ou retorna uma nova instância.
*/
function getComponent(){
	return (component === undefined ? instanceComponent() : component)
}

/**
* Se a alteração de um parâmetro for necessária, criar uma função para alterar cada parâmetro do componente.
*/
function setComponentParameters(){
}

/**
* Retorna se o componente está adicionado ao DOM ou não.
*/
function isAttachedOnDOM(){
	return document.getElementsByName('nav').length > 0
}

/**
* Adiciona o componente ao DOM.
*/
function attachOnDOM(){
	document.getElementsByTagName('body')[0].prepend(getComponent())
}

/**
* Retorna uma nova instância do componente.
*/
function instanceComponent(){
	component = document.createElement('nav')
	component.innerHTML = `
		<ul>
		  <li>
			<a href="./">INÍCIO</a>
		  </li>
		  <li>
			<a href="./beneficios.html">BENEFÍCIOS</a>
		  </li>
		  <li>
			<a href="./index.html#section_cases_cover">JURÍDICO</a>
		  </li>
		  <li>
			<a href="./index.html#section_contact_cover">SERVIÇOS</a>
		  </li>
		  <li>
			<a href="./contatos.html">CONTATOS</a>
		  </li>
		  <li >
			<a class="button_filiate" href="./index.html#section_contact_cover">AFILIE-SE</a>
		  </li>
		</ul>
	`
	return component
}

/**
* Se o componente deve responder a algum evento, adicionar aqui.
*/
document.addEventListener('scroll', function(e) {

  if(component !== undefined){
	  if (window.scrollY > 0 && component.className !== "nav_scrolled") {
		component.classList.toggle("nav_scrolled")
	  } else{
		  if (window.scrollY === 0 && component.className === "nav_scrolled"){
			  component.classList.toggle("nav_scrolled")
		  }
	  }
  }


})
