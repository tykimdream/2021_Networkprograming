const { parse } = require("path/posix");

function count(type)  {
    
    const color = ["#FC5C7D", "#6A82FB", "#38ef7d", "#fffbd5", "#b20a2c", "#CAC531"];
    const weather = ['비','비','비','맑음', '맑음', '맑음', '맑음', '맑음', '맑음', '맑음'];
    const bodyTag = document.getElementById("content");
    const today = document.getElementById("forecast");
    let num_col = Math.floor(Math.random() * color.length);
    let num_wea = Math.floor(Math.random() * weather.length);

    const resultElement = document.getElementById('hp');
    const dayElemnt = document.getElementById('day');
    const actElement = document.getElementById('act_count');
    const moneyElement = document.getElementById('gold');
    const canElement = document.getElementById('can_lev')

    let hp = resultElement.innerText;
    let night = dayElemnt.innerText;
    let count = actElement.innerText;
    let money = moneyElement.innerText;
    let can = canElement.innerText;

    // 더하기/빼기
    if(type === 'water') {
        if(parseInt(hp) - 8 > 0){
            hp = parseInt(hp) - (8-parseInt(can));
            count = parseInt(count)+1;
        }
        else{
            alert('에너지가 부족합니다.')
        }
    }
    else if(type === 'sleep')  {
      alert('정말 주무시겠습니까? 80골드가 소모됩니다.');
      // 화면 색을 바꿔준다.
      bodyTag.style.backgroundColor = color[num_col];
      // 날씨를 바꿔준다. 강수량 20%
      today.innerText = weather[num_wea];


      // 하루 정산 -> 체력 + 70 n 번째 밤 + 1 골드 - 80
      hp = parseInt(hp) + 70;
      night = parseInt(night)+1;
      money = parseInt(money) - 80;
    }
    
    // 결과 출력
    resultElement.innerText = hp;
    dayElemnt.innerText = night;
    actElement.innerText = count;
    moneyElement.innerText = money;
  }