


const apiKey = 'zDwdcuy09Jfhmozry1gTNHxOQP7uLx1j'
//https://api.giphy.com/v1/gifs/random?api_key=zDwdcuy09Jfhmozry1gTNHxOQP7uLx1j

fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
    .then(resp => {
        resp.json()
            .then(resp => console.log(resp))
    })



