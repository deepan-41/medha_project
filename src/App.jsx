import { Route, Link, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom';

import './App.css'
import Numberbar from './components/Numberbar'
import Layout from './components/Layout'
import Home from './pages/Home'
import WhiteLabel from './pages/WhiteLabel'
import CloudHosting from './pages/CloudHosting'
import Professional from './pages/Professional'
import Company from './pages/Company'
import PartnerProgram from './pages/whitelabel_subpages/PartnerProgram';
import ManagedItServices from './pages/whitelabel_subpages/ManagedITServices';
import NocSocCloud from './pages/whitelabel_subpages/NocSoc';
import StaffAugmentation from './pages/whitelabel_subpages/StaffAugmentation';
import HostingSolutions from './pages/cloud_subpages/HostingSolutions';
import SpecialtySolutions from './pages/cloud_subpages/SpecialtySolutions';
import Microsoft from './pages/cloud_subpages/Microsoft';
import ServerSupport from './pages/professionalservices_subpages/ServerSupport';
import Blog from './pages/blog';
import MicroSoftBlog from './pages/blog/microsoft';
import CategoryPage from './pages/blog/BlogCategory';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<Home />} />
      <Route path='white-label-msp-services' element={<WhiteLabel />} />      
      <Route path='cloud-hosting' element={<CloudHosting />} />
      <Route path='professional-services' element={<Professional />} />
      <Route path='company' element={<Company />} />
      <Route path='blog' element={<Blog/>} />


      {/* sub route nothing common with parent route */}

      {/* White label Routes */}
      <Route path='white-label-msp-services/partner-program' element={<PartnerProgram />} />
      <Route path='white-label-msp-services/managed-it-services' element={<ManagedItServices/>} />
      <Route path='white-label-msp-services/noc-soc-cloud' element={<NocSocCloud />} />
      <Route path='white-label-msp-services/staff-augmentation' element={<StaffAugmentation/>} />

      {/* Cloud routes */}
      <Route path='cloud-hosting/hosting-solutions' element={<HostingSolutions/>} />
      <Route path='cloud-hosting/specialty-hosting' element={<SpecialtySolutions />} />
      <Route path='cloud-hosting/microsoft' element={<Microsoft />} />
      <Route path='cloud-hosting/security-compliance' element={<SpecialtySolutions />} />

      {/* professional services routes */}
      <Route path='professional-services/server-support' element={<ServerSupport/>} />

      {/* blog sub routes */}
      <Route path='blog/microsoft-365' element={<MicroSoftBlog/>} />
      <Route path="blog/microsoft-365/:slug" element={<CategoryPage />} />
    </Route>  
  )
)

function App() {
  return (
    <>
      <Numberbar /> 
      <RouterProvider router={router} />
    </>
  )
}

export default App