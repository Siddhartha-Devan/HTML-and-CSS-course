console.log("hello")

// document.querySelector('#football').addEventListener('click', function(e){
//     console.log("football is clicked");
    
// })



document.querySelector('#sport').addEventListener('click', function(e){
    console.log(e.target.getAttribute('id') + ' is clicked.' )     

    const targ = e.target

    if (targ.style.backgroundColor === 'gray'){
        targ.style.backgroundColor = 'antiquewhite'
    }else{
        targ.style.backgroundColor = 'gray'
    }
})

const sports = document.querySelector('#sport')
const newSport = document.createElement('li')

newSport.innerText = 'Tennis'
newSport.setAttribute('class', 'box')
newSport.setAttribute('id', 'tennis')

sports.appendChild(newSport)