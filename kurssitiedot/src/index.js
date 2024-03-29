import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    const course = {
        name: 'Half Stack application development',
        parts: [
            {
                name: 'Fundamentals of React',
                exercises: 10
            },
            {
                name: 'Using props to pass data',
                exercises: 7
            },
            {
                name: 'State of a component',
                exercises: 14
            }
        ]
    }
    return (
        <div>
            <Header course={course.name}/>
            <Content parts = {course.parts} />
            <Total parts = {course.parts}/>
        </div>
    )
}

const Header = (props) => {
    return (
        <div>
            <h1>
               {props.course} 
            </h1>
        </div>
    )
}

const Content = (props) => {
    const part1 = props.parts[0]
    const part2 = props.parts[1]
    const part3 = props.parts[2]

    return (
        <div>
            <Part part={part1} />
            <Part part={part2}/>
            <Part part={part3}/>
        </div>
    )
}

const Total = (props) => {
    return (
        <p>Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises} </p>  
    )
}

const Part = (props) => {
    return (
        <p>
            {props.part.name} {props.part.exercises}
        </p>
    )
}


ReactDOM.render(<App />, document.getElementById('root'));
