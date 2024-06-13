// console.log('hello world')
// fetch('https://reqres.in/api/users/', {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//     name: 'user 1'
//     })
// }).then(response => {
//         if (response.ok) {
//             console.log('success')
//         } else {
//             console.log('not successful')
//         }
//         return response.json()
//     })
//     .then(data => console.log(data))
//     .catch(err => console.log(err))


    console.log('hello world')
    fetch('https://cs6262.gtisc.gatech.edu/receive/gyadav35/699/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({"username": "gyadav35"})
        })
        .then(data => console.log(data))
        .catch(err => console.log(err))

