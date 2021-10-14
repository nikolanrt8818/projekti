const wtfUrl = "https://yesno.wtf/api"
const imgArticle = document.getElementById('img-article')
const ansText = document.getElementById('answer-text')
const thinkingArticle = document.getElementById('thinking')

function showThinking() {
    thinkingArticle.classList.remove('hide')
}

function hideThinking() {
    thinkingArticle.classList.add('hide')
}

function decide(event) {
    event.preventDefault()
    imgArticle.innerHTML = ""
    ansText.innerHTML = ""
    showThinking()

    fetch(wtfUrl, {
        method: "GET",
        headers: {
            "accept":"application/json"
        }
    }).then(async (response) => {
        const result = await response.json()

        const img = document.createElement('img')
        img.setAttribute('src', result.image)
        imgArticle.appendChild(img)
        ansText.textContent = result.answer
        hideThinking()
    })
}


document.querySelector('form').addEventListener('submit', decide)