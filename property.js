const person ={
    name:'sad uddin',
    age:'33',
    profession:'developer',
    married: true,
    'fav places': ['kuakata', 'bandorbon', 'sundarbon']
}
console.log(person);
console.log(person.profession);    //how to indicate specefic opject property

const boyos =person.age;           //how to object property declar as a variable.
console.log(boyos);


//bracket notation.
//third bracket diye access kora.
console.log(person['married']);
const bibahito = person['married'];
console.log(bibahito);
console.log(person['fav places']);      //diffrent type when property have space or quation etc.




//value change
person.profession ='graphic designer';
person['age']= 60;
console.log(person);







