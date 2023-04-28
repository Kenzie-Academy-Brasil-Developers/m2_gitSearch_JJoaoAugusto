const userData = JSON.parse(localStorage.getItem('userData'))
const userRepos = JSON.parse(localStorage.getItem('userRepos'))

function renderProfile(data){
    const profileUser = document.querySelector('.profile__user')
    const profileImage = document.querySelector('.profile__image')

    profileUser.innerHTML = data.name
    profileImage.src = data.avatar_url

}
renderProfile(userData)

function renderProjects(data){
    const ul = document.querySelector('.user__list')
    data.forEach(repositorio => {

        const li = document.createElement('li')
        li.classList.add('list__project')

        let title = repositorio.name
        if(repositorio.name.length > 25){
            title = title.substring(0,25) + '...'
        }

        let desc = repositorio.description
        if(repositorio.description.length > 100){
            desc = desc.substring(0,100) + '...'
        }

        li.innerHTML = 
        `
            <h3 class="project__title">${repositorio.name}</h3>
            <span class="project__description">${desc}</span>
            <button class="project__button">Repositório</button>
        `
        ul.appendChild(li)
    })
}
renderProjects(userRepos)