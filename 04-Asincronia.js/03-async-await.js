function addToArray(data, array) {
    return new Promise((resolve, reject) => {
        if (!array) {
            reject(new Error('No existe el array'));
        } else {
            setTimeout(() => {
                array.push(data);
                resolve(array);
            }, 1000);
        }
    });
}

async function processData(data, array) {
    try {
        const result = await addToArray(data, array);
        console.log(result);
    } catch (error) {
        return console.log(err);
    }
}

let array = [1, 2, 3];
processData(4, array);