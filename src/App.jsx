
import { RouterProvider } from 'react-router-dom'
import './App.css'
import router from "./routes/router.jsx"

function App() {
  
  return (
    <>
 
     <RouterProvider router={router}/>
    </>
  )
}

export default App
