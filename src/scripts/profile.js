const userData = JSON.parse(localStorage.getItem('userData'))
const userRepos = JSON.parse(localStorage.getItem('userRepos'))

function renderProfile(data){
    const profileUser = document.querySelector('.profile__user')
    const profileImage = document.querySelector('.profile__image')

    profileUser.innerHTML = data.name
    profileImage.src = data.avatar_url

}
renderProfile(userData)

function renderRepos(data){
    const ul = document.querySelector('.user__list')
    data.forEach(repositorio => {

        const li = document.createElement('li')
        li.classList.add('list__repos')

        let title = repositorio.name
        if(title.length > 20){
            title = title.substring(0,20) + '...'
        }

        let desc = repositorio.description
        if(desc){
            if(desc.length > 100){
                desc = desc.substring(0,100) + '...'
            }
        }
        else{
            desc = 'Sem descrição...'
        }
        
        li.innerHTML = 
        `
            <h3 class="repos__title">${title}</h3>
            <span class="repos__description">${desc}</span>
            <a href="${repositorio.html_url}" target="_blank" class="repos__button">Repositório</a>
        `
        ul.appendChild(li)
    })
}
renderRepos(userRepos)

function changeUser(){
    const button = document.querySelector('.initial__page')
    button.addEventListener('click', (event) => {
        window.location.replace('../../index.html')
    })
}
changeUser()