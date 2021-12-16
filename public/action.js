const { parse } = require("path/posix");

function count(type) {
  const color = [
    "#FFCCCC",
    "#FFE5CC",
    "#FFFFCC",
    "#E5FFCC",
    "#CCFFCC",
    "#CCFFE5",
    "#CCFFFF",
    "#CCE5FF",
    "#CCCCFF",
    "#E5CCFF",
    "#FFCCFF",
    "#FFCCE5",
  ];
  const weather = ["비", "비", "비", "맑음", "맑음", "맑음", "맑음", "맑음", "맑음", "맑음"];
  const bodyTag = document.getElementById("content");
  const today = document.getElementById("forecast");
  let num_col = Math.floor(Math.random() * color.length);
  let num_wea = Math.floor(Math.random() * weather.length);

  const resultElement = document.getElementById("hp");
  const dayElemnt = document.getElementById("day");
  const actElement = document.getElementById("act_count");
  const moneyElement = document.getElementById("gold");
  const canElement = document.getElementById("can_lev");
  const energyElement = document.getElementById("energy_lev");

  let hp = parseInt(resultElement.innerText);
  let night = parseInt(dayElemnt.innerText);
  let count = parseInt(actElement.innerText);
  let money = parseInt(moneyElement.innerText);

  // 레벨 상태에 따른 변수들
  let can = parseInt(canElement.innerText);
  let energy = parseInt(energyElement.innerText) * 10;

  // 물을 줄 때, 잠잘 때 조건문
  if (type === "water") {
    if (hp - 8 > 0) {
      hp = hp - (8 - can);
      count = count + 1;
    } else {
      alert("에너지가 부족합니다.");
    }
  } else if (type === "sleep") {
    if (money > 80) {
      alert("정말 주무시겠습니까? 80골드가 소모됩니다.");
      // 화면 색을 바꿔준다.
      bodyTag.style.backgroundColor = color[num_col];
      // 날씨를 바꿔준다. 강수량 20%
      today.innerText = weather[num_wea];

      // 하루 정산 -> 체력 + 70 n 번째 밤 + 1 골드 - 80
      hp = hp + 70 + energy;
      night = night + 1;
      money = money - 80;
    } else {
      alert("돈이 부족합니다.");
    }
  }

  // 결과 출력
  resultElement.innerText = hp;
  dayElemnt.innerText = night;
  actElement.innerText = count;
  moneyElement.innerText = money;
}
