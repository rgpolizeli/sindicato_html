var component

const parameters = {
	menus: '',
	contents: ''
}

export function initComponent(){
	let c = getComponent()
	if(!isAttachedOnDOM()) attachOnDOM()
	registerListeners()
}

function getComponent(){
	return (component === undefined ? instanceComponent() : component)
}

export function setComponentParameters(menus,contents){
	parameters.menus = menus
	parameters.contents = contents
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
		<div class="div_tab_layout">
			<div class="tab_menu">
				${parameters.menus}
			</div>
			<div class="tab_content">
				${parameters.contents[0]}
			</div>
		</div>
	`

	return component
}

function registerListeners(){
	const tabs = document.getElementsByName('tab_item')
	for(var i = 0; i<tabs.length; i++ ){
		tabs[i].addEventListener('click',function(event){
			onMenuClicked(event.currentTarget)
		})
	}
}

export function onMenuClicked(clickedMenu){
	const i = clickedMenu.getAttribute("index")
	document.querySelector('.tab_content').innerHTML = parameters.contents[i]

	document.querySelector('.tab_item_active').classList.replace('tab_item_active', 'tab_item')
	clickedMenu.classList.replace('tab_item', 'tab_item_active')

}
