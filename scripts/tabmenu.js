window.onload = function(){
  const tab_menus = document.getElementsByName('tab_menu')
  for(var i = 0; i<tab_menus.length; i++ ){
    tab_menus[i].addEventListener('click',function(event){
      ontabMenuClicked(event.currentTarget)
    })
  }
  initButtonMenu();
  initNavBar();
}

function ontabMenuClicked(clickedMenu){
	const k = clickedMenu.getAttribute("index")
  const contents = document.querySelectorAll('#tab_menu_content')

  for(var i = 0; i<contents.length; i++ ){
    if(contents[i].getAttribute('index') === k){
      contents[i].style.display = "flex"
    } else{
      contents[i].style.display = "none"
    }
  }

	document.querySelector('.tab_menu_active').className = 'tab_menu'
	clickedMenu.className = 'tab_menu_active'

}


function initButtonMenu(){
  const button_menus = document.getElementsByName('button_menu')
  for(var i = 0; i<button_menus.length; i++ ){
    button_menus[i].addEventListener('click',function(event){
      onbuttonMenuClicked(event.currentTarget)
    })
  }
}

function onbuttonMenuClicked(clickedMenu){
	const k = clickedMenu.getAttribute("index")
  const contents = document.querySelectorAll('.button_menu_content')

  for(var i = 0; i<contents.length; i++ ){
    if(contents[i].getAttribute('index') === k){
      contents[i].style.display = "block"
    } else{
      contents[i].style.display = "none"
    }
  }

	document.querySelector('.button_menu_active').className = 'button_menu'
	clickedMenu.className = 'button_menu_active'

}

function initNavBar(){
  let navBar = document.getElementsByTagName("nav")[0]
  
  if (window.scrollY > 0) {
    navBar.className = "nav_scrolled"
  } else{
		  navBar.className = ""
  }
}
