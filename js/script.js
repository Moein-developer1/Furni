// Import tw-elements components
import { Carousel, Modal , Input , Collapse , initTWE } from "../node_modules/tw-elements/js/tw-elements.es.min.js";
// Initialize tw-elements components
initTWE({ Carousel , Modal , Input , Collapse });


//////////////////////////////////

const $ = document

// Loading website actions

const spinnerContainer = $.querySelector('#spinnerContainer')
const websiteContent = $.querySelector('#websiteContent')

window.addEventListener('DOMContentLoaded' , () => {
    setTimeout(() => {
        spinnerContainer.classList.toggle('hidden')
        websiteContent.classList.toggle('hidden')
        // Initialize AOS//
        AOS.init();
    }, 1000);
})


// Toggle between modals
const loginModal = new Modal(document.getElementById("loginModal"));
const signupModal = new Modal(document.getElementById("signupModal"));

document.getElementById('signupModalBtn').addEventListener('click' , hideLoginModal)
document.getElementById('loginModalBtn').addEventListener('click' , hideSignupModal)

function hideLoginModal () {
    loginModal.hide()
}

function hideSignupModal () {
    signupModal.hide()
}

// Hamburger menu actions and show mobile menu

const hamburgerBtn = $.querySelector('#hamburger')
const menu = $.querySelector('#menu')

hamburgerBtn.addEventListener('click' , () => {
    hamburgerBtn.classList.toggle('open')
    menu.classList.toggle('open')
})


// close menu on click body

document.body.addEventListener('click' , (e) => {
    if((e.target !== hamburgerBtn && e.target.parentNode !== hamburgerBtn)&& 
    (e.target !== menu && e.target.parentNode !== menu)){
        closeMenu()
    }  
})


function closeMenu () {
    hamburgerBtn.classList.remove('open')
    menu.classList.remove('open')
}

/////////// Dark / Light mode actions ////////////////

// icons
const darkModeBtn = $.querySelector('#darkMode')
const sunIcon = $.querySelector('#sun')
const moonIcon = $.querySelector('#moon')

// Theme vars
const userTheme = localStorage.getItem('theme')
const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

// Icon toggling

const iconToggle = () => {
    sunIcon.classList.toggle('hidden')
    moonIcon.classList.toggle('hidden')
}

// Initial theme check
const themeCheck = () => {
    if(userTheme === 'dark' || (!userTheme && systemTheme)){
        document.documentElement.classList.add('dark')
        moonIcon.classList.add('hidden')
        return;
    } else {
        sunIcon.classList.add('hidden')
    }
}

// Manual theme switch
const themeSwitch = () => {
    if(document.documentElement.classList.contains('dark')){
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme' , 'light');
        iconToggle();
        return;
    } else {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme' , 'dark');
        iconToggle();
    }
}

// Call theme switch on clicking buttons
darkModeBtn.addEventListener('click' , () => {
    themeSwitch()
})

// Invoke theme check on initial load
window.addEventListener('DOMContentLoaded' , () => {
    themeCheck()
})