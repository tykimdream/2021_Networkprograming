const { parse } = require("path/posix");

function count(type)  {
    // 결과를 표시할 element
    const resultElement = document.getElementById('result');
    const dayElemnt = document.getElementById('day');
    
    // 현재 화면에 표시된 값
    let number = resultElement.innerText;
    let night = dayElemnt.innerText;
    
    // 더하기/빼기
    if(type === 'water') {
        if(parseInt(number) - 8 > 0){
            number = parseInt(number) - 8;
        }
        else{
            alert('에너지가 부족합니다.')
        }
    }
    else if(type === 'sleep')  {
        alert('정말 주무시겠습니까?.')
      number = 100;
      night = parseInt(night)+1;
    }
    
    // 결과 출력
    resultElement.innerText = number;
    dayElemnt.innerText = night;
  }

  function watering(type) {
    
    const status_1 = document.getElementById('1');
    const status_2 = document.getElementById('2');
    const status_3 = document.getElementById('3');
    const status_4 = document.getElementById('4');
    const status_5 = document.getElementById('5');
    const status_6 = document.getElementById('6');
    const status_7 = document.getElementById('7');
    const status_8 = document.getElementById('8');
    const status_9 = document.getElementById('9');
    
    let water_1 = status_1.innerText;
    let water_2 = status_2.innerText;
    let water_3 = status_3.innerText;
    let water_4 = status_4.innerText;
    let water_5 = status_5.innerText;
    let water_6 = status_6.innerText;
    let water_7 = status_7.innerText;
    let water_8 = status_8.innerText;
    let water_9 = status_9.innerText;

    if(type === '1'){
        water_1 = parseInt(water_1)+1;
    }
    
    let water_1 = status_1.innerText;

    // switch(type){
    //     case "1":
    //         water_1 = parseInt(water_1)+1;
    //         break;
    //     case 2:
    //         water_2+1;
    //         break;
    //     case 3:
    //         water_3 +1;
    //         break;
    //     case 4:
    //         water_4 +1;
    //         break;
    //     case 5:
    //         water_5 +1;
    //         break;
    //     case 6:
    //         water_6 +1;
    //         break;
    //     case 7:
    //         water_7 +1;
    //         break;    
    //     case 8:
    //         water_8 +1;
    //         break;
    //     case 9:
    //         water_9 +1;
    //         break;
    // }

    // switch(type){
    //     case 1:
    //         parseInt(status_1.innerText)+1;
    //         break;
    //     case 2:
    //         parseInt(status_1.innerText)+1;
    //         break;
    //     case 3:
    //         parseInt(status_1.innerText)+1;
    //         break;
    //     case 4:
    //         parseInt(status_1.innerText)+1;
    //         break;
    //     case 5:
    //         parseInt(status_1.innerText)+1;
    //         break;
    //     case 6:
    //         parseInt(status_1.innerText)+1;
    //         break;
    //     case 7:
    //         parseInt(status_1.innerText)+1;
    //         break;    
    //     case 8:
    //         parseInt(status_1.innerText)+1;
    //         break;
    //     case 9:
    //         parseInt(status_1.innerText)+1;
    //         break;
    // }

    
    // let water_1 = status_1.innerText;

    // if(type == '1'){
    //     water_1 = parseInt(water_1) + 1;
    // }
    
    // status_1.innerText = water_1;

}