var component

export function initComponent(){
	let c = getComponent()
	if(!isAttachedOnDOM()) attachOnDOM()
}

function getComponent(){
	return (component === undefined ? instanceComponent() : component)
}

function setComponentParameters(){
}

function isAttachedOnDOM(){
	return false
}

function attachOnDOM(){
	document.getElementsByTagName('body')[0].appendChild(getComponent())
}

function instanceComponent(){
	component = document.createElement('section')
	component.setAttribute( 'class', 'header_home' )
	component.innerHTML = `
		<div class="header_home_content">
			<div class="container_logo">
				<img class="logo" src="./icones/logo.png" />
			</div>
			<h1>SINDICATO DOS MOTORISTAS</h1>
			<h2>
				Força na luta pelos Direitos da Classe.
				<br>Qualidade de vida aos nossos associados.
			</h2>
		</div>
	`
	return component
}
