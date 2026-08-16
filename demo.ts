let a :number  =2098;
console.log(a);

let studentName : string = "mansi";
studentName = 'garg';
console.log(studentName);

let b : number[]  = [1,2,3,4,6]
b = [3];

let isActive : boolean = false;

let students1 : Array<{studentName:string,rollNumber:number}> = 

       [{
       studentName:'Mansi', 
       rollNumber: 2133,

},
{
    studentName: 'John',
    rollNumber: 2134
}

]

console.log(students1[1].rollNumber);
students1[1].rollNumber=62712;
console.log(students1[1].rollNumber);

var c =90;
var d =10;

function addNumbers(c:number , d:number) :number {
   return c +d;
}

console.log(addNumbers(c,d));

