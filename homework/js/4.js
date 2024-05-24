let stringArray = prompt("Nhập vào một chuỗi:").trim();
while(stringArray.length==0){
    stringArray = prompt("Hãy nhập vào một chuỗi:");
}
let words = stringArray.split("");
for(let i=0; i<words.length; i++){
    // let j = words[i];
    if(words[i]===words[i].toLowerCase()){
        words[i] = words[i].toUpperCase();
        // words.splice(i,1,j.toUpperCase());
    }else{
        words[i] = words[i].toLowerCase();
        // words.splice(i,1,j.toLowerCase());
    }
}
let result = words.join("");
console.log(result);


        
