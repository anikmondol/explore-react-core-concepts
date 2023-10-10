import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Todo'
import Actor from './Actor'
import Singers from './Singers'
import BookSte from './BookStore'

function App() {
  const actors = ['Sakib', 'Raj', 'Jasim', 'Rubel'] 
  const singers = [
    {name: 'anik', age: 22},
    {name: 'ritu', age: 20},
    {name: 'arpon', age: 14}
  ]

  const books =[
    {id: 1, name: "math", price: '120'},
    {id: 2, name: "physics", price: '100'},
    {id: 3, name: "chemistry", price: '150'},
    {id: 4, name: "biology", price: '120'}
  ]

  return (
    <>
      <h3>Vite + React</h3>
      <BookSte books={books}></BookSte>
      <Actor name={"Bappa Raz"}></Actor>
      {
        actors.map(actors => <Actor name={actors}></Actor>)
      }
      {
        singers.map(singers => <Singers singers={singers}></Singers>)
      }
      {/* <Todo task="Learn React" isDone={true}></Todo>
      <Todo task="Explore Concepts" isDone={false}></Todo>
      <Todo task="Try JSX" isDone={true}></Todo> */}
      {/* <Device name="Laptop" price="55"></Device>
      <Device name="Mobile" price="17"></Device>
      <Device name="watch" price="3"></Device>
      <Person></Person>
      <Student grade="7" score="99"></Student>
      <Student grade={12} score="85"></Student>
      <Student></Student>
      <Developer></Developer> */}
    </>
  )
}

function Device(props){
  // console.log(props)
  return(
    <div>
      <h2>This is a Device: {props.name} Price: {props.price}</h2>
    </div>
  )
}


function Person() {
  const age = 40;
  const person = { name: 'anik', age: 22 }
  return <h3>I am a {person.name} person: {age}</h3>
}

function Student({grade=1, score=0}) {
  return (
    <div className='student'>
      <h3>This is a Student</h3>
      <p>Name: {grade}</p>
      <p>age: {score}</p>
    </div>
  )
}

function Developer() {
  const developerStyle = {
    border: "2px solid black",
    padding: "20px",
    margin: "20px",
    borderRadius: "10px"
}
return (
  <div style={developerStyle}>
    <h5>Devo devo</h5>
    <p>Coding: </p>
  </div>
)
}


export default App
