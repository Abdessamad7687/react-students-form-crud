import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import Form from './components/Form'
import { useState } from 'react'

function App() {


  const [Items ,setItems] = useState([])

  const addItem = (Item) => {
    setItems([...Items, Item])
  }
  
  return (
    <div className="container p-4 col-md-8">
       <h1 className="text-center my-3">React CRUD with localstorage</h1>
      <Form className="form" />
      <div className="col-md-4 mx-auto mt-3 form-group">
                <button className="btn btn-dark w-100" id="submit">Create </button>
            </div>
    </div>
  )
}

export default App
