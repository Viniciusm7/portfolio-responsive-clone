const navMenu = document.getElementById('nav_menu'),
    navToggle = document.getElementById('nav_toggle'),
    navClose = document.getElementById('nav_close');


    // SHIOW MENU
    
if(navToggle){ //validate if constant exists 
    navToggle.addEventListener('click',() => {
        navMenu.classList.add('show-menu')
    })
}
if(navClose){  //close to menu.       // fecha o menu
    navClose.addEventListener('click', ()=>{
        navMenu.classList.remove('show-menu')
    })
}
    
    
// REMOVE MENU MOBILE 

const navLink = document.querySelectorAll('.nav-link')

function linkAction(){
    const navMenu = document.getElementById('nav_menu')
    // when we click on each nav-link, we remove the show-menu class
    // Quando clicar em cada nav-link, remove a class menu.
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))
    
    


// accordion skills

const skillsContent = document.getElementsByClassName('skills-content'),
      skillsHeader = document.querySelectorAll('.skills-header');

function toggleSkills(){
    let itemClass = this.parentNode.className

    for(i = 0; i < skillsContent.length; i++){
        skillsContent[i].className = 'skills-content skills-close'
    }
    if(itemClass === 'skills-content skills-close'){
        this.parentNode.className = 'skills-content skills-open'
    }
}

skillsHeader.forEach((el)=>{
    el.addEventListener('click', toggleSkills)
})

// QUALIFICATION TABS

const tabs = document.querySelectorAll('[data-target]'),
      tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab =>{
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent =>{
                tabContent.classList.remove('qualification-active')
        })
        target.classList.add('qualification-active')

        tabs.forEach(tab => {
            tab.classList.remove('qualification-active')
        })
        tab.classList.add('qualification-active')
    })
})