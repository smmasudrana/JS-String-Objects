// const school ='Raj uk uttara model college';
// console.log(school);
// console.log(school.toUpperCase());
// console.log(school.toLowerCase());


// const subject = 'chestry';
// const book = 'Chestry';      //js always case sensetive uppur and lower also make diffarent.

// if(subject.toLowerCase() === book.toLowerCase()){          
//     console.log('dhumay pormu');                         //(.toLowerCase) make all the string are lower case and its works.
// }
// else{
//     console.log('porasona valo lage na');
// }


const drink = 'water';
const liquid = ' water';     //here is 2 water are not same bcz it's also space sencetive, second one before a space thats why both are not same.

if(drink.trim() === liquid.trim()){                  //when you use (.trim) its remove all the spaces from start and end make it right and it's work.
    console.log('aktu pani khete hobe');
}                                              
else{
    console.log('ei pani khaowa jabe na');
}

