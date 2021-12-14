// 구버젼 함수만들기
const functionLiteral = function() {
    return 'a';

}

// 신버젼 함수 만들기 (화살표 함수)
const functionLiteral_new = () => {
    return 'a';
}

// const array = ['가', '나', '다'];

// for(var i in array){
//     console.log(array[i]);
// }

// for(let item of array){
//     console.log(item);
// }

// for(var i = 0; i<array.length; i++){
//     var index = i;
//     var item = array[i];
//     console.log(item + ' : ' + index);
// }

// array.forEach((item, index) => {
//     console.log(`${item} : ${index}`);
// })
const array01 = ['김지환', '김규림'];

array01.forEach((index, item) => {
    console.log(index + ': ' + item);
    console.log(`${index+1} : ${item} `);
})


const array = ["김지환", "김규림"];

array.forEach((index, item)=>{
    console.log(index + " : " + item);
})