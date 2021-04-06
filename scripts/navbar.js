document.addEventListener('scroll', function(e) {
  let navBar = document.getElementsByTagName("nav")[0]
  let scrollY = window.scrollY === undefined ? window.pageYOffset : window.scrollY

  if (scrollY > 0 && navBar.className !== "nav_scrolled") {
    navBar.className="nav_scrolled"
  } else{
	  if (scrollY === 0 && navBar.className === "nav_scrolled"){
		  navBar.className = ""
	  }
  }
})