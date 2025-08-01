import { useState } from "react";
import Button from "./components/Button";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  return (
    <div>
      <h1>Give feedback</h1>
      <Button
        name="good"
        add={() => setGood(good + 1)}
        addTotal={() => setTotal(total + 1)}
      />
      <Button
        name="neutral"
        add={() => setNeutral(neutral + 1)}
        addTotal={() => setTotal(total + 1)}
      />
      <Button
        name="bad"
        add={() => setBad(bad + 1)}
        addTotal={() => setTotal(total + 1)}
      />
      <h2>Statistics</h2>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {total}</p>
      <p>average {(good - bad) / total}</p>
      <p>positive {!good ? 0 : (good / total) * 100}%</p>
    </div>
  );
};

export default App;
