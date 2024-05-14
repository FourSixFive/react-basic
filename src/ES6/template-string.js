var string1 = '안녕하세요';
var string2 = '반갑습니다';
console.log(string1+''+string2+'haha');
console.log(`${string1}${string2}haha`);

var member = {name:'조항민',email:'test@test.com'};
console.log('회원의 이름은 '+member.name+', 이메일은 '+member.email);
console.log(`회원의 이름은 ${member.name}, 이메일은 ${member.email}`);

var multiline = '라인1\n라인2';
console.log(multiline);
var multiline = `라인1
라인2`;
console.log(multiline);

var value1 = 1, value2 = 2;
console.log('덧셈의 답은 '+(value1+value2)+'이다.');
console.log(`덧셈의 답은 ${value1+value2}이다.`);

var boolean = false;
console.log((boolean ? '참' : '거짓')+'입니다');
console.log(`${boolean ? '참' : '거짓'}입니다`);