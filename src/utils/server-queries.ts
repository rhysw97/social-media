
export function postRequest(endpoint: string, data: any) {
    fetch(`http://localhost:5000/${endpoint}`, {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
       
        //sends as JSON string to backend
        body: JSON.stringify(data)
    })
    console.log(data)
}