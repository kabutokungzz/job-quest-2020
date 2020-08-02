console.log(fizzBuzz(21))
console.log(fizzBuzz(45))
function fizzBuzz(number) {
    var fizz,Buzz,name_f,name_b;
    fizz = number  % 3;
    Buzz = number % 5;
    name_f=''
    for (let i = 0 ; i == fizz;i++){
        name_f = "fizz";
    }
    name_b=''
    for (let i = 0 ; i == Buzz;i++){
        name_b = "Buzz";
     }
     var sumname = name_f+name_b
     return sumname;
    
}