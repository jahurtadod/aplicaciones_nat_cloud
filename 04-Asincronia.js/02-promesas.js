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

let array = [1, 2, 3];
// addToArray(4, array);
addToArray(4, array).then(() => console.log(array));