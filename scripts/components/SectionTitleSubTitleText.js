var component

var parameters = {
	content: ''
}

export function initComponent(){
	let c = getComponent()
	if(!isAttachedOnDOM()) attachOnDOM()
}

function getComponent(){
	return (component === undefined ? instanceComponent() : component)
}

export function setComponentParameters(content){
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
	component.setAttribute( 'class', 'section_centralized' );
	component.innerHTML = `
	<div class="div_title_subtitle_text">
		${parameters.content}
	</div>
	`
	return component
}
