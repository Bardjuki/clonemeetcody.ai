import './App.css'
import { Route, Routes } from 'react-router-dom'
import HeroPage from './Pages/Frontend/HeroPage'
import EnterprisePage from './Pages/Frontend/EnterprisePage'
import UseCasesPage from './Pages/Frontend/UseCasesPage'
import PricingPage from './Pages/Frontend/PricingPage'
import BlogPage from './Pages/Frontend/BlogPage'
import { Stack } from '@chakra-ui/react'
import SignIn from './Pages/Frontend/SignIn'
import SignUp from './Pages/Frontend/SignUp'
import UseCasesPage2 from './Pages/Frontend/UseCasesPage 2'

function App() {

  return (
      <Stack position={'relative'} overflow={'hidden'}>
      <Routes>
        <Route path='/' element={<HeroPage/>}/>
        <Route path='/use-cases' element={<UseCasesPage/>}/>
        <Route path='/use-cases/page/2' element={<UseCasesPage2/>}/>
        <Route path='/enterprise' element={<EnterprisePage/>}/>
        <Route path='/pricing' element={<PricingPage/>}/>
        <Route path='/blog' element={<BlogPage/>}/>
        <Route path='/auth/signin' element={<SignIn/>}/>
        <Route path='/auth/signup' element={<SignUp/>}/>
      </Routes>
      </Stack>
  )
}

export default App
