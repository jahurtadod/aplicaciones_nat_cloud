function addToArray(data, array, callback) {
    if (!array) {
        callback(new Error('No existe el array'), null);
    } else {
        setTimeout(() => {
            array.push(data);
            callback(null, array);
        }, 1000);
    }
}

let array = [1, 2, 3];
addToArray(4, array, function (err) {
    if (err) {
        console.error(err.message);
    } else {
        console.log(array);
    }
});