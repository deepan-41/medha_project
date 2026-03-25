import { BrowserRouter , Routes, Route, Link} from 'react-router-dom'
import './App.css'
import Numberbar from './components/Numberbar'
import NavbarLayout from './components/Navbarlayout'
import Home from './pages/Home'
import WhiteLabel from './pages/WhiteLabel'
import CloudHosting from './pages/CloudHosting'
import Professional from './pages/Professional'
import Company from './pages/Company'

function App() {

 
  return (
    <>
      <Numberbar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<NavbarLayout />}>
            <Route index element={<Home />} />
            <Route path='white-label-msp-services' element={<WhiteLabel />} />
            <Route path='cloud-hosting' element={<CloudHosting />} />
            <Route path='professional-services' element={<Professional />} />
            <Route path='company' element={<Company />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
