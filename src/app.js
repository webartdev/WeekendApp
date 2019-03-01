import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';
import './styles/styles.scss';
import 'normalize.css/normalize.css'


class Person {
 constructor(name = "Anonymous", age = 0) {
     this.name = name;
     this.age = age;
 }
 getGreeting() {
     return `Hi. I am ${this.name}!`;
 }
 getDescription() {
    return `${this.name} is ${this.age} years old`;
}
}

const me = new Person('Elena', 26);
const other = new Person();

console.log(other.getDescription());
console.log(me.getDescription());


ReactDOM.render(<IndecisionApp />, document.getElementById('app'));

