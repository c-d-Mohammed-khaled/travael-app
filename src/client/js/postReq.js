const postReq = async (url, result) => {
    await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(result)
    })
    .then( res => {
        try {
            res.json()
        } catch(error) {
            console.error('oh :(, ', error)
        }
    })
}

export default postReq