const div = document.getElementsByClassName('buttonContainer')[0]
const btn = document.getElementById('btn')

div.addEventListener('click', (e) =>{
    alert('hola! Soy el div!')
})
btn.addEventListener('click', (e) =>{
    e.stopPropagation()
    alert('hola!')
})