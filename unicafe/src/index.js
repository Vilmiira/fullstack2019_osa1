import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Headline = ({text}) => (
    <div> 
        <h1>{text}</h1>
    </div>
)

const Button = ({ onClick, text }) => (
    <button onClick={onClick}>
      {text}
    </button>
)

const Statistic = ({text, value}) => {
    if (text === 'positive') {
        return (
            <div>
                <p>{text} {value} % </p>
            </div>
        )
    }
    return (
        <div>
            <p> {text} {value} </p>
        </div>
    )
}

const App = (props) => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const onClickGood = () => {
        setGood(good + 1)
    }

    const onClickNeutral = () => {
        setNeutral(neutral + 1)
    }

    const onClickBad = () => {
        setBad(bad + 1)
    }

    return (
      <div>
        <Headline text='Give feedback' />
        <Button onClick={onClickGood} text='good' />
        <Button onClick={onClickNeutral} text='neutral' />
        <Button onClick={onClickBad} text='bad'/>
        <Statistics good={good} neutral={neutral} bad={bad}/>
      </div>
    )
  }

  const Statistics = ({good, neutral, bad}) => {
    const total = good + bad + neutral
    const average = (good - bad) / total
    const positive = (good / total) * 100

    if (total === 0 ) {
        return (
            <div>
                <Headline text='Statistics' />
                <p> No feedback given. </p>
            </div>
        )
    }
    
    return ( 
        <div> 
            <Headline text='Statistics' />
            <Statistic text='good' value={good}/>
            <Statistic text='neutral' value={neutral}/>
            <Statistic text='bad' value={bad}/>
            <Statistic text='all' value={total}/>
            <Statistic text='average' value={average}/>
            <Statistic text='positive' value={positive}/>
        </div>
    )
  }

ReactDOM.render( <App />, 
  document.getElementById('root')
)