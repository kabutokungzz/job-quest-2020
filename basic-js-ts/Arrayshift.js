
shift(['john', 'jane', 'sarah', 'alex'], 'left', 2) // result = ['sarah', 'alex', 'john', 'jane']
shift([1, 2, 3, 4 ,5], 'right', 3) //[3, 4, 5, 1, 2]
function shift(array,rotate,number){

    if (rotate == 'left'){
        let index = []; //find index at array
        let check_nv = 0 //check rotate
        for(let i = 0; i < array.length; i++){
            index[i] = i;
        }
        //ex[1,2,3,4]
        // console.log(index)
        //shift left
        for(let i = 0; i < array.length; i++){

            check_nv = i - number;
            //if check_nv == negative number
            if(check_nv < 0){
                check_nv = array.length + check_nv
                index[check_nv] = array[i]
            }
            else{
                check_nv = i - number
                index[check_nv] = array[i]
            }
            // console.log(check_nv)

        }
        console.log(index)

    }
    else if (rotate == 'right'){
        //Positive
        let index = []; //find index at array
        let check_ps = 0 //check rotate
        for(let i = 0; i < array.length; i++){
            index[i] = i;
        }
        //shift right
        for(let i = 0; i < array.length; i++){

            check_ps = i + number;
            //if check_nv == negative number
            if(check_ps > 4){
                check_ps = check_ps - array.length
                index[check_ps] = array[i]
            }
            else{
                index[check_ps] = array[i]
            }
        }
        console.log(index)

    }
    // console.log(array.length,rotate,number)

}