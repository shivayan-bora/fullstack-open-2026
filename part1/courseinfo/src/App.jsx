function App() {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  return (
    <div>
      <Header course={course} />
      <Content
        parts={[part1, part2, part3]}
        exercises={[exercises1, exercises2, exercises3]}
      />
      <Total exercises={[exercises1, exercises2, exercises3]} />
    </div>
  );
}

const Header = ({ course }) => {
  return <h1>{course}</h1>;
};

const Content = ({ parts, exercises }) => {
  return (
    <>
      <Part part={parts[0]} exerciseCount={exercises[0]} />
      <Part part={parts[1]} exerciseCount={exercises[1]} />
      <Part part={parts[2]} exerciseCount={exercises[2]} />
    </>
  );
};

const Part = ({ part, exerciseCount }) => {
  return (
    <p>
      {part} {exerciseCount}
    </p>
  );
};

const Total = ({ exercises }) => {
  return (
    <p>
      Number of exercises{" "}
      {exercises.reduce((previous, current) => {
        return previous + current;
      }, 0)}
    </p>
  );
};

export default App;
