/*
    aebcbdaze
    aebcdz
*/

function removestr(string){
    var unique= "";
    //here we are using a constant variable to on each iteration store the character of the string inside this variable
    for(const chr of string){
    //inside this if statment we are checking if this unique variable contain the char if not just add it to it 
        if(!(unique.includes(chr))){
            unique += chr;
        }
    }
    return unique;
}
let str=prompt("Enter a string:");
console.log(removestr(str));