/**
*	Modulo criado para representar o componente NavBar.
*/

//guarda o component em código html.
var component


/**
* Inicia o componente. Obtenha a instancia do componente, altere os parâmetros e, caso necessário, adicione o componente ao DOM.
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
	return false
}

/**
* Adiciona o componente ao DOM.
*/
function attachOnDOM(){
	document.getElementsByTagName('body')[0].appendChild(getComponent())
}

/**
* Retorna uma nova instância do componente.
*/
function instanceComponent(){
	component = document.createElement('footer')
	component.innerHTML = `
		<p>© 2021 - Sindicato dos Condutores de São José do Rio Preto</p>
		<div>
		<a href="#"><img src="./icones/facebook.svg" style="width:3rem; height:3rem;"/></a>
		<a href="#"><img src="./icones/instagram.svg" style="width:3rem; height:3rem;"/></a>
		<a href="#"><img src="./icones/twitter.svg" style="width:3rem;height:3rem;"/></a>
		<a href="#"><img src="./icones/youtube play.svg" style="width:3rem;height:3rem;"/></a>
		</div>
	`
	return component
}

/**
* Se o componente deve responder a algum evento, adicionar aqui.
*/
