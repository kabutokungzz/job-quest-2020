console.log(fib(1))
console.log(fib(3))
console.log(fib(12))

function fib(number){
    var min = 0; var max = 1;var sum = 1;
    for(let i = 1; i < number;i++ ){
        sum = min + max
        min = max
        max = sum
        // console.log(sum)
    }
    return sum;
}
