import ContentInfo from "./ContentInfo";

const Content = ({ parts }) => {
  return (
    <>
      {parts.map((part) => (
        <ContentInfo
          key={part.name}
          name={part.name}
          exercises={part.exercises}
        />
      ))}
    </>
  );
};

export default Content;
