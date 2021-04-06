var component

const parameters = {
	cards: '',
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

export function setComponentParameters(cards,subHeaderContent,subHeaderUrl){
	parameters.cards = cards
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
	<div class="group_cards">
		${parameters.cards}
	</div>
	`

	return component
}
