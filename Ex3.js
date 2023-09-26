let array =[1, 25, 14, 0, -3, 7, 2];
//here we are gowing over each element from index 0 
for(let i=0; i<array.length; i++){
    //here is starting from the second index after the i (i+1)
    for(let j=i+1; j < array.length; j++){
    //here we are comparing the first element to the second one and if its bigger store it in the sorted variable
        if(array[i] > array[j]){
            let element = array[i];
            array[i] = array[j];
            array[j] = element;
        }
    }
}
console.log(array);