var component

const parameters = {
	ramais: '',
	subHeaderContent: '',
	subHeaderUrl: ''
}

export function initComponent(){
	let c = getComponent()
	if(!isAttachedOnDOM()) attachOnDOM()
}

function getComponent(){
	return (component === undefined ? instanceComponent() : component)
}

export function setComponentParameters(ramais,subHeaderContent,subHeaderUrl){
	parameters.ramais = ramais
	parameters.subHeaderContent = subHeaderContent
	parameters.subHeaderUrl = subHeaderUrl
}

function isAttachedOnDOM(){
	return false
}

function attachOnDOM(){
	document.getElementsByTagName('body')[0].appendChild(getComponent())
}

function instanceComponent(){
	component = document.createElement('section')
	component.setAttribute( 'class', 'section_centralized' )
	component.innerHTML = `
	<div class="subheader" style="background-image:linear-gradient(rgba(52, 52, 52, 0.2), rgba(52, 52, 52, 0.2)), url(${parameters.subHeaderUrl})">
		${parameters.subHeaderContent}
	</div>
	<div class="group_ramais">
		${parameters.ramais}
	</div>
	`

	return component
}
