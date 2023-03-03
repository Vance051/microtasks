import React from 'react';

type StudentType = {
    id: number
    name: string
    age: number
}
type ComponentMapType = {
    students: Array<StudentType>
}
const ComponentMap = (props: ComponentMapType) => {
    type CarsType = {
        manufacturer: string
        model: string
    }
    type topCarsType = Array<CarsType>


    const topCars: topCarsType = [
        {manufacturer: 'BMW', model: 'm5cs'},
        {manufacturer: 'Mercedes', model: 'e63s'},
        {manufacturer: 'Audi', model: 'rs6'}
    ]

    return (
        <div>
            <ul>
                {props.students.map((studentik, index) => {
                    return <li key={index}>{studentik.name}, age:{studentik.age} </li>
                })}
            </ul>
            <table>
                <tr>
                    <th>№</th>
                    <th>manufacturer</th>
                    <th>model</th>
                </tr>

                {topCars.map((car, index) => {
                    return (
                        <tr>
                            <td>{++index}</td>
                            <td>{car.manufacturer}</td>
                            <td>{car.model}</td>
                        </tr>
                    )
                })}
            </table>
        </div>
    );
}


export default ComponentMap;