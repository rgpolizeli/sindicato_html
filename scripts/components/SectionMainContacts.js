var component

const parameters = {
	mainContacts: '',
	socialNetworks: '',
	formContact: ''
}

export function initComponent(){
	let c = getComponent()
	if(!isAttachedOnDOM()) attachOnDOM()
}

function getComponent(){
	return (component === undefined ? instanceComponent() : component)
}

export function setComponentParameters(mainContacts,socialNetworks,formContact){
	parameters.mainContacts = mainContacts
	parameters.socialNetworks = socialNetworks
	parameters.formContact = formContact
}

function isAttachedOnDOM(){
	return false
}

function attachOnDOM(){
	document.getElementsByTagName('body')[0].appendChild(getComponent())
}

function instanceComponent(){
	component = document.createElement('section')
	component.setAttribute( 'class', 'section_main_contacts' )
	component.innerHTML = `
	<div class="container_contact">
			<div class="principal_contacts" id="principal_contacts">
				${parameters.mainContacts}
			</div>
			<div class="social_networks">
				${parameters.socialNetworks}
			</div>
	</div>
	<div id="contact_form">
		${parameters.formContact}
	</div>
	`

	return component
}
