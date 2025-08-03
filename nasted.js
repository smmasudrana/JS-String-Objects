const college = {
    name: 'vnc',
    Bal: ['11', '12'],
    events: ['science fair', 'bijoy dibos', '21 Feb'],
    unique:{
        color:'blue',
        result:{
            gpa:5,
            merit:'top',
        }
    }

}

console.log(college.unique.color);
college.unique.result.merit='top leveler student'
console.log(college.unique.result.merit);           //how to show nasted element.

college.events[1]='bijoy dibos';     //how to change array value with index in nasted.
console.log(college.events[1]);


delete college.events;
console.log(college);