import React from 'react'

function Home(props) { //props means properties
var styling={
    textAlign:"Center",
    backgroundColor:"blue",
    color:"white"
}
  return (
    <div style={styling}>
        <h1>Home Page</h1>
    <h2>the props is :{props.props},{props.sjit}</h2>
    </div>
  )
}

export default Home