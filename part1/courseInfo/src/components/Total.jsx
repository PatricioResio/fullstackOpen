const Total = ({ parts }) => {
  return (
    <p>
      Number of exercises
      {parts
        .map((part) => part.exercises)
        .reduce((sum, current) => sum + current, 0)}
    </p>
  );
};

export default Total;
