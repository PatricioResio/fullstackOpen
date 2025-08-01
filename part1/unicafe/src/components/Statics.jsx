const Statics = ({ statics }) => {
  const { good, neutral, bad, total } = statics;
  return (
    <div>
      <h2>Statistics</h2>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {total}</p>
      <p>average {!good && !bad ? 0 : (good - bad) / total}</p>
      <p>positive {!good ? 0 : (good / total) * 100}%</p>
    </div>
  );
};

export default Statics;
