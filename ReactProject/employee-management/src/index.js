import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

/*
console.log("Hello")


const arr = [5,3,7,9];

console.log(...arr);

const person ={
  name: "Shailendra",
  age:"28",
  phone:"923434423",
  address:{
    city:"New York",
    country:"US"
  }
}

const {address:{city}} = person

console.log(person.name)

console.log(city)

function double(x){
  return x*2;
}

console.log(arr.map((x)=> x*3 ))

*/

/*

let myfunction =  () =>{
  console.log("Hello world")
}

myfunction();

*/


/*


class Employee{
  constructor(name,age){
    this.name = name;
    this.age = age;
  }

  getEmployeeName(){
    console.log(this.name, this.age);
  }

}

const emp1 = new Employee("Shailendra",30);

emp1.getEmployeeName();
*/

/*
const arr = [1,2,3,5];

let [x,y,z] = arr;

console.log(x,y,z);


*/


