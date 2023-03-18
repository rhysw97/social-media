
export async function postRequest(endpoint: string, data: any) {
    const responseData = await fetch(`/${endpoint}`, {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
       
        //sends as JSON string to backend
        body: JSON.stringify(data)
    })
    .then((response) => response.json())
    .then(data => data)
    return responseData
}

export async function getRequest(endpoint: string) {
    const responseData = await fetch(`/${endpoint}`)
    .then(response => response.json())
    return responseData
}