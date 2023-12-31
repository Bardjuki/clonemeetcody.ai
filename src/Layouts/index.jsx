/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Container, Flex } from '@chakra-ui/react'
import React from 'react'
import FooterComponents from '../Components/FooterComponents'

function Layout({children}) {
  return (
    <>
    <Flex height="100vh" w={'full'} bgColor={'gray.50'}>

      <Container maxW={'full'} overflowY={'scroll'} pt={'4'}>
        <Container minH={'95vh'}>
          {children}
        </Container>
        <FooterComponents />
      </Container>
    </Flex>
  </>
  )
}

export default Layout