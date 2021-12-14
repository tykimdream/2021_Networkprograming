// function add(a, b, callback){
//     var result = a+b;
//     callback(result);
//     var history = function(){
//         return a + " + " + b + " : " + result;
//     }
//     return history;
// }

// var add_history = add(10, 10, function(result){
//     console.log('파라미터로 전달된 콜백 함수 호출됨.');
//     console.log('더하기 (10,10)의 결과 : %d', result);
// });

// console.log('결과 값으로 받은 함수 실행 결과 : ' + add_history());

function add(a, b, callback) {
    var result = a + b;
    callback(result);
    var count = 0;
    var history = function() {
    count++;
    return count + ' : ' + a + ' + ' + b + ' = ' + result;
    };
    return history;
    }
    var add_history = add(10, 10, function(result) {
    console.log('파라미터로 전달된 콜백 함수 호출됨.');
    console.log('더하기 (10, 10)의 결과 : %d', result);
    });
    console.log('결과 값으로 받은 함수 실행 결과 : ' + add_history());
    console.log('결과 값으로 받은 함수 실행 결과 : ' + add_history());
    console.log('결과 값으로 받은 함수 실행 결과 : ' + add_history());

    function Person(name, age) {
        this.name = name;
        this.age = age;
        }
        Person.prototype.walk = function(speed) {
        console.log(speed + 'km 속도로 걸어갑니다.');
        }
        var person01 = new Person('소녀시대', 20);