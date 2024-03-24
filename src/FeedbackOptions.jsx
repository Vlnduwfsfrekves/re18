const FeedbackOptions = ({options,onLeaveFeedback}) => {
    return(
    <div>
    <br/>
    <button onClick={()=>onLeaveFeedback[0](options[0]+1)}>Good</button>
    <button onClick={()=>onLeaveFeedback[1](options[1]+1)}>Bad</button>
    <button onClick={()=>onLeaveFeedback[2](options[2]+1)}>Neutral</button>
    <br/>
    </div>
    )
}
export default FeedbackOptions