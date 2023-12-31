/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import NavBar from '../Components/HeaderComponents'
import { Box, Button, Center, Circle, Flex, Image, SimpleGrid, Stack, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'
import FooterComponents from '../Components/FooterComponents'

const UseCasesPage = () => {
  const MotionBox = motion(Box)
  return (
    <>
    <NavBar/>
    <Stack w={'98.5vw'} mb={'5em'}>
      <Flex justifyContent={'center'} alignItems={'Center'}>
      <Flex mt={20} w={869} h={181}  justifyContent={'center'} direction={'column'} >
        <Flex direction={{base: 'column', lg:'row'}} justifyContent={'center'} alignItems={'center'}>
          <Text
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          bgClip="text"
          fontSize="4.5em"
          fontWeight="bold"
          frg
        >
          AI Chat Bot
        </Text>
        <Text ml={5} fontSize="4.5em" fontWeight="bold" textColor={'rgb(180,188,208)'}> Templates</Text>
        </Flex>
        <Text textAlign={'center'}>
        Discover our diverse range of AI Chatbot Templates, designed to cater to various industries and use cases. Our selection of templates aims to kick-start building the perfect bot for your team and customers.
        </Text>
      </Flex>
      </Flex>
      <Flex mt={'5em'} direction={'row'} justifyContent={'center'}>
        <SimpleGrid columns={{base: 1, lg: 2}} spacing={5}>
        <Box display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'} bgColor={'rgb(31,32,60)'} mr={3} borderRadius={40} w={674} h={553}>
          <Image src='https://meetcody.ai/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2023/05/Icon.png.webp'/>
          <Text fontSize={'2.5em'} fontWeight={600} mt={5}>Marketing AI Assistant</Text>
          <Text textAlign={'center'} mt={5} h={127} w={424}>The Marketing Assistant Bot acts as a proficient AI-powered chatbot designed to offer users valuable marketing support and insights. Cody, the Creative Marketing Strategist behind the Marketing Assistant Bot, is dedicated to delivering accurate and r...</Text>
          <Flex
						mt={'2em'}
						direction={'column'}
						justifyContent={'center'}
						alignItems={'center'}
						textColor={'white'}
					>
						<MotionBox
							as={Button}
							width={'23em'}
							height={'5em'}
							borderRadius={100}
							border={'none'}
							bgColor={'rgb(42,72,223)'}
							_hover={{ bgColor: 'rgb(223,106,154)' }}
							whileHover={{
								x: [-10, 10, -10],
								y: [-5, 8, -5],
								transition: { duration: 0.5, repeat: Infinity },
							}}
						>
							<NavLink to={'/login'}>
								<Text textColor={'white'} fontSize={'x-large'} fontWeight={700}>
									Learn More
								</Text>
							</NavLink>
						</MotionBox>
					</Flex>
        </Box>
        <Box display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'} bgColor={'rgb(31,32,60)'} mr={3} borderRadius={40} w={674} h={553}>
          <Image src='https://meetcody.ai/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2023/05/Icon-3.png.webp'/>
          <Text fontSize={'2.5em'} fontWeight={600} mt={5}>Human Resources (HR) AI</Text>
          <Text textAlign={'center'} mt={5} h={127} w={424}>Streamline your HR department and enhance employee communications by creating your very own HR Chatbot. Give your employees instant access to answers for common questions and save countless hours for your HR team. Maximize productivity and simplify i...</Text>
          <Flex
						mt={'2em'}
						direction={'column'}
						justifyContent={'center'}
						alignItems={'center'}
						textColor={'white'}
					>
						<MotionBox
							as={Button}
							width={'23em'}
							height={'5em'}
							borderRadius={100}
							border={'none'}
							bgColor={'rgb(42,72,223)'}
							_hover={{ bgColor: 'rgb(223,106,154)' }}
							whileHover={{
								x: [-10, 10, -10],
								y: [-5, 8, -5],
								transition: { duration: 0.5, repeat: Infinity },
							}}
						>
							<NavLink to={'/login'}>
								<Text textColor={'white'} fontSize={'x-large'} fontWeight={700}>
									Learn More
								</Text>
							</NavLink>
						</MotionBox>
					</Flex>
        </Box>
        <Box display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'} bgColor={'rgb(31,32,60)'} mr={3} borderRadius={40} w={674} h={553}>
          <Image src='https://meetcody.ai/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2023/05/New-Project-71.png.webp'/>
          <Text fontSize={'2.5em'} fontWeight={600} mt={5}>IT Support Chatbot</Text>
          <Text textAlign={'center'} mt={5} h={127} w={424}>Empower your IT support team with a personalized IT Support Chatbot that efficiently answers technical questions, troubleshoots issues, and guides users through any challenges. Utilize our AI Builder to create a support assistant that leverages your ...</Text>
          <Flex
						mt={'2em'}
						direction={'column'}
						justifyContent={'center'}
						alignItems={'center'}
						textColor={'white'}
					>
						<MotionBox
							as={Button}
							width={'23em'}
							height={'5em'}
							borderRadius={100}
							border={'none'}
							bgColor={'rgb(42,72,223)'}
							_hover={{ bgColor: 'rgb(223,106,154)' }}
							whileHover={{
								x: [-10, 10, -10],
								y: [-5, 8, -5],
								transition: { duration: 0.5, repeat: Infinity },
							}}
						>
							<NavLink to={'/login'}>
								<Text textColor={'white'} fontSize={'x-large'} fontWeight={700}>
									Learn More
								</Text>
							</NavLink>
						</MotionBox>
					</Flex>
        </Box>
        <Box display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'} bgColor={'rgb(31,32,60)'} mr={3} borderRadius={40} w={674} h={553}>
          <Image src='https://meetcody.ai/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2023/06/New-Project-75.png.webp'/>
          <Text fontSize={'2.5em'} fontWeight={600} mt={5}>Business Consultant</Text>
          <Text textAlign={'center'} mt={5} h={127} w={424}>Elevate your strategic decisions with a bespoke Business Consultant AI Assistant. Leverage the power of our AI Builder to forge an assistant tailored to your specific needs and business context. The Business Consultant can help you analyze industry t...</Text>
          <Flex
						mt={'2em'}
						direction={'column'}
						justifyContent={'center'}
						alignItems={'center'}
						textColor={'white'}
					>
						<MotionBox
							as={Button}
							width={'23em'}
							height={'5em'}
							borderRadius={100}
							border={'none'}
							bgColor={'rgb(42,72,223)'}
							_hover={{ bgColor: 'rgb(223,106,154)' }}
							whileHover={{
								x: [-10, 10, -10],
								y: [-5, 8, -5],
								transition: { duration: 0.5, repeat: Infinity },
							}}
						>
							<NavLink to={'/login'}>
								<Text textColor={'white'} fontSize={'x-large'} fontWeight={700}>
									Learn More
								</Text>
							</NavLink>
						</MotionBox>
					</Flex>
        </Box>
        <Box display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'} bgColor={'rgb(31,32,60)'} mr={3} borderRadius={40} w={674} h={553}>
          <Image src='https://meetcody.ai/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2023/04/home-section_3-icon_6.png.webp'/>
          <Text fontSize={'2.5em'} fontWeight={600} mt={5}>Creative AI Assistant</Text>
          <Text textAlign={'center'} mt={5} h={127} w={424}>Unlock the potential of innovative ideas with a personalized Creative Assistant designed to support your business in creative tasks. Save time and effort by letting the assistant generate unique concepts, draft messages, and provide suggestions based...</Text>
          <Flex
						mt={'2em'}
						direction={'column'}
						justifyContent={'center'}
						alignItems={'center'}
						textColor={'white'}
					>
						<MotionBox
							as={Button}
							width={'23em'}
							height={'5em'}
							borderRadius={100}
							border={'none'}
							bgColor={'rgb(42,72,223)'}
							_hover={{ bgColor: 'rgb(223,106,154)' }}
							whileHover={{
								x: [-10, 10, -10],
								y: [-5, 8, -5],
								transition: { duration: 0.5, repeat: Infinity },
							}}
						>
							<NavLink to={'/login'}>
								<Text textColor={'white'} fontSize={'x-large'} fontWeight={700}>
									Learn More
								</Text>
							</NavLink>
						</MotionBox>
					</Flex>
        </Box>
        <Box display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'} bgColor={'rgb(31,32,60)'} mr={3} borderRadius={40} w={674} h={553}>
          <Image src='https://meetcody.ai/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2023/05/Icon-8.png.webp'/>
          <Text fontSize={'2.5em'} fontWeight={600} mt={5}>AI Sales Bot Assistant</Text>
          <Text textAlign={'center'} mt={5} h={127} w={424}>Supercharge your sales efforts with a custom-built Sales Assistant. Harness the power of our AI Builder to create a bot tailored for your specific needs and industry context. The Sales Assistant can help you craft personalized content, utilizing info...</Text>
          <Flex
						mt={'2em'}
						direction={'column'}
						justifyContent={'center'}
						alignItems={'center'}
						textColor={'white'}
					>
						<MotionBox
							as={Button}
							width={'23em'}
							height={'5em'}
							borderRadius={100}
							border={'none'}
							bgColor={'rgb(42,72,223)'}
							_hover={{ bgColor: 'rgb(223,106,154)' }}
							whileHover={{
								x: [-10, 10, -10],
								y: [-5, 8, -5],
								transition: { duration: 0.5, repeat: Infinity },
							}}
						>
							<NavLink to={'/login'}>
								<Text textColor={'white'} fontSize={'x-large'} fontWeight={700}>
									Learn More
								</Text>
							</NavLink>
						</MotionBox>
					</Flex>
        </Box>
        </SimpleGrid>
      </Flex>
      <Box gap={3} display={'flex'} mt={'4em'} justifyContent={'center'}>
        <NavLink to={'/use-cases'}>
            <Circle size={'5em'} bg={'violet'}>
              <Center><Text fontSize={'2em'}>1</Text></Center>
            </Circle>
        </NavLink>
        <NavLink to={'/use-cases/page/2'}>
            <Circle size={'5em'} bg={'blue'} _hover={{bg: 'violet'}}>
              <Center><Text fontSize={'2em'}>2</Text></Center>
            </Circle>
        </NavLink>
        </Box>
        <Box mt={'2em'} h={367} w={'98.5vw'} bgGradient='linear(to-l, rgb(13,45,131), rgb(5,2,6), rgb(38,12,44))' display={'flex'} flexDir={'column'} justifyContent={'center'} alignItems={'center'} borderRadius={30}>
              <Text textAlign={'center'}  mb={'1em'} fontSize={'4em'} fontWeight={600}>Build Your Own Business AI</Text>
              <MotionBox
							as={Button}
							width={'23em'}
							height={'5em'}
							borderRadius={100}
							border={'none'}
							bgColor={'rgb(42,72,223)'}
							_hover={{ bgColor: 'rgb(223,106,154)' }}
							whileHover={{
								x: [-10, 10, -10],
								y: [-5, 8, -5],
								transition: { duration: 0.5, repeat: Infinity },
							}}
						>
							<NavLink to={'/login'}>
								<Text textColor={'white'} fontSize={'x-large'} fontWeight={700}>
									Get Started Free
								</Text>
							</NavLink>
						</MotionBox>
        </Box>
    </Stack>
    <FooterComponents/>
    </>
  )
}

export default UseCasesPage