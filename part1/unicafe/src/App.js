import { useState } from "react";

const Button = ({ handleClick, name }) => {
  return <button onClick={handleClick}>{name}</button>;
};

const StatisticLine = ({ value, name }) => {
  return (
    <div>
      {name} {value}
    </div>
  );
};

const Statistics = ({ good, neutral, bad }) => {
  const sum = good + neutral + bad;
  const avg = (good - bad) / sum;
  const positive = (good / sum) * 100;

  if (sum === 0) {
    return (
      <>
        <h1>statistics</h1>
        <div>No feedback given</div>
      </>
    );
  }

  return (
    <>
      <h1>statistics</h1>
      <StatisticLine value={good} name={"good"} />
      <StatisticLine value={neutral} name={"neutral"} />
      <StatisticLine value={bad} name={"bad"} />
      <StatisticLine value={avg} name={"average"} />
      <StatisticLine value={positive + " %"} name={"positive"} />
    </>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const incrementFeedback = (type) => {
    switch (type) {
      case 0:
        setGood(good + 1);
        break;
      case 1:
        setNeutral(neutral + 1);
        break;
      case 2:
        setBad(bad + 1);
        break;
      default:
    }
  };

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => incrementFeedback(0)} name={"good"} />
      <Button handleClick={() => incrementFeedback(1)} name={"neutral"} />
      <Button handleClick={() => incrementFeedback(2)} name={"bad"} />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
