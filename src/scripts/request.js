const baseUrl = 'https://api.github.com/users'

export async function requestUser(value) {
    const user = await fetch(`${baseUrl}/${value}`, {
        method: "GET"
      })
      .then (response => {
        console.log(response)
          if(response.ok){
            return response.json()
          }
          else{
            return window.location.replace('../src/pages/error.html')
          }
      })
    localStorage.setItem('userData', JSON.stringify(user))
};

export async function requestRepos(value){
  const repos = await fetch(`${baseUrl}/${value}/repos`, {
    method: 'GET'
  })
  .then (response =>{
    return response.json()
  })
  localStorage.setItem('userRepos', JSON.stringify(repos))
  window.location.replace('../src/pages/profile.html')
}
  