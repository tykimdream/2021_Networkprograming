function startTime() {
  var today = new Date();
  var year = today.getFullYear();
  var mon = today.getMonth() + 1;
  var day = today.getDate();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById("clock").innerHTML = year + "년 " + mon + "월 " + day + "일 " + h + ":" + m + ":" + s;
  var t = setTimeout(startTime(), 500);
}

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  } // 숫자가 10보다 작을 경우 앞에 0을 붙여줌
  return i;
}
