const button = document.querySelector('button');
const modal = document.getElementById('modal-container')

button.addEventListener('click', () => {
    modal.classList.add('close')
})