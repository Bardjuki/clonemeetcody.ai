/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import NavBar from '../Components/HeaderComponents'
import { Box, Button, Center, Circle, Flex, Image, SimpleGrid, Stack, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'
import FooterComponents from '../Components/FooterComponents'
const BlogPage = () => {
  const MotionBox = motion(Box)
  return (
    <>
    <NavBar/>
    <Stack w={'100vw'} mb={'5em'}>
      <Flex justifyContent={'center'} alignItems={'Center'}>
      <Flex mt={20} w={869} h={181}  justifyContent={'center'} direction={'column'} >
        <Flex direction={'row'} justifyContent={'center'} alignItems={'center'}>
          <Text
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          bgClip="text"
          fontSize="4.5em"
          fontWeight="bold"
          frg
        >
          From Our
        </Text>
        <Text ml={5} fontSize="4.5em" fontWeight="bold" textColor={'rgb(180,188,208)'}>Blog</Text>
        </Flex>
        <Text textAlign={'center'}>
        Discover the power of Business AI through our engaging AI blog, where we unveil the latest advancements, innovations, and strategies for leveraging artificial intelligence to revolutionize your business operations and stay ahead in the competitive market.
        </Text>
      </Flex>
      </Flex>
      <Flex mt={'5em'} direction={'row'} justifyContent={'center'}>
        <SimpleGrid columns={{base: 1, lg: 2}} spacing={5}>
        <Box display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'start'} bgColor={'rgb(31,32,60)'} mr={3} borderRadius={40} w={600} h={842}>
          <Image borderTopRadius={40} src='https://meetcody.ai/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2023/12/chatgpt-alternatives-custom-704x345.png.webp'/>
          <Text textAlign={'center'} w={'16em'} fontSize={'2em'} textColor={'gray.400'} fontWeight={600} mt={'2.5em'}>Top 10 Custom ChatGPT Alternatives for 2024</Text>
          <Text textAlign={'center'} mt={5} h={127} w={424} fontSize={'1.1em'} textColor={'gray.400'}>Tired of hundreds of suggestions talking about custom ChatGPT alternatives? Here’s an exclusive list of the top alternatives to ChatGPT with their own superpowers. 

But first…</Text>
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
									Read More
								</Text>
							</NavLink>
						</MotionBox>
					</Flex>
        </Box>
        <Box display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'start'} bgColor={'rgb(31,32,60)'} mr={3} borderRadius={40} w={600} h={842}>
          <Image borderTopRadius={40} src='https://meetcody.ai/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2023/12/gpt-4-vs-claude-2.1-704x345.png.webp'/>
          <Text textAlign={'center'} w={'16em'} fontSize={'2em'} textColor={'gray.400'} fontWeight={600} mt={'2.5em'}>GPT 4 Turbo vs Claude 2.1: A Definitive Guide and Comparison</Text>
          <Text textAlign={'center'} mt={5} h={127} w={424} fontSize={'1.1em'} textColor={'gray.400'}>Today, when we think of artificial intelligence, two main chatbots come to our mind- GPT 4 Turbo by OpenAI and Claude 2.1 by Anthropic. But who wins the GPT 4 Turbo vs Claude 2.1 battle? Let’s say you’re selecting a superhero for your tea...</Text>
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
									Read More
								</Text>
							</NavLink>
						</MotionBox>
					</Flex>
        </Box>
        <Box display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'start'} bgColor={'rgb(31,32,60)'} mr={3} borderRadius={40} w={600} h={842}>
          <Image borderTopRadius={40} src='https://meetcody.ai/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2023/12/Vector-databases-2024-704x345.png.webp'/>
          <Text textAlign={'center'} w={'16em'} fontSize={'2em'} textColor={'gray.400'} fontWeight={600} mt={'2.5em'}>TTop 5 Vector Databases to Try in 2024</Text>
          <Text textAlign={'center'} mt={5} h={127} w={424} fontSize={'1.1em'} textColor={'gray.400'}>Vector databases, also referred to as vectorized databases or vector stores, constitute a specialized database category crafted for the efficient storage and retrieval of high-dimensional vectors.  In the database context, a vector denotes an organi...</Text>
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
									Read More
								</Text>
							</NavLink>
						</MotionBox>
					</Flex>
        </Box>
        <Box display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'start'} bgColor={'rgb(31,32,60)'} mr={3} borderRadius={40} w={600} h={842}>
          <Image borderTopRadius={40} src='https://meetcody.ai/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2023/12/Googles-Gemini-Ultra-Pro-and-Nano-704x345.png.webp'/>
          <Text textAlign={'center'} w={'16em'} fontSize={'2em'} textColor={'gray.400'} fontWeight={600} mt={'2.5em'}>Google Introduces the Multimodal Gemini Ultra, Pro, & Nano Models</Text>
          <Text textAlign={'center'} mt={5} h={127} w={424} fontSize={'1.1em'} textColor={'gray.400'}>Google has recently unveiled its groundbreaking AI model, Gemini, heralded as the most substantial and capable launch to date.  Demis Hassabis, the Co-Founder and CEO of Google DeepMind, shared insights about Gemini, emphasizing its multimodal found...</Text>
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
									Read More
								</Text>
							</NavLink>
						</MotionBox>
					</Flex>
        </Box>
        <Box display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'start'} bgColor={'rgb(31,32,60)'} mr={3} borderRadius={40} w={600} h={842}>
          <Image borderTopRadius={40} src='https://meetcody.ai/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2023/12/ai-copywriting-tools-704x345.png.webp'/>
          <Text textAlign={'center'} w={'16em'} fontSize={'2em'} textColor={'gray.400'} fontWeight={600} mt={'2.5em'}>Your Ultimate Collection of AI Copywriting Tools for 2024</Text>
          <Text textAlign={'center'} mt={5} h={127} w={424} fontSize={'1.1em'} textColor={'gray.400'}>Over half of business leaders, around 52%, are already making good use of AI copywriting tools to boost their content marketing game. What’s particularly noteworthy is that the AI trend isn’t limited to a specific business type, as both B...</Text>
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
									Read More
								</Text>
							</NavLink>
						</MotionBox>
					</Flex>
        </Box>
        <Box display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'start'} bgColor={'rgb(31,32,60)'} mr={3} borderRadius={40} w={600} h={842}>
          <Image borderTopRadius={40} src='https://meetcody.ai/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2023/12/social-media-ai-prompts-704x345.png.webp'/>
          <Text textAlign={'center'} w={'16em'} fontSize={'2em'} textColor={'gray.400'} fontWeight={600} mt={'2.5em'}>Top 16 Social Media AI Prompts in 2024</Text>
          <Text textAlign={'center'} mt={5} h={127} w={424} fontSize={'1.1em'} textColor={'gray.400'}>Social media teams tasked with capturing audience attention can craft social media AI prompts to streamline and enhance their creative process.  3. Use examples to illustrate your desired outcome.This will help AI to learn your style and preferences...</Text>
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
									Read More
								</Text>
							</NavLink>
						</MotionBox>
					</Flex>
        </Box>
        </SimpleGrid>
      </Flex>
      <Box gap={3} display={'flex'} mt={'4em'} justifyContent={'center'}>
            <Circle size={'5em'} bg={'violet'}>
              <Center><Text fontSize={'2em'}>1</Text></Center>
            </Circle>
            <Circle size={'5em'} bg={'blue.600'} _hover={{bg: 'violet'}}>
              <Center><Text fontSize={'2em'}>2</Text></Center>
            </Circle>
            <Circle size={'5em'} bg={'blue.600'} _hover={{bg: 'violet'}}>
              <Center><Text fontSize={'2em'}>3</Text></Center>
            </Circle>
            <Text display={'flex'} alignItems={'end'} >.....</Text>
            <Circle size={'5em'} bg={'blue.600'} _hover={{bg: 'violet'}}>
              <Center><Text fontSize={'2em'}>14</Text></Center>
            </Circle>
        </Box>
        <Box mt={'2em'} h={367} w={'98.5vw'} bgGradient='linear(to-l, rgb(13,45,131), rgb(5,2,6), rgb(38,12,44))' display={'flex'} flexDir={'column'} justifyContent={'center'} alignItems={'center'} borderRadius={30}>
              <Text  mb={'1em'} fontSize={'4em'} fontWeight={600}>Build Your Own Business AI</Text>
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

export default BlogPage