function clickImg(pos) {
  const status_1 = parseInt(document.getElementById("one").innerText);
  const status_2 = parseInt(document.getElementById("two").innerText);
  const status_3 = parseInt(document.getElementById("three").innerText);
  const status_4 = parseInt(document.getElementById("four").innerText);
  const status_5 = parseInt(document.getElementById("five").innerText);
  const status_6 = parseInt(document.getElementById("six").innerText);
  const status_7 = parseInt(document.getElementById("seven").innerText);
  const status_8 = parseInt(document.getElementById("eight").innerText);
  const status_9 = parseInt(document.getElementById("nine").innerText);

  pos = parseInt(pos);
  switch (pos) {
    case 1:
      if (status_1 >= 8 && status_1 < 14) {
        document.getElementById("1").src = "../img/grid2.jpg";
      } else if (status_1 >= 13) {
        document.getElementById("1").src = "../img/grid3.jpg";
      } else {
        document.getElementById("1").src = "../img/grid.jpg";
      }
      break;
    case 2:
      if (status_2 >= 8 && status_2 < 14) {
        document.getElementById("2").src = "../img/grid2.jpg";
      } else if (status_2 >= 13) {
        document.getElementById("2").src = "../img/grid3.jpg";
      } else {
        document.getElementById("2").src = "../img/grid.jpg";
      }
      break;
    case 3:
      if (status_3 >= 8 && status_3 < 14) {
        document.getElementById("3").src = "../img/grid2.jpg";
      } else if (status_3 >= 13) {
        document.getElementById("3").src = "../img/grid3.jpg";
      } else {
        document.getElementById("3").src = "../img/grid.jpg";
      }
      break;
    case 4:
      if (status_4 >= 8 && status_4 < 14) {
        document.getElementById("4").src = "../img/grid2.jpg";
      } else if (status_4 >= 13) {
        document.getElementById("4").src = "../img/grid3.jpg";
      } else {
        document.getElementById("4").src = "../img/grid.jpg";
      }
      break;
    case 5:
      if (status_5 >= 8 && status_5 < 14) {
        document.getElementById("5").src = "../img/grid2.jpg";
      } else if (status_5 >= 13) {
        document.getElementById("5").src = "../img/grid3.jpg";
      } else {
        document.getElementById("5").src = "../img/grid.jpg";
      }
      break;
    case 6:
      if (status_6 >= 8 && status_6 < 14) {
        document.getElementById("6").src = "../img/grid2.jpg";
      } else if (status_6 >= 13) {
        document.getElementById("6").src = "../img/grid3.jpg";
      } else {
        document.getElementById("6").src = "../img/grid.jpg";
      }
      break;
    case 7:
      if (status_7 >= 8 && status_7 < 14) {
        document.getElementById("7").src = "../img/grid2.jpg";
      } else if (status_7 >= 13) {
        document.getElementById("7").src = "../img/grid3.jpg";
      } else {
        document.getElementById("7").src = "../img/grid.jpg";
      }
      break;
    case 8:
      if (status_8 >= 8 && status_8 < 14) {
        document.getElementById("8").src = "../img/grid2.jpg";
      } else if (status_8 >= 13) {
        document.getElementById("8").src = "../img/grid3.jpg";
      } else {
        document.getElementById("8").src = "../img/grid.jpg";
      }
      break;
    case 9:
      if (status_9 >= 8 && status_9 < 14) {
        document.getElementById("9").src = "../img/grid2.jpg";
      } else if (status_9 >= 13) {
        document.getElementById("9").src = "../img/grid3.jpg";
      } else {
        document.getElementById("9").src = "../img/grid.jpg";
      }
      break;
  }
}
