// eslint-disable-next-line no-unused-vars
import React from 'react';
import NavBar from '../Components/HeaderComponents';
import {
	Accordion,
	AccordionButton,
	AccordionItem,
	AccordionPanel,
	Box,
	Button,
	Divider,
	Flex,
	Icon,
	ListItem,
	SimpleGrid,
	Stack,
	Text,
	UnorderedList,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import FooterComponents from '../Components/FooterComponents';
import { FaCheckCircle } from 'react-icons/fa';
import { AddIcon, MinusIcon } from '@chakra-ui/icons';
const PricingPage = () => {
	const MotionBox = motion(Box);

	const PrerimunFeatures = [
		'10,000 Credits',
		'GPT 3.5 16K',
		'GPT 4',
		'15 Users',
		'15 Bots',
		'10,000 Documents',
		'10,000 Website Pages',
		'Website Crawler',
		'Embed Website Widget (3 Websites)',
		'Customize Website Widget',
		'Remove Cody Branding on Widget',
		'API',
	];

	const BasicFeatures = [
		'2,500 Credits',
		'GPT 3.5 16K',
		'3 Users',
		'3 Bots',
		'1,000 Documents',
		'Embed Website Widget',
		'Customize Website Widget',
		'API',
	];

	const AdwanveFeatures = [
		'25,000 Credits',
		'GPT 3.5 16K',
		'GPT 4',
		'50 Users',
		'50 Bots',
		'25,000 Documents',
		'25,000 Website Pages',
		'Website Crawler',
		'Embed Website Widget (50 Websites)',
		'Customize Website Widget',
		'Remove Cody Branding on Widget',
		'API',
	];
	return (
		<>
			<NavBar />
			<Stack w={'100vw'} mb={'5em'}>
				<Flex justifyContent={'center'} alignItems={'Center'}>
					<Flex
						mt={20}
						w={869}
						h={181}
						justifyContent={'center'}
						direction={'column'}
					>
						<Flex
							direction={'row'}
							justifyContent={'center'}
							alignItems={'center'}
						>
							<Text
								bgGradient="linear(to-l, #7928CA, #FF0080)"
								bgClip="text"
								fontSize="4.5em"
								fontWeight="bold"
							>
								Get Started for Free
							</Text>
						</Flex>
						<Text textAlign={'center'}>
							Whether you’re using Cody for personal use, with a team, or plan
							to provide it to your clients we have a package for you.
						</Text>
					</Flex>
				</Flex>
				<Flex mt={'5em'} direction={'row'} justifyContent={'center'}>
					<SimpleGrid columns={{ base: 1, lg: 3 }} spacing={5}>
						<Box
							borderRadius={40}
							w={419}
							h={508}
							bgColor={'rgb(25,26,48)'}
							mr={3}
						>
							<Box mx={7} mt={'1em'} display={'flex'} flexDirection={'column'}>
								<Text fontSize={'1.35em'}>Basic</Text>
								<Text
									fontSize={'2.5em'}
									bgClip="text"
									bgGradient="linear(to-l, #7928CA, #FF0080)"
									fontWeight={600}
									mt={1}
								>
									$29/mo
								</Text>
								<Divider
									h={'0.1em'}
									mt={'2em'}
									bgGradient="linear(to-l, #7928CA, #FF0080)"
								/>
								<UnorderedList mt={'1em'} listStyleType={'none'}>
									{BasicFeatures.map((feature, index) => (
										<ListItem key={index}>
											<Flex gap={1}>
												<Box
													mt={1}
													borderRadius="5px"
													bgGradient={
														'linear(to-l, rgb(58,82,250), rgb(249,52,226))'
													}
													p="2"
													boxSize="25px"
													display="flex"
													alignItems="center"
													justifyContent="center"
												>
													<Icon as={FaCheckCircle} />
												</Box>
												<Box
													textColor={'gray.300'}
													fontSize={'1em'}
													fontWeight={500}
													ml={1}
													display={'flex'}
													alignItems={'center'}
												>
													{feature}
												</Box>
											</Flex>
										</ListItem>
									))}
								</UnorderedList>

								<Flex
									mt={'1em'}
									direction={'column'}
									justifyContent={'center'}
									alignItems={'center'}
									textColor={'white'}
								>
									<MotionBox
										as={Button}
										width={'17em'}
										height={'4em'}
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
												fontSize={'1.25em'}
												fontWeight={700}
											>
												Subscribe
											</Text>
										</NavLink>
									</MotionBox>
								</Flex>
							</Box>
						</Box>
						<Box
							borderRadius={40}
							w={419}
							h={618}
							bgColor={'rgb(25,26,48)'}
							mr={3}
						>
							<Box mx={7} mt={'1em'} display={'flex'} flexDirection={'column'}>
								<Text fontSize={'1.35em'}>Premium</Text>
								<Text
									fontSize={'2.5em'}
									bgClip="text"
									bgGradient="linear(to-l, #7928CA, #FF0080)"
									fontWeight={600}
									mt={1}
								>
									$99/mo
								</Text>
								<Divider
									h={'0.1em'}
									mt={'2em'}
									bgGradient="linear(to-l, #7928CA, #FF0080)"
								/>
								<UnorderedList mt={'1em'} listStyleType={'none'}>
									{PrerimunFeatures.map((feature, index) => (
										<ListItem key={index}>
											<Flex gap={1}>
												<Box
													mt={1}
													borderRadius="5px"
													bgGradient={
														'linear(to-l, rgb(58,82,250), rgb(249,52,226))'
													}
													p="2"
													boxSize="25px"
													display="flex"
													alignItems="center"
													justifyContent="center"
												>
													<Icon as={FaCheckCircle} />
												</Box>
												<Box
													textColor={'gray.300'}
													fontSize={'1em'}
													fontWeight={500}
													ml={1}
													display={'flex'}
													alignItems={'center'}
												>
													{feature}
												</Box>
											</Flex>
										</ListItem>
									))}
								</UnorderedList>

								<Flex
									mt={'1em'}
									direction={'column'}
									justifyContent={'center'}
									alignItems={'center'}
									textColor={'white'}
								>
									<MotionBox
										as={Button}
										width={'17em'}
										height={'4em'}
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
												fontSize={'1.25em'}
												fontWeight={700}
											>
												Subscribe
											</Text>
										</NavLink>
									</MotionBox>
								</Flex>
							</Box>
						</Box>
						<Box
							borderRadius={40}
							w={419}
							h={618}
							bgColor={'rgb(25,26,48)'}
							mr={3}
						>
							<Box mx={7} mt={'1em'} display={'flex'} flexDirection={'column'}>
								<Text fontSize={'1.35em'}>Premium</Text>
								<Text
									fontSize={'2.5em'}
									bgClip="text"
									bgGradient="linear(to-l, #7928CA, #FF0080)"
									fontWeight={600}
									mt={1}
								>
									$249/mo
								</Text>
								<Divider
									h={'0.1em'}
									mt={'2em'}
									bgGradient="linear(to-l, #7928CA, #FF0080)"
								/>
								<UnorderedList mt={'1em'} listStyleType={'none'}>
									{AdwanveFeatures.map((feature, index) => (
										<ListItem key={index}>
											<Flex gap={1}>
												<Box
													mt={1}
													borderRadius="5px"
													bgGradient={
														'linear(to-l, rgb(58,82,250), rgb(249,52,226))'
													}
													p="2"
													boxSize="25px"
													display="flex"
													alignItems="center"
													justifyContent="center"
												>
													<Icon as={FaCheckCircle} />
												</Box>
												<Box
													textColor={'gray.300'}
													fontSize={'1em'}
													fontWeight={500}
													ml={1}
													display={'flex'}
													alignItems={'center'}
												>
													{feature}
												</Box>
											</Flex>
										</ListItem>
									))}
								</UnorderedList>

								<Flex
									mt={'1em'}
									direction={'column'}
									justifyContent={'center'}
									alignItems={'center'}
									textColor={'white'}
								>
									<MotionBox
										as={Button}
										width={'17em'}
										height={'4em'}
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
												fontSize={'1.25em'}
												fontWeight={700}
											>
												Subscribe
											</Text>
										</NavLink>
									</MotionBox>
								</Flex>
							</Box>
						</Box>
					</SimpleGrid>
				</Flex>

				<Stack>
					<Flex
						flexDir={'column'}
						justifyContent={'center'}
						alignItems={'center'}
					>
						<Text fontSize={'4em'} fontWeight={550}>
							Frequently Asked Questions
						</Text>
            <Box mt={'3em'} w={'60em'}  >
						<Accordion allowMultiple>
							<AccordionItem  border="2px" borderColor="violet" borderRadius={10}>
								{({ isExpanded }) => (
									<>
										<h2>
											<AccordionButton>
												<Box fontSize={'1.5em'} as="span" flex="1" textAlign="left">
													What Is Cody?
												</Box>
												{isExpanded ? (
                          <Box color={'violet'}>
                            <MinusIcon boxSize="1.5em" />
                          </Box>
												) : (
                          <Box color={'violet'}>
                            <AddIcon boxSize="1.5em" />
                          </Box>
												)}
											</AccordionButton>
										</h2>
										<AccordionPanel pb={4} borderRadius={30}>
                    Cody is an AI-powered virtual employee that can assist your business in various tasks, such as answering questions, completing tasks, onboarding new hires, providing support and troubleshooting, and bringing new ideas and insights.
										</AccordionPanel>
									</>
								)}
							</AccordionItem>
							<AccordionItem mt={4} border="2px" borderColor="violet" borderRadius={10}>
								{({ isExpanded }) => (
									<>
										<h2>
											<AccordionButton>
												<Box fontSize={'1.5em'} as="span" flex="1" textAlign="left">
													How Does Cody Work?
												</Box>
												{isExpanded ? (
                          <Box color={'violet'}>
                            <MinusIcon boxSize="1.5em" />
                          </Box>
												) : (
                          <Box color={'violet'}>
                            <AddIcon boxSize="1.5em" />
                          </Box>
												)}
											</AccordionButton>
										</h2>
										<AccordionPanel pb={4} borderRadius={30}>
                    Cody searches all of your accumulated company data, including articles, PowerPoints, and PDFs, and sources the top 10 most relevant documents to create an answer to your question in seconds.
										</AccordionPanel>
									</>
								)}
							</AccordionItem>
							<AccordionItem mt={4} border="2px" borderColor="violet" borderRadius={10}>
								{({ isExpanded }) => (
									<>
										<h2>
											<AccordionButton>
												<Box fontSize={'1.5em'} as="span" flex="1" textAlign="left">
												Can I Upload Documents To Cody?
												</Box>
												{isExpanded ? (
                          <Box color={'violet'}>
                            <MinusIcon boxSize="1.5em" />
                          </Box>
												) : (
                          <Box color={'violet'}>
                            <AddIcon boxSize="1.5em" />
                          </Box>
												)}
											</AccordionButton>
										</h2>
										<AccordionPanel pb={4} borderRadius={30}>
                    Yes, you can upload various types of documents to Cody, such as Word, PowerPoint, and PDFs, and Cody will instantly learn all that information and use it to provide answers to your questions.
										</AccordionPanel>
									</>
								)}
							</AccordionItem>
							<AccordionItem mt={4} border="2px" borderColor="violet" borderRadius={10}>
								{({ isExpanded }) => (
									<>
										<h2>
											<AccordionButton>
												<Box fontSize={'1.5em'} as="span" flex="1" textAlign="left">
													What Are Credits?
												</Box>
												{isExpanded ? (
                          <Box color={'violet'}>
                            <MinusIcon boxSize="1.5em" />
                          </Box>
												) : (
                          <Box color={'violet'}>
                            <AddIcon boxSize="1.5em" />
                          </Box>
												)}
											</AccordionButton>
										</h2>
										<AccordionPanel pb={4} borderRadius={30}>
                    <Box>
                    <Text>Credits measure usage. For example:</Text>
                    <UnorderedList>
                      <ListItem>A GPT 3.5 query uses 1 credit.</ListItem>
                      <ListItem>A GPT 3.5 16K query requires 5 credits.</ListItem>
                      <ListItem>A GPT 4 query consumes 10 credits.</ListItem>
                    </UnorderedList>
                        <Text>You can track your credit consumption in real-time under the usage tab</Text>
                    </Box>
										</AccordionPanel>
									</>
								)}
							</AccordionItem>
							<AccordionItem mt={4} border="2px" borderColor="violet" borderRadius={10}>
								{({ isExpanded }) => (
									<>
										<h2>
											<AccordionButton>
												<Box fontSize={'1.5em'} as="span" flex="1" textAlign="left">
													Can I Train Cody On My Specific Business Proceses?
												</Box>
												{isExpanded ? (
                          <Box color={'violet'}>
                            <MinusIcon boxSize="1.5em" />
                          </Box>
												) : (
                          <Box color={'violet'}>
                            <AddIcon boxSize="1.5em" />
                          </Box>
												)}
											</AccordionButton>
										</h2>
										<AccordionPanel pb={4} borderRadius={30}>
                    Yes, you can train Cody on your specific business processes, such as support documentation, allowing your team to quickly troubleshoot any issues.
										</AccordionPanel>
									</>
								)}
							</AccordionItem>
							<AccordionItem mt={4} border="2px" borderColor="violet" borderRadius={10}>
								{({ isExpanded }) => (
									<>
										<h2>
											<AccordionButton>
												<Box fontSize={'1.5em'} as="span" flex="1" textAlign="left">
													Is Cody A Replacement For Human Employees?
												</Box>
												{isExpanded ? (
                          <Box color={'violet'}>
                            <MinusIcon boxSize="1.5em" />
                          </Box>
												) : (
                          <Box color={'violet'}>
                            <AddIcon boxSize="1.5em" />
                          </Box>
												)}
											</AccordionButton>
										</h2>
										<AccordionPanel pb={4} borderRadius={30}>
                    No, Cody is not a replacement for human employees. Instead, it is designed to assist and augment your team, allowing them to focus on more important tasks and work more efficiently.
										</AccordionPanel>
									</>
								)}
							</AccordionItem>
							
						</Accordion>
            </Box>
            
					</Flex>
				</Stack>
				<Box
					mt={'2em'}
					h={400}
					w={'98.5vw'}
					bgGradient="linear(to-l, rgb(13,45,131), rgb(5,2,6), rgb(38,12,44))"
					display={'flex'}
					flexDir={'column'}
					justifyContent={'center'}
					alignItems={'center'}
					borderRadius={30}
				>
					<Text mb={'1em'} fontSize={'4em'} fontWeight={600}>
          Get Started Free With A Personal Account
					</Text>
					<Text mb={'1em'} fontSize={'1.2em'} textColor={'gray.500'}>
          Receive 250 credits per month, 100 documents & a free widget for your website.
					</Text>
					<MotionBox
						as={Button}
						width={'23em'}
						height={'4.5em'}
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
							<Text textColor={'white'} fontSize={'x-large'} fontWeight={600}>
								Build Your Custom AI
							</Text>
						</NavLink>
					</MotionBox>
				</Box>
			</Stack>
			<FooterComponents />
		</>
	);
};

export default PricingPage;
