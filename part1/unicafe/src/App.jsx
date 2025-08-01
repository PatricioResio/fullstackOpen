import { useState } from "react";
import Button from "./components/Button";
import Statics from "./components/StaticsLine";
import StaticsLine from "./components/StaticsLine";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState(0);
  const statics = {
    good: good,
    neutral: neutral,
    bad: bad,
    all: all,
    average: all === 0 ? 0 : (good + neutral + bad) / 3,
    positive: all === 0 ? 0 : (good / all) * 100 + "%",
  };
  return (
    <div>
      <h1>Give feedback</h1>
      <Button
        name="good"
        add={() => setGood(good + 1)}
        addAll={() => setAll(all + 1)}
      />
      <Button
        name="neutral"
        add={() => setNeutral(neutral + 1)}
        addAll={() => setAll(all + 1)}
      />
      <Button
        name="bad"
        add={() => setBad(bad + 1)}
        addAll={() => setAll(all + 1)}
      />
      <h2>Statistics</h2>
      {all === 0 ? (
        <h3>No feedback given</h3>
      ) : (
        <table>
          <tbody>
            <StaticsLine name="good" value={statics.good} />
            <StaticsLine name="neutral" value={statics.neutral} />
            <StaticsLine name="bad" value={statics.bad} />
            <StaticsLine name="all" value={statics.all} />
            <StaticsLine name="average" value={statics.average} />
            <StaticsLine name="positive" value={statics.positive} />
          </tbody>
        </table>
      )}
    </div>
  );
};

export default App;
