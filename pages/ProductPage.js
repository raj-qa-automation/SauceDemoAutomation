function firstNonRepeatingCharacter(str) {

    for(let i=0; i<str.length;i++){
        let char=str[i];
        if(str.indexOf(char)===str.lastIndexOf(char)){
            return char;
        }
    }
    return null;
}
//console.log(firstNonRepeatingCharacter("kalki"));

//count vowels in a string
function countVowels(str){
    let count =0;
    for(let i=0;i<str.length;i++){
        let char=str.charAt(i).toLowerCase();
        if(char==='a'||char==='e'||char==='i'||char==='o'||char==='u'){
            count=count+1;
        }
    }
    return count;
}
//console.log(countVowels("nnbmvnvmbnbmvnbmvnbmnvmbn"));

function reverseString(str){

    let reversed="";
    for(let i=str.length-1;i>=0;i--)
        {
       
        reversed=reversed+str.charAt(i);
    }
    return reversed;
}
console.log(reverseString("kalki avatar"));


