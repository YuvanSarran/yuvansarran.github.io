navbar = document.getElementById('navbar')
heading = document.querySelector('.heading')
profile = document.querySelector('.profile')
pname = document.querySelector('.name')
navsearch = document.querySelector('.navsearch')

function navbaropen() {
    navbar.style.display = 'block';
    navbar.style.zindex = '2';
    profile.style.display = 'none';
    navbar.style.top = '67px';
    pname.style.display = 'none';
    heading.style.display = 'none';
}
function navbarclose(){
    navbar.style.display = 'none';
}