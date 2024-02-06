function shuffle(array) {
    const newArray = [];

    const length = array.length;
    for (let i = 0; i < length; i++) {
        const index = Math.floor(Math.random() * array.length);

        newArray.push(array[index]);
        array.splice(index, 1);
    }

    return newArray;
}

module.exports = shuffle;