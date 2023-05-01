function changeUser(){
    const button = document.querySelector('.message__button')
    button.addEventListener('click', (event) => {
        window.location.replace('../../index.html')
    })
}
changeUser()