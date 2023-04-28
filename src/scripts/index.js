import {requestUser, requestRepos} from './request.js'

function userInput() {
    const buttonSearch = document.querySelector('.search__button')
    const inputSearch = document.querySelector('.search__input')

    buttonSearch.addEventListener('click', async (event) => {
        event.preventDefault()
        localStorage.clear()
        let value = inputSearch.value
        localStorage.setItem('userName', JSON.stringify(value))
        await requestUser(value)
        await requestRepos(value)
    })
}
userInput()
