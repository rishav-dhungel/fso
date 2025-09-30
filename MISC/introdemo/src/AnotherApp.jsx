export const NextApp = () =>{
  const now = new Date()
  const a = 10
  const b = 20
  console.log(now, a+b)
  return(
    <>
      <div style={{backgroundColor:"green",color:"white",fontSize:"2rem",textAlign:"center"}}>
        <p>Hello, world,<br /> it is {now.toString()}</p>
        <p>{a + b}</p>
      </div>
    </>
  )
}