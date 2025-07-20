const token = ~~[Math.random() * 12345678]

const pictures = ['1.jpg', '2.jpg', '3.jpg']

const login = new Promise ((resolve, reject) => {
    let username = 'albaroktaha'

    console.log('Processing token user now...')

    setTimeout(() => {
        if (username) {
            resolve(token)
        } else {
            reject('Login failed, cannot get token')
        }        
    }, 1000);
})

const getUser = new Promise ((resolve, reject) => {
    let apiKey = 'xkey123'

    console.log('Processing apikey now...')

    setTimeout(() => {
        if (apiKey) {
            resolve(apiKey)
        } else {
            reject('Your token is failed')
        }        
    }, 1000);

})

const getPictures = new Promise ((resolve, reject) => {
    let pic = pictures

    console.log('Processing pictures now...')

    setTimeout(() => {
        if (pic) {
            resolve(pic)
        } else {
            reject('Your apikey is failed')
        }        
    }, 15000);
})

async function userResult() {
    try {
        console.log('Processing get token now...')
        const token = await login
        console.log('Your token is : ', token)

        console.log('Processing get apikey now...')
        const apiKey = await getUser
        console.log('Your apikey is : ', apiKey)

        console.log('Processing your pictures now...')
        const pic = await getPictures
        console.log('Result your pictures : ', pic)

        console.log('All processing done')
    } catch (error) {
        console.error(error)
    }    
}

userResult()