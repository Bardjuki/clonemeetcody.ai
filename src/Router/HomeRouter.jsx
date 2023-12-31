// eslint-disable-next-line no-unused-vars
import React from 'react'
// eslint-disable-next-line no-unused-vars
import HeroPage from '../Pages/HeroPage'
import EnterprisePage from '../Pages/EnterprisePage'
import UseCasePage from '../Pages/UseCasePage'
import PricingPage from '../Pages/PricingPage'
import BlogPage from '../Pages/BlogPage'
import NavBar from '../Components/HeaderComponents'

const HomeRouter = [
    {
        path: '/',
        element: <NavBar/>
    },
    {
        path: '/use-case',
        element: <UseCasePage/>
    },
    {
        path: '/enterprise',
        element: <EnterprisePage/>
    },
    {
        path: '/pricing',
        element: <PricingPage/>
    },
    {
        path: '/blog',
        element: <BlogPage/>
    }
]

export default HomeRouter