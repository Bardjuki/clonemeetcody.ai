
import NavBar from '../../Components/HeaderComponents';
import {
	Box,
	Button,
	Center,
	Circle,
	Flex,
	Image,
	SimpleGrid,
	Stack,
	Text,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import FooterComponents from '../../Components/FooterComponents';

const UseCasesPage2 = () => {
	const MotionBox = motion(Box);

	return (
		<>
			<NavBar />
			<Stack w={'98.5vw'} mb={'5em'}>
				<Flex justifyContent={'center'} alignItems={'Center'}>
					<Flex
						mt={20}
						w={869}
						h={181}
						justifyContent={'center'}
						direction={'column'}
					>
						<Flex
							direction={{ base: 'column', lg: 'row' }}
							justifyContent={'center'}
							alignItems={'center'}
						>
							<Text
								bgGradient="linear(to-l, #7928CA, #FF0080)"
								bgClip="text"
								fontSize="4.5em"
								fontWeight="bold"
								frg
							>
								AI Chat Bot
							</Text>
							<Text
								ml={5}
								fontSize="4.5em"
								fontWeight="bold"
								textColor={'rgb(180,188,208)'}
							>
								{' '}
								Templates
							</Text>
						</Flex>
						<Text textAlign={'center'}>
							Discover our diverse range of AI Chatbot Templates, designed to
							cater to various industries and use cases. Our selection of
							templates aims to kick-start building the perfect bot for your
							team and customers.
						</Text>
					</Flex>
				</Flex>
				<Flex mt={'5em'} direction={'row'} justifyContent={'center'}>
					<SimpleGrid columns={{ base: 1, lg: 2 }} spacing={5}>
						<Box
							display={'flex'}
							flexDirection={'column'}
							alignItems={'center'}
							justifyContent={'center'}
							bgColor={'rgb(31,32,60)'}
							mr={3}
							borderRadius={40}
							w={674}
							h={553}
						>
							<Image src="https://meetcody.ai/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2023/05/Icon-1.png.webp" />
							<Text fontSize={'2.5em'} fontWeight={600} mt={5}>
								Factual AI Assistant
							</Text>
							<Text textAlign={'center'} mt={5} h={127} w={424}>
								Experience the power of instant knowledge at your fingertips
								with a personalized Factual Assistant. Cut down the time you
								spend searching through thousands of documents by letting the
								assistant find the answers you seek. Seamlessly leverage your
								orga...
							</Text>
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
									<NavLink to={'/'} >
										<Text
											textColor={'white'}
											fontSize={'x-large'}
											fontWeight={700}
										>
											Learn More
										</Text>
									</NavLink>
								</MotionBox>
							</Flex>
						</Box>
						<Box
							display={'flex'}
							flexDirection={'column'}
							alignItems={'center'}
							justifyContent={'center'}
							bgColor={'rgb(31,32,60)'}
							mr={3}
							borderRadius={40}
							w={674}
							h={553}
						>
							<Image src="https://meetcody.ai/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2023/05/New-Project-72.png.webp" />
							<Text fontSize={'2.5em'} fontWeight={600} mt={5}>
								Training Bot
							</Text>
							<Text textAlign={'center'} mt={5} h={127} w={424}>
								Enhance employee engagement and learning with a custom-built
								Training Bot. Design your bot in a way that it provides
								step-by-step guidance to employees by pulling information from
								your knowledge base and curating essential lesson plans. Create
								an int...
							</Text>
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
										<Text
											textColor={'white'}
											fontSize={'x-large'}
											fontWeight={700}
										>
											Learn More
										</Text>
									</NavLink>
								</MotionBox>
							</Flex>
						</Box>
						<Box
							display={'flex'}
							flexDirection={'column'}
							alignItems={'center'}
							justifyContent={'center'}
							bgColor={'rgb(31,32,60)'}
							mr={3}
							borderRadius={40}
							w={674}
							h={553}
						>
							<Image src="https://meetcody.ai/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2023/05/Icon-2.png.webp" />
							<Text fontSize={'2.5em'} fontWeight={600} mt={5}>
								Hiring AI Bot
							</Text>
							<Text textAlign={'center'} mt={5} h={127} w={424}>
								Optimize your hiring process by creating a personalized Hiring
								AI Bot. Let potential candidates interact with your career
								information and discover open positions near them. The bot can
								evaluate and suggest the best match based on their experience,
								sa...
							</Text>
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
										<Text
											textColor={'white'}
											fontSize={'x-large'}
											fontWeight={700}
										>
											Learn More
										</Text>
									</NavLink>
								</MotionBox>
							</Flex>
						</Box>
						<Box
							display={'flex'}
							flexDirection={'column'}
							alignItems={'center'}
							justifyContent={'center'}
							bgColor={'rgb(31,32,60)'}
							mr={3}
							borderRadius={40}
							w={674}
							h={553}
						>
							<Image src="https://meetcody.ai/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2023/05/Icon-4.png.webp" />
							<Text fontSize={'2.5em'} fontWeight={600} mt={5}>
								Customer Support AI Chatbot
							</Text>
							<Text textAlign={'center'} mt={5} h={127} w={424}>
								Elevate your customer support experience by utilizing our AI
								Builder to create a personalized Customer Support Chatbot for
								your website. Allow customers to interact with your available
								documentation using your knowledge base, resulting in faster
								reso...
							</Text>
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
										<Text
											textColor={'white'}
											fontSize={'x-large'}
											fontWeight={700}
										>
											Learn More
										</Text>
									</NavLink>
								</MotionBox>
							</Flex>
						</Box>
						<Box
							display={'flex'}
							flexDirection={'column'}
							alignItems={'center'}
							justifyContent={'center'}
							bgColor={'rgb(31,32,60)'}
							mr={3}
							borderRadius={40}
							w={674}
							h={553}
						>
							<Image src="https://meetcody.ai/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2023/06/New-Project-74.png.webp" />
							<Text fontSize={'2.5em'} fontWeight={600} mt={5}>
								Translator Assistant
							</Text>
							<Text textAlign={'center'} mt={5} h={127} w={424}>
								The Translator AI acts as a sophisticated language translation
								tool, providing users with accurate translations in various
								languages. This AI is designed to offer users a personalized
								translation experience by accommodating specific requirements
								such...
							</Text>
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
										<Text
											textColor={'white'}
											fontSize={'x-large'}
											fontWeight={700}
										>
											Learn More
										</Text>
									</NavLink>
								</MotionBox>
							</Flex>
						</Box>
					</SimpleGrid>
				</Flex>
				<Box gap={3} display={'flex'} mt={'4em'} justifyContent={'center'}>
					<NavLink to={'/use-cases'} >
						<Circle size={'5em'} bg={'violet'}>
							<Center>
								<Text fontSize={'2em'}>1</Text>
							</Center>
						</Circle>
					</NavLink>
					<NavLink to={'/use-cases/page/2'} >
						<Circle size={'5em'} bg={'blue'} _hover={{ bg: 'violet' }}>
							<Center>
								<Text fontSize={'2em'}>2</Text>
							</Center>
						</Circle>
					</NavLink>
				</Box>
				<Box
					mt={'2em'}
					h={367}
					w={'98.5vw'}
					bgGradient="linear(to-l, rgb(13,45,131), rgb(5,2,6), rgb(38,12,44))"
					display={'flex'}
					flexDir={'column'}
					justifyContent={'center'}
					alignItems={'center'}
					borderRadius={30}
				>
					<Text
						textAlign={'center'}
						mb={'1em'}
						fontSize={'4em'}
						fontWeight={600}
					>
						Build Your Own Business AI
					</Text>
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
						<NavLink to={'/'} >
							<Text textColor={'white'} fontSize={'x-large'} fontWeight={700}>
								Get Started Free
							</Text>
						</NavLink>
					</MotionBox>
				</Box>
			</Stack>
			<FooterComponents />
		</>
	);
};

export default UseCasesPage2;
