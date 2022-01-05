var form = document.getElementById("myForm")

form.addEventListener('submit', function (e) {
    e.preventDefault()

    // var search = document.getElementById("search").value

    // var skillName = search.split(' ').join('')
    // fetch("http://api.github.com/users/"+search)
    //     .then((result) => result.json())
    //     .then((data) => {
    //         console.log(data)
    //
    //         document.getElementById("result").innerHTML = ` <a target="_blank" href="https://www.github.com/${name}"> <img src="${data.avatar_url}"></a>`
    //
    // })

    bang.addEventListener("click", getRepos)


    async function getRepos() {
        const url =   "https://api.github.com/search/repositories?q=name:todolist"
        const response = await fetch(url)
        const result = await response.json()

        result.items.forEach(i=> {
            const anchor = document.createElement("a")
            anchor.href = i.html_url
            anchor.textContent = i.full_name

            results.appendChild(anchor)
            results.appendChild(document.createElement("br"))
        })
    }


})

