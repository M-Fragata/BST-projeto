const buttonNavbar = document.querySelector('button.btn')
const ul = document.querySelector('ul#navLinks')
const icon = document.querySelector('.fa-solid')
const bagresPero = document.querySelector('.headerImg')

buttonNavbar.addEventListener('click', () => {

    ul.classList.toggle('show')

    if(ul.classList.contains('show')) {

        bagresPero.style.height = "calc(100dvh - 20dvh + 160px)"
    } else{

        bagresPero.style.height = "calc(100dvh - 20dvh)"
    }

    icon.classList.toggle('fa-times')
    icon.classList.toggle('fa-bars')
})