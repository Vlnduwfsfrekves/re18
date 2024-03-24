import React from 'react';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';
import Notification from './Notification';
import { useState } from 'react';
const App=()=>{
    const [good,changeGood] = useState(0)
    const [bad,changeBad] = useState(0)
    const [neutral,changeNeutral] = useState(0)
    const countTotalFeedback=()=>{
        return good+neutral+bad
    }
    const countPositiveFeedbackPercentage=()=>{
        return 100/(good+neutral+bad)*good
    }
    return(
        <div>
            <Section title="Leave your feedback"><FeedbackOptions options={[good,bad,neutral]} onLeaveFeedback={[changeGood,changeBad,changeNeutral]}/></Section>
            <Section title="Statistics">{good+neutral+bad>0?(<Statistics good={good} neutral={neutral} bad={bad} total={countTotalFeedback} positivePercentage={countPositiveFeedbackPercentage}/>):(<Notification message="There is no feedback"/>)}</Section>
        </div>
    )
}
export default App