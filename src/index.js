
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import 'semantic-ui-css/semantic.min.css'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


/*
//testing for Course
const person = {
  name: 'Leon',
  walk(){
    console.log(this);
  },
  talk(){
    console.log('This person talks');
  },
  eat(){
    console.log('This person eats');
  }
};

//there are two ways to access the method from an object : by .(dot) and binding

// 1. By dot
//output all members of person object
person.walk();

//display only talk function of person object
const talk = person.talk;
console.log(talk);


// 2. By Binding the object
// display only the log of eat function because there is no this keyword in it
const eat = person.eat.bind(person);
eat();

//display all the members of person object since 'this' is set to refer to the person object
const walks = person.walk.bind(person);
walks();

//Arrow Function and binding this 
const people = {
  name : "Gustin",
  work() {
    //var self = this
    setTimeout(() => {
      console.log("This is self", this);
      
    }, 1000);
  }
};
people.work();
*/


// // ...........Inheritance ........//
// class Person {

//   constructor(name){
//     this.name = name;
//   }

//   walk() {
//     console.log("Every human being walks");
//   }
// };

// //child class
// class Teacher extends Person {

//   //when adding a custom constructor in a child class, the constructor from parent class need to be called by super() 
//   constructor(name, degree){
//     super(name); //calling the property from the parent constructor by parameterizing in the super
//     this.degree = degree; //define the customer constructor's degree property by defining this

//   }

//   teach() {
//     console.log("Every teacher teach lessons");
//   }

//   //teacher is a person and can walk, that's why he can access the walk method from Person by extending it class

// };

// const teacher = new Teacher('Leon','M.C.Sc');
// console.log(teacher);







