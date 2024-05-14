var array1 = ['one', 'two'];
var array2 = ['three', 'four'];
//ES5 자바스크립트로 배열 합치기, 인덱스로 합치기와 concat 배열의 내장함수로 합치기
var unionArray = array1.concat(array2); //내장함수 사용
var unionArray = [array1[0], array1[1] , array2[0] , array2[1], '인덱스사용'];
console.log(unionArray);
//ES6 전개연산자 용(아래)
var unionArray = [...array1, ...array2, '전개연산자사용'];
console.log(unionArray);

//ES5 로 배열 요소 추출하여 새로운 배열 만들기
var first = array1[0];
var second = array1[1];
console.log(first, second);
var [first, second] = array1; //배열값이 변수 순서대로 자동 바인딩됨
console.log(first, second);
//ES6 전개연산자 사용(아래)
var [first, ...others] = array1;
console.log(first, others);
//인덱스 순서에 해당하는 값이 많은 때 효과를 보인다.(아래)
var [first, second, ...others] = unionArray;
console.log(first, second, others);

//ES5 함수의 인자-매개변수를 사용할 때 Array.prototype.slice.call로 파싱 필요.
function func() {
    console.log(arguments); //내장된 예약어 변수
    var args = Array.prototype.slice.call(arguments);//call 한 매개변수만 추출하기...
    console.log(args);
    var first = args[0];
    var others = args.slice(1, args.length); //args.length는3, 3이전까지
    console.log(first, others);
    }
    func(1,2,3);
    //ES6 에서 함수의 인자 매개변수에 전개연산자 사용하면 데이터분해용 파싱 작업 불 필요.
    function func(...args) {
    console.log(arguments); //내장된 예약어 변수
    //var args = Array.prototype.slice.call(arguments);//call 한 매개변수만 추출하기 생략
    console.log(args);
    var first = args[0];
    var others = args.slice(1, args.length);
    console.log(first, others);
    }
    func(1,2,3);