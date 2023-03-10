
export async function postRequest(endpoint: string, data: any) {
    const responseData = await fetch(`http://localhost:5000/${endpoint}`, {
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