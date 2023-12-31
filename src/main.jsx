import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  config: {
    initialColorMode: 'ligth',
    useSystemColorMode: false,
  },
  colors: {
    light: {
      // Specify your light mode colors here
      primary: '#3498db',
      // ...
    },
    dark: {
      // Specify your dark mode colors here
      primary: 'rgb(0, 0, 128)', // Example RGB value for dark mode primary color
      // ...
    },
  },
});
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
