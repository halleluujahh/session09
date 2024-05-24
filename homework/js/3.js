let  numbers=[1,5,8,7,9,6,5,41,2,6,55,4,8];
let max = numbers[0];
for (let i = 1; i < numbers.length; i++) {
    if(max<numbers[i]){
        max = numbers[i];
    }
}
console.log(max);