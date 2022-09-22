const nav_bar = document.querySelector('.nav-bar');
const form_container = document.querySelector('.form-container');
const signup_close_btn = document.getElementById('signup_close_btn');

// CREATING NAVBAR ELEMENTS
const logo_img = document.createElement('img');
const search_div = document.createElement('div');
const search_icon_img = document.createElement('img');
const search_input = document.createElement('input');
const header_links_div = document.createElement('div');
const login_btn = document.createElement('button');
const signup_btn = document.createElement('button');
const burger_img = document.createElement('img');

// GIVING NAVBAR ELEMENTS CLASSES
logo_img.classList.add('logo'); 
search_div.classList.add('search'); 
search_icon_img.classList.add('search-icon'); 
search_input.classList.add('search-input');
header_links_div.classList.add('header-links'); 
login_btn.classList.add('log-out'); 
signup_btn.classList.add('log-out'); 
burger_img.classList.add('menu');

// INSERTING VALUES TO ELEMENTS 
logo_img.src = '../../assets/logo.png';
search_icon_img.src = '../../assets/search-icon.png';
search_input.placeholder = 'search';
login_btn.innerText = 'Log in';
signup_btn.innerText = 'Sign up';
burger_img.src = '../../assets/menu.png';

// APPENDING ELEMENTS IN THEIR RESPECTIVE CONTAINER
nav_bar.append(logo_img, search_div, header_links_div);
search_div.append(search_icon_img, search_input);
header_links_div.append(signup_btn, login_btn);


// SIGN UP POPUP
signup_btn.addEventListener('click', ()=>{
    form_container.style.display = 'block';
});

signup_close_btn.addEventListener('click', ()=>{
    form_container.style.display = 'none';
});