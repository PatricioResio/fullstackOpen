import ContentInfo from "./ContentInfo";

const Content = ({ part1, part2, part3 }) => {
  return (
    <>
      <ContentInfo name={part1.name} exercises={part1.exercises} />
      <ContentInfo name={part2.name} exercises={part2.exercises} />
      <ContentInfo name={part3.name} exercises={part3.exercises} />
    </>
  );
};

export default Content;
