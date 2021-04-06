/*const data = {
  images: [
    "./img/clube/clube-1.jpg",
    "./img/clube/clube-2.jpg",
    "./img/clube/clube-3.jpg",
    "./img/clube/clube-4.jpg",
    "./img/clube/clube-5.jpg",
    "./img/clube/clube-6.jpg",
    "./img/clube/clube-7.jpg",
    "./img/clube/clube-8.jpg"
  ],
  index: 0
}
*/
function onNextClicked(){

		if(data.index < data.images.length-1){
			data.index = data.index+1
		} else{
			data.index = 0
		}
refreshBackgroundImage()

}

function onPreviousClicked() {


		if(data.index > 0){
			data.index = data.index-1
		} else{
			data.index = 0
		}
refreshBackgroundImage()

}

function refreshBackgroundImage(){
  const header = document.querySelector('.gallery')
  header.style.backgroundImage = "url(" + data.images[data.index]  +")"
}
