const { parse } = require("path/posix");

function count(type)  {
    const resultElement = document.getElementById('hp');
    const dayElemnt = document.getElementById('day');
    const actElement = document.getElementById('act_count');

    let number = resultElement.innerText;
    let night = dayElemnt.innerText;
    let count = actElement.innerText;
    
    // 더하기/빼기
    if(type === 'water') {
        if(parseInt(number) - 8 > 0){
            number = parseInt(number) - 8;
            count = parseInt(count)+1;
        }
        else{
            alert('에너지가 부족합니다.')
        }
    }
    else if(type === 'sleep')  {
        alert('정말 주무시겠습니까?.')
      number = parseInt(number) + 70;
      night = parseInt(night)+1;
    }
    
    // 결과 출력
    resultElement.innerText = number;
    dayElemnt.innerText = night;
    actElement.innerText = count;
  }

  