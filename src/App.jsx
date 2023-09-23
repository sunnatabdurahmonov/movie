import { Route, Routes } from "react-router-dom"
import { Layout } from "./Component/Layout"
import { Home } from "./Component/home"

function App() {

  return (
    <Layout>
      <Routes>
       <Route path="/" element={<Home/>}/>
      </Routes>
    </Layout>
  )
}

export default App
