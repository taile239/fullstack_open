const Header = (props) => {
  return <h1>{props.course}</h1>;
};

const Content = (props) => {
  const contentArr = props.contentArr;
  const parts = contentArr.map((item, index) => (
    <Part key={index} part={item.name} exercise={item.exercises} />
  ));
  return <div>{parts}</div>;
};

const Part = (props) => {
  return (
    <p>
      {props.part} {props.exercise}
    </p>
  );
};

const Total = (props) => {
  return <p>Number of exercises {props.total}</p>;
};

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  const exercises = course.parts.reduce((accumulator, object) => {
    return accumulator + object.exercises;
  }, 0);

  return (
    <div>
      <Header course={course.name} />
      <Content contentArr={course.parts} />
      <Total total={exercises} />
    </div>
  );
};

export default App;
