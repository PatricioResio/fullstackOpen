import ContentInfo from "./ContentInfo";

const Content = ({
  part1,
  part2,
  part3,
  exercises1,
  exercises2,
  exercises3,
}) => {
  return (
    <>
      <ContentInfo part={part1} exercises={exercises1} />
      <ContentInfo part={part2} exercises={exercises2} />
      <ContentInfo part={part3} exercises={exercises3} />
    </>
  );
};

export default Content;
