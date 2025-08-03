const sentence = 'i am learning web development';
let reverse ='';

//type 1
for(const letter of sentence){
    console.log(letter);
    reverse=letter+reverse;
}
console.log(reverse);


//type 2
let rev ='';
for(let i=0; i<sentence.length; i++){
    console.log(i);
    console.log(sentence[i]);
    const letter =sentence[i];
    rev=letter+rev;
}
console.log(rev);


//type 3 -shortcut 
const reversed = sentence.split('').reverse('').join('');
console.log(reversed);
