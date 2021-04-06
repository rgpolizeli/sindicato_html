var component

var parameters = {
	headerImageUrl: '',
	content: ''
}

export function initComponent(){
	let c = getComponent()
	if(!isAttachedOnDOM()) attachOnDOM()
}

function getComponent(){
	return (component === undefined ? instanceComponent() : component)
}

export function setComponentParameters(headerImageUrl,content){
	parameters.headerImageUrl = headerImageUrl
	parameters.content = content
}

function isAttachedOnDOM(){
	return false
}

function attachOnDOM(){
	document.getElementsByTagName('body')[0].appendChild(getComponent())
}

function instanceComponent(){
	component = document.createElement('section')
	component.setAttribute( 'class', 'header' )
	component.style.backgroundImage = `linear-gradient(rgba(52, 52, 52, 0.2), rgba(52, 52, 52, 0.2)), url(${parameters.headerImageUrl})`
	component.innerHTML = `
	<div class="header_centralized_content">
		${parameters.content}
	</div>
	`
	return component
}
