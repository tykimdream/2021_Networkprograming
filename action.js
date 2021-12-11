const { parse } = require("path/posix");

function count(type)  {
    const resultElement = document.getElementById('hp');
    const dayElemnt = document.getElementById('day');
    const actElement = document.getElementById('act_count');
    const moneyElement = document.getElementById('gold');
    const canElement = document.getElementById('can_lev')


    let number = resultElement.innerText;
    let night = dayElemnt.innerText;
    let count = actElement.innerText;
    let money = moneyElement.innerText;
    let can = canElement.innerText;

    // 더하기/빼기
    if(type === 'water') {
        if(parseInt(number) - 8 > 0){
            number = parseInt(number) - (8-parseInt(can));
            count = parseInt(count)+1;
        }
        else{
            alert('에너지가 부족합니다.')
        }
    }
    else if(type === 'sleep')  {
        alert('정말 주무시겠습니까? 80골드가 소모됩니다.')
      number = parseInt(number) + 70;
      night = parseInt(night)+1;
      money = parseInt(money) - 80;
    }
    
    // 결과 출력
    resultElement.innerText = number;
    dayElemnt.innerText = night;
    actElement.innerText = count;
    moneyElement.innerText = money;
  }

  