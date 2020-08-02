secondMax([2, 3, 4, 5])
secondMax([9, 2, 21, 21, 23, 25]);
secondMax([4, 4, 4, 4])
secondMax([4123])
secondMax([])
function secondMax(array) {

    if (array.length <= 0) {
        throw new Error("Error!");
    }
    var number = 0;
    // find max
    for (let i = 0; i < array.length; i++) {
        //If number is less than array[i]
        if (number < array[i]) {
            number = array[i]
        }
    }
    var maximum = number;
    var pos = [];
    //Find the secondary value from the highest value
    for (let i = 0; i < array.length; i++) {
        pos[i] = maximum - array[i]
    }
    for (let i = 0; i < pos.length; i++) {

        //If number is less than array[i]
        if (number > pos[i] && pos[i] != 0) {
            number = array[i]
        }
    }
    console.log(array)
    console.log(number)
}