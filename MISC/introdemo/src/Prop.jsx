export const Prop = ({firstName, lastName}) =>{
  const style = {
      backgroundColor:"red",
      color:"white",
      textAlign:"center",
      fontSize:"2rem",
      padding:"1rem"
  }
  return(<>
  <h2 style={style}>Welcome to the site {firstName} {lastName}</h2>
  </>)
}

export const SayHi = (props) =>{

  return(
    <>
      <h2 style={props.style}>Hi {props.name}</h2>
    </>
  )
}