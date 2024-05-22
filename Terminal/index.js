

function createPromise(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data)
        }, 1000)
    })
}

createPromise(1).then((data) => {
    console.log(data)
    return createPromise(2)
}).then((data) => {
    console.log(data)
    return createPromise(3)
}).then((data) => {
    console.log(data)
    return createPromise(4)
}).then((data) => {
    console.log(data)

})


