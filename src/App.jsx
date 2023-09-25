import { Route, Routes } from "react-router-dom"
import { Layout } from "./Component/Layout"
import { Home } from "./Component/home"
import { KinoId } from "./Component/kinoId"

function App() {

  return (
    <Layout>
      <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="tarjimaKino/:kinoId" element={<KinoId/>}/>
      </Routes>
    </Layout>
  )
}

export default App
