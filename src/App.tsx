import React from 'react';
import './App.css';
import ComponentMap from "./Components/ComponentMap";
import Button from "./Components/Button";

export const students = [
    {id: 1, name: "James", age: 8},
    {id: 2, name: "Robert", age: 18},
    {id: 3, name: "John", age: 28},
    {id: 4, name: "Michael", age: 38},
    {id: 5, name: "William", age: 48},
    {id: 6, name: "David", age: 58},
    {id: 7, name: "Richard", age: 68},
    {id: 8, name: "Joseph", age: 78},
    {id: 9, name: "Thomas", age: 88},
    {id: 10, name: "Charles", age: 98},
    {id: 11, name: "Christopher", age: 100},
]

function App() {

    const Button1Foo = (subscriber: string, age:number, adres:string) => {
        console.log(subscriber, age, adres)
    }
    const Button2Foo = (subscriber: string) => {
        console.log(subscriber)
    }
    const Button3Foo = () => {
        console.log('Im stupid Button')
    }
    return (
        <div className="App">
            <ComponentMap students={students}/>
            <Button name={'MyChanel-1'} callBack={() => Button1Foo('Im Vasya', 21, 'Live in Minsk')}/>
            <Button name={'MyChanel-2'} callBack={() => Button2Foo('I\'m Ivan-huligan')}/>
            <Button name={'Im stupid button'} callBack={Button3Foo}/>
        </div>
    );
}

export default App;

// const [money, setMoney] = useState([
//     { banknots: 'Dollars', value: 100, number: ' a1234567890' },
//     { banknots: 'Dollars', value: 50, number: ' z1234567890' },
//     { banknots: 'RUBLS', value: 100, number: ' w1234567890' },
//     { banknots: 'Dollars', value: 100, number: ' e1234567890' },
//     { banknots: 'Dollars', value: 50, number: ' c1234567890' },
//     { banknots: 'RUBLS', value: 100, number: ' r1234567890' },
//     { banknots: 'Dollars', value: 50, number: ' x1234567890' },
//     { banknots: 'RUBLS', value: 50, number: ' v1234567890' },
// ])
