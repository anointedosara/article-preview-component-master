const btn = document.querySelector('.share')
const hidden = document.querySelector('.hidden')

btn.addEventListener('click', () => {
    hidden.classList.toggle('show')
    btn.classList.toggle('bg')
})