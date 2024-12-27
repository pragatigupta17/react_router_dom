import Form from './form';
function App() {
  let ar = ["PRAGATI GUPTA" , 24, 'farrukhabad']
let ara =ar.map((e,index)=>{return <li key={index}>{e}</li>})

  return (
    <>
    {ar.map((e,index)=>{return <h1 key={index}>{e}</h1>})}
    <ul>
      <li>{ara}</li>
    </ul>
     <Form/>
    </>
  )
}

export default App
