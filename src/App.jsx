import './App.css'
import { Route, Routes } from 'react-router-dom'
import HeroPage from './Pages/HeroPage'
import EnterprisePage from './Pages/EnterprisePage'
import UseCasesPage from './Pages/UseCasesPage'
import PricingPage from './Pages/PricingPage'
import BlogPage from './Pages/BlogPage'
import { Stack } from '@chakra-ui/react'
import SignIn from './Pages/SignIn'
import SignUp from './Pages/SignUp'
import UseCasesPage2 from './Pages/UseCasesPage 2'

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
