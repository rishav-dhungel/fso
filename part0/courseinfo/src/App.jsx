const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  return (
    <div>
      <Header course={course.name}/>
      <Content parts={course.parts}/>
      <Total parts = {course.parts}/>
    </div>
  )
}

const Header = (props) =>{
  return (
    <>
    <h1>{props.course}</h1>
    </>
  )

}

const Part = ({part, exercise}) =>{
  return(
    <p> {part} {exercise}</p>
  )
}

const Content = ({parts}) =>{
    return (
    <>
    { parts.map(part =>{
      return <Part part={part.name} exercise={part.exercises}/>
    })}

    </>
  )

}

const Total = ({parts}) =>{
    let total = 0
    parts.forEach(part =>{
      total += part.exercises
    })
    return (
    <>
      <p>Number of exercises {total}</p>
    </>
  )

}

export default App