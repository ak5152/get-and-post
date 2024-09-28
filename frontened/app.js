//prototype//

// function PersonMaker(name,age){
//     const person={
//         name:name,
//         age:age,
//         talk(){
//             console.log(`hi my name is ${this.name}`);
//         },
//     };
//     return person;
// };

//constructor-- doesn't return anything and start with capital//
// function Person(name,age){
//     this.name=name;
//     this.age=age;
    
// };
// let p1=new Person("ash",20);
// let p2=new Person("romeo",21);

//using class start with capital letter//

// class Person{
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//      }
//      talk(){
//         console.log(`hi,my name is ${his.name}`);
//      }
// }
// let p1=new Person("adam",34);
// let p2=new Person("ashu",20);

//using inheritance//

class Person{
    constructor(name,age){
        console.log("person class constructor");
        this.name=name;
        this.age=age;
    }
    talk(){
        console.log(`hi i am ${this.name}`);
    }
};

class Student extends Person{
    constructor(name,age,marks){
       console.log("student class constructor"); 
       super(name,age);
       this.marks=marks;
    }
};

class Teacher extends Person{
    constructor(name,age,subject){
        super(name,age);
        this.subject=subject;
    }
}