let numbers=[1,5,8,7,9,6,5,41,2,6,55,4,8];
let temp = 0;

/* bubble sort O(N2) */
// for (let i = 0; i < numbers.length; i++) {
//     for (let j = 0; j < numbers.length-1; j++) {
//         if(numbers[j]>numbers[j+1]){
//             temp = numbers[j];
//             numbers[j]=numbers[j+1];
//             numbers[j+1] = temp;
//         }
//     }
// }

/*  selection sort O(N2) */
// for(let i = 0; i < numbers.length-1; i++) {
//     for (let j = i+1; j < numbers.length; j++) {  
//             if(numbers[i]>numbers[j]){
//                 temp = numbers[i];
//                 numbers[i]=numbers[j];
//                 numbers[j]=temp;
//             }
//     }
// }

/* insertion sort O(N2) */
// for (let i = 1; i < numbers.length;i++){
//     let key = numbers[i];
//     j = i-1;

//     while(j>=0&&numbers[j]>key){
//         numbers[j+1]=numbers[j];
//         j-=1;
//     }
//     numbers[j+1]=key;
// }

console.log(numbers);