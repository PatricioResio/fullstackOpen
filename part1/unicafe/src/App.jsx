import { useState } from "react";
import Button from "./components/Button";
import Statics from "./components/Statics";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const statics = {
    good: good,
    neutral: neutral,
    bad: bad,
    total: total,
  };
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
      <Statics statics={statics} />
    </div>
  );
};

export default App;
