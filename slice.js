const address = 'andorkilla';
const part = address.slice(0, 5);
console.log(part);


const sentence = 'i am a good boy and hardworker';
console.log(sentence.split(' '));          //when i use .split(' ') it's separate all the word induvisuals.
console.log(sentence.split('a'));          //wgeb i use .split('a') whatever the letter this point make a break space.


const friendsStr ='rahim,kahim,dahim,fohim,sahim,lahim,dahim';
const friedns = friendsStr.split(',');
console.log(friedns);

console.log(friedns.join());      //when i use .join its make all string join.
console.log(friedns.join('|'));   // with join i can use any separator between the word like (|) this.

