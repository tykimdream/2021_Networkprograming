function watering(params) {
  const goldElement = document.getElementById("gold");

  const status_1 = document.getElementById("one");
  const status_2 = document.getElementById("two");
  const status_3 = document.getElementById("three");
  const status_4 = document.getElementById("four");
  const status_5 = document.getElementById("five");
  const status_6 = document.getElementById("six");
  const status_7 = document.getElementById("seven");
  const status_8 = document.getElementById("eight");
  const status_9 = document.getElementById("nine");

  const leverage = parseInt(document.getElementById("seed_lev").innerText);
  const price_add = leverage * 100;

  const quality = parseInt(document.getElementById("fac_lev").innerText);
  const water_add = quality;

  let cash = parseInt(goldElement.innerText);
  pos = parseInt(params);
  switch (pos) {
    case 1:
      if (parseInt(status_1.innerText) >= 15) {
        status_1.innerText = 1;
        cash += 150 + price_add;
      } else {
        status_1.innerText = parseInt(status_1.innerText) + water_add;
      }
      break;
    case 2:
      if (parseInt(status_2.innerText) >= 15) {
        status_2.innerText = 1;
        cash += 150 + price_add;
      } else {
        status_2.innerText = parseInt(status_2.innerText) + water_add;
      }
      break;
    case 3:
      if (parseInt(status_3.innerText) >= 15) {
        status_3.innerText = 1;
        cash += 150 + price_add;
      } else {
        status_3.innerText = parseInt(status_3.innerText) + water_add;
      }
      break;
    case 4:
      if (parseInt(status_4.innerText) >= 15) {
        status_4.innerText = 1;
        cash += 150 + price_add;
      } else {
        status_4.innerText = parseInt(status_4.innerText) + water_add;
      }
      break;
    case 5:
      if (parseInt(status_5.innerText) >= 15) {
        status_5.innerText = 1;
        cash += 150 + price_add;
      } else {
        status_5.innerText = parseInt(status_5.innerText) + water_add;
      }
      break;
    case 6:
      if (parseInt(status_6.innerText) >= 15) {
        status_6.innerText = 1;
        cash += 150 + price_add;
      } else {
        status_6.innerText = parseInt(status_6.innerText) + water_add;
      }
      break;
    case 7:
      if (parseInt(status_7.innerText) >= 15) {
        status_7.innerText = 1;
        cash += 150 + price_add;
      } else {
        status_7.innerText = parseInt(status_7.innerText) + water_add;
      }
      break;
    case 8:
      if (parseInt(status_8.innerText) >= 15) {
        status_8.innerText = 1;
        cash += 150 + price_add;
      } else {
        status_8.innerText = parseInt(status_8.innerText) + water_add;
      }
      break;
    case 9:
      if (parseInt(status_9.innerText) >= 15) {
        status_9.innerText = 1;
        cash += 150 + price_add;
      } else {
        status_9.innerText = parseInt(status_9.innerText) + water_add;
      }
      break;
  }
  goldElement.innerText = cash;
}
