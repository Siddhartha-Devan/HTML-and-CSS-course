function f1(){
    console.log("hi")
}

f1()


const backgroundColorChanger = document.querySelectorAll('.boxes')

function colorChanger(event){
    this.style.backgroundColor = 'rgb(241, 152, 8)'
}


backgroundColorChanger.forEach( function(element) {
    element.addEventListener('click', colorChanger)
})

