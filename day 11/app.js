function dummy(){
    console.log("Hello Log")
}


dummy()

const buttonShower = document.querySelector('.boxes')

const contentShower = document.querySelector('.sub-title')

function changer(){
    if(contentShower.classList.contains('hidden-cont')){
        contentShower.classList.remove('hidden-cont')
        buttonShower.innerHTML = 'Reveal less'
    }else{
        contentShower.classList.add('hidden-cont')
        buttonShower.innerHTML = 'Reveal More'
        
    }
}


buttonShower.addEventListener('click', changer)



