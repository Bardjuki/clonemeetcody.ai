/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import {
	AspectRatio,
	Box,
	Button,
	Center,
	Circle,
	Container,
	Divider,
	Flex,
	GridItem,
	Image,
	SimpleGrid,
	Stack,
	Text,
	Wrap,
	WrapItem,
} from '@chakra-ui/react';
// eslint-disable-next-line no-unused-vars
import React,  {useState} from 'react';
import NavBar from '../Components/HeaderComponents';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import {ArrowForwardIcon} from '@chakra-ui/icons'
import FooterComponents from '../Components/FooterComponents';
const HeroPage = () => {
	const [images, setimages] = useState('https://meetcody.ai/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2023/05/Warstwa-10.png.webp')
	const [text, setText] = useState('Upload files or import content using URLs to provide your chatbot with the essential knowledge to serve its purpose effectively.')

	const MotionBox = motion(Box);

	// For set Image in section
	const handleTeach = () => {
		setimages('https://meetcody.ai/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2023/05/Warstwa-10.png.webp')
		setText('Upload files or import content using URLs to provide your chatbot with the essential knowledge to serve its purpose effectively.')
	}
	const handleCustomize = () => {
		setimages('https://meetcody.ai/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2023/05/home-section_4-img_2_with_border.png.webp')
		setText('Set up specialized chatbots for various tasks by tailoring their roles, strictness, and other settings for an enhanced user experience.')
	}
	const handleShare = () => {
		setimages('https://meetcody.ai/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2023/05/home-section_4-img_3_with_border.png.webp')
		setText('Seamlessly integrate your chatbot with a shareable link, inline embed, or popup embed, ensuring easy access for your employees or customers.')
	}
	const handleAsk = () => {
		setimages('https://meetcody.ai/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2023/05/home-section_4-img_4_with_border.png.webp')
		setText('Interact with your chatbot by simply asking questions on the chat screen to instantly receive accurate and relevant answers.')
	}

	return (
		<>
			<NavBar/>
			<Stack width={'98.5vw'}>
				<Flex
					direction={'column'}
					mt={'3.5em'}
					justifyContent={'center'}
					alignItems={'center'}
				>
					<Box fontSize={'9em'} fontWeight={625}>
						Your AI Assistant
						<Divider />
						<Center>For Business</Center>
					</Box>
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
									Get Started Free
								</Text>
							</NavLink>
						</MotionBox>
						<Text mr={'1em'} fontSize={'1.5em'} textColor={'gray'}>
							No Credit Card Required
						</Text>
					</Flex>
				</Flex>
				<center>
					<Box mt={'3em'}>
						<AspectRatio maxW={'65em'} ratio={16 / 9}>
							<iframe
								title="introduction"
								src="https://player.vimeo.com/video/848412865"
							/>
						</AspectRatio>
					</Box>
				</center>

				<Box mt={'2em'}>
					<Flex direction={'column'} alignItems={'center'}>
						<Text textAlign={'center'} fontSize={'4em'} fontWeight={500}>
							What is Cody?
						</Text>
						<Text
							w={'35em'}
							textAlign={'center'}
							fontSize={'1.5em'}
							mx={'0.25em'}
							textColor={'rgb(170,172,186)'}
						>
							Cody is an intelligent AI assistant like ChatGPT – with the added
							benefit of being able to train it on your business, your team,
							your processes, and your clients with your own knowledge base. Use
							Cody as an employee to support your team, answer questions, help
							with creative work, troubleshoot issues, and brainstorm ideas.
						</Text>
						<Flex
							mt={'2.5em'}
							direction={'column'}
							gap={'1.5em'}
							alignItems={'center'}
						>
							<Button
								borderRadius={100}
								h={'4em'}
								borderColor={'var(--wp--preset--color--pale-pink)'}
								_hover={{ borderColor: 'var(--wp--preset--color--pale-pink)' }}
							>
								<Box display={'flex'} gap={'0.5em'} mx={'1em'}>
									<Image src="https://meetcody.ai/wp-content/uploads/2023/05/cross-icon.svg" />
									<Text fontSize={'1.5em'}>No keyword Searches</Text>
								</Box>
							</Button>
							<Button
								borderRadius={100}
								h={'4em'}
								borderColor={'var(--wp--preset--color--pale-pink)'}
								_hover={{ borderColor: 'var(--wp--preset--color--pale-pink)' }}
							>
								<Box display={'flex'} gap={'0.5em'} mx={'1em'}>
									<Image src="https://meetcody.ai/wp-content/uploads/2023/05/cross-icon.svg" />
									<Text fontSize={'1.5em'}>No Regurgitated Answers</Text>
								</Box>
							</Button>
							<Button
								borderRadius={100}
								h={'4em'}
								borderColor={'var(--wp--preset--color--pale-pink)'}
								_hover={{ borderColor: 'var(--wp--preset--color--pale-pink)' }}
							>
								<Box display={'flex'} gap={'0.5em'} mx={'1em'}>
									<Image src="https://meetcody.ai/wp-content/uploads/2023/05/cross-icon.svg" />
									<Text fontSize={'1.5em'}>
										No Need to Give Context Every Time
									</Text>
								</Box>
							</Button>
						</Flex>
					</Flex>	
				</Box>
				<Stack>
				<Flex
					mt={'9em'}
					direction={'column'}
					borderRadius={'1em'}
					bg={'rgb(32,33,61)'}
					w={'full'}
					textAlign={'center'}
					alignItems={'center'}
				>
					<Text mt={'1em'} fontSize={'3.5em'} fontWeight={500}>What can Cody do?</Text>
					<Flex ml={'3em'} gap={'3em'} mt={'7em'}>
						<Flex gap={5} direction={'column'} w={387} h={363} alignItems={'center'}>
							<Image boxSize={'5em'} src='https://meetcody.ai/wp-content/uploads/2023/05/home-section_3-icon_1.svg'/>
							<Text fontSize={20} fontWeight={700}>Instant Answers To Your Business Questions</Text>
							<Text >No need to track down manuals or sift through endless documents. Cody analyzes all accumulated documents and acts as an expert on all your company processes to provide the answer you need in seconds.</Text>
						</Flex>
						<Flex gap={5} direction={'column'} w={387} h={363} alignItems={'center'}>
							<Image boxSize={'5em'} src='https://meetcody.ai/wp-content/uploads/2023/05/home-section_3-icon_2.svg'/>
							<Text fontSize={20} fontWeight={700}>Upload Any Data & Build Your Knowledge Base</Text>
							<Text >Securely upload anything from PowerPoints to PDFs or crawl an entire website to instantly integrate information and customize Cody for your company. Cody will search your database and use it to craft an intelligent responses.</Text>
						</Flex>
						<Flex gap={5} direction={'column'} w={387} h={363} alignItems={'center'}>
							<Image boxSize={'5em'} src='https://meetcody.ai/wp-content/uploads/2023/05/home-section_3-icon_3.svg'/>
							<Text fontSize={20} fontWeight={700}>Provide Sources For Every Answer</Text>
							<Text >For added peace of mind, you can check Cody’s work. Whether it’s from one source or multiple sources, Cody provides the sources used to come up with every answer.</Text>
						</Flex>
					</Flex>
					<Divider/>
					<Flex ml={'3em'} gap={'3em'} >
						<Flex gap={5} direction={'column'} w={387} h={363} alignItems={'center'}>
							<Image boxSize={'5em'} src='https://meetcody.ai/wp-content/uploads/2023/05/home-section_3-icon_4.svg'/>
							<Text fontSize={20} fontWeight={700}>Boost Employee Efficiency</Text>
							<Text >With instant answers, ideas, and ready-made work, your team can work smarter, not harder. Use Cody to complete tasks faster, like writing professional emails, translating documents, or creating marketing materials.</Text>
						</Flex>
						<Flex gap={5} direction={'column'} w={387} h={363} alignItems={'center'}>
							<Image boxSize={'5em'} src='https://meetcody.ai/wp-content/uploads/2023/05/home-section_3-icon_5.svg'/>
							<Text fontSize={20} fontWeight={700}>Provide Support & Troubleshoot Issues</Text>
							<Text >Not making full use of your digital tools? Can’t get the sound to work on Zoom? Cody uses support documentation to help your team quickly troubleshoot any issues and discover hidden features.</Text>
						</Flex>
						<Flex gap={5} direction={'column'} w={387} h={363} alignItems={'center'}>
							<Image boxSize={'5em'} src='https://meetcody.ai/wp-content/uploads/2023/05/home-section_3-icon_6.svg'/>
							<Text fontSize={20} fontWeight={700}>IBrainstorm Ideas & Give Suggestions</Text>
							<Text >If you’re not sure where to start, you can use Cody to bring new perspectives and insights to the table. Because Cody remembers conversations and contextual history, it can give ideas and advice.</Text>
						</Flex>
					</Flex>
				</Flex>
				</Stack>
				<Stack>
					<Flex direction={'column'} justifyContent={'center'} alignItems={'center'}>
					<Text mt={'1em'} fontSize={'3.5em'} fontWeight={500}>How It Works</Text>
					<Flex>
						<Box w={644} h={563} >
							<Flex mt={'2.5em'}
							direction={'column'}
							gap={'1.5em'}
							alignItems={'center'}>
							<Button
								onClick={handleTeach}
								w={'36em'}
								rightIcon={<ArrowForwardIcon/>}
								borderRadius={100}
								h={'4em'}
								borderColor={'var(--wp--preset--color--pale-pink)'}
								_hover={{ borderColor: 'var(--wp--preset--color--pale-pink)' }}
								justifyContent={'space-around'}
							>
								<Box display={'flex'} gap={'0.5em'} mx={'1em'}>
									<Image boxSize={30} src="https://meetcody.ai/wp-content/uploads/2023/12/home-section_4-icon_1.svg" />
									<Text fontSize={'1.5em'}>Teach It What Needs To Know</Text>
								</Box>
							</Button>
							<Button
								onClick={handleCustomize}
								w={'36em'}
								rightIcon={<ArrowForwardIcon/>}
								borderRadius={100}
								h={'4em'}
								borderColor={'var(--wp--preset--color--pale-pink)'}
								_hover={{ borderColor: 'var(--wp--preset--color--pale-pink)' }}
								justifyContent={'space-around'}
							>
								<Box display={'flex'} gap={'0.5em'} mx={'1em'}>
									<Image boxSize={30} src="https://meetcody.ai/wp-content/uploads/2023/12/home-section_4-icon_2.svg" />
									<Text fontSize={'1.5em'}>Customize Cody For Different Uses</Text>
								</Box>
							</Button>
							<Button
								onClick={handleShare}
								w={'36em'}
								rightIcon={<ArrowForwardIcon/>}
								borderRadius={100}
								h={'4em'}
								borderColor={'var(--wp--preset--color--pale-pink)'}
								_hover={{ borderColor: 'var(--wp--preset--color--pale-pink)' }}
								justifyContent={'space-around'}
							>
								<Box display={'flex'} gap={'0.5em'} mx={'1em'}>
									<Image boxSize={30} src="https://meetcody.ai/wp-content/uploads/2023/12/home-section_4-icon_3.svg" />
									<Text fontSize={'1.5em'}>Share Cody with Your Team or Customers</Text>
								</Box>
							</Button>
							<Button
								onClick={handleAsk}
								w={'36em'}
								rightIcon={<ArrowForwardIcon/>}
								borderRadius={100}
								h={'4em'}
								borderColor={'var(--wp--preset--color--pale-pink)'}
								_hover={{ borderColor: 'var(--wp--preset--color--pale-pink)' }}
								
							>
								<Box display={'flex'} gap={'0.5em'} mx={'1em'}>
									<Image boxSize={30} src="https://meetcody.ai/wp-content/uploads/2023/12/home-section_4-icon_4.svg" />
									<Text fontSize={'1.5em'}>Ask Cody</Text>
								</Box>
							</Button>
							</Flex>
						</Box>
						<Flex direction={'column'} textAlign={'center'} justifyContent={'center'} alignItems={'center'} w={644} h={563}>
							<Box w={590} h={456} borderRadius={20}>
								<Image src={images}/>
							</Box>
							<Text>{text}</Text>
						</Flex>
					</Flex>
					</Flex>
				</Stack>
				<Stack w={'100vw'} h={'80vh'}>
					<Flex direction={'column'} justifyContent={'center'} alignItems={'center'}>

					<Text fontSize={'4em'} >Works in Every Language</Text>
					<Text mb={'6em'} mt={'3em'}>Build and interact with your information in any language, empowering users to connect and collaborate globally.</Text>
					<Flex gap={6} justifyContent={'center'}>  
						<Image boxSize={70} src='https://meetcody.ai/wp-content/uploads/2023/06/home-section_5-icon_1.svg'/>
						<Image boxSize={70} src='https://meetcody.ai/wp-content/uploads/2023/06/home-section_5-icon_2.svg'/>
						<Image boxSize={70} src='https://meetcody.ai/wp-content/uploads/2023/06/home-section_5-icon_3.svg'/>
						<Image boxSize={70} src='https://meetcody.ai/wp-content/uploads/2023/06/home-section_5-icon_4.svg'/>
						<Image boxSize={70} src='https://meetcody.ai/wp-content/uploads/2023/06/home-section_5-icon_5.svg'/>
						<Image boxSize={70} src='https://meetcody.ai/wp-content/uploads/2023/06/home-section_5-icon_6.svg'/>
						<Image boxSize={70} src='https://meetcody.ai/wp-content/uploads/2023/06/home-section_5-icon_7.svg'/>
						<Image boxSize={70} src='https://meetcody.ai/wp-content/uploads/2023/06/home-section_5-icon_8.svg'/>
						<Image boxSize={70} src='https://meetcody.ai/wp-content/uploads/2023/06/home-section_5-icon_9.svg'/>
						<Image boxSize={70} src='https://meetcody.ai/wp-content/uploads/2023/06/home-section_5-icon_10.svg'/>
						<Image boxSize={70} src='https://meetcody.ai/wp-content/uploads/2023/06/home-section_5-icon_11.svg'/>
						<Image boxSize={70} src='https://meetcody.ai/wp-content/uploads/2023/06/home-section_5-icon_12.svg'/>
						<Image boxSize={70} src='https://meetcody.ai/wp-content/uploads/2023/06/home-section_5-icon_13.svg'/>
					</Flex>
					</Flex>
				</Stack>
				<Stack w={'100vw'}>
					<Box borderRadius={'1em'} bgColor={'rgb(31,32,61)'}>
						<Flex direction={'column'} alignItems={'center'} justifyContent={'center'}>
							<Text mt={'1em'} fontSize={'3em'} fontWeight={600} >Integrate With Your Favorite Tools</Text>
							<Text mt={'3em'}>Incorporate Cody into your favorite apps through our powerful API, allowing you to harness the full potential of your knowledge anywhere.</Text>
							<Flex mt={'7em'}>
								<Box w={418} h={476} >
									<Flex direction={'column'}>
										<Flex justifyContent={'space-around'}> 
											<Flex direction={'column'} alignItems={'center'} gap={3}>
												<Image src='https://meetcody.ai/wp-content/uploads/2023/05/home-section_5-icon_1-updated.png'/>
												<Text fontSize={'1.5em'}>PPT</Text>
											</Flex>
											<Flex direction={'column'} alignItems={'center'} gap={3}>
												<Image src='https://meetcody.ai/wp-content/uploads/2023/05/home-section_5-icon_4-updated.png'/>
												<Text fontSize={'1.5em'}>DocX</Text>
											</Flex>
										</Flex>
										<Flex direction={'column'} alignItems={'center'} justifyContent={'center'}>
											<Image src='https://meetcody.ai/wp-content/uploads/2023/05/home-section_5-icon_5-updated.png'/>
											<Text fontSize={'1.5em'}>Website</Text>
										</Flex>
										
										<Flex justifyContent={'space-around'}> 
											<Flex direction={'column'} alignItems={'center'} gap={3}>
												<Image src='https://meetcody.ai/wp-content/uploads/2023/05/home-section_5-icon_2-updated.png'/>
												<Text fontSize={'1.5em'}>Media</Text>
											</Flex>
											<Flex direction={'column'} alignItems={'center'} gap={3}>
												<Image src='https://meetcody.ai/wp-content/uploads/2023/08/pdf-active.png'/>
												<Text fontSize={'1.5em'}>PDF</Text>
											</Flex>
										</Flex>
									</Flex>
								</Box>
								<Box w={418} h={476} >
									<Flex mt={'5em'} justifyContent={'center'}  alignItems={'center'}>
									<Image src='https://meetcody.ai/wp-content/uploads/2023/04/home-section_5-icon_11-updated.png'/>
									</Flex>
								</Box>

								<Box w={418} h={476} >
									<Flex direction={'column'}>
										<Flex justifyContent={'space-around'}> 
											<Flex direction={'column'} alignItems={'center'} gap={3}>
												<Image src='https://meetcody.ai/wp-content/uploads/2023/05/home-section_5-icon_1-updated.png'/>
												<Text fontSize={'1.5em'}>PPT</Text>
											</Flex>
											<Flex direction={'column'} alignItems={'center'} gap={3}>
												<Image src='https://meetcody.ai/wp-content/uploads/2023/05/home-section_5-icon_4-updated.png'/>
												<Text fontSize={'1.5em'}>DocX</Text>
											</Flex>
										</Flex>
										<Flex direction={'column'} alignItems={'center'} justifyContent={'center'}>
											<Image src='https://meetcody.ai/wp-content/uploads/2023/05/home-section_5-icon_5-updated.png'/>
											<Text fontSize={'1.5em'}>Website</Text>
										</Flex>
										
										<Flex justifyContent={'space-around'}> 
											<Flex direction={'column'} alignItems={'center'} gap={3}>
												<Image src='https://meetcody.ai/wp-content/uploads/2023/05/home-section_5-icon_2-updated.png'/>
												<Text fontSize={'1.5em'}>Media</Text>
											</Flex>
											<Flex direction={'column'} alignItems={'center'} gap={3}>
												<Image src='https://meetcody.ai/wp-content/uploads/2023/08/pdf-active.png'/>
												<Text fontSize={'1.5em'}>PDF</Text>
											</Flex>
										</Flex>
									</Flex>
								</Box>
							</Flex>
						</Flex>
					</Box>
				</Stack>
				<Stack w={'100vw'} h={'100vh'}>
					<Flex direction={'column'} justifyContent={'center'} alignItems={'center'} textAlign={'center'}>
						<Text fontSize={'3em'} fontWeight={600} mt={'1em'} >Trusted By Over 100,000 Businesses</Text>
						<Box w={869} h={51}>
						<Text mt={'1em'}>Trust in Cody AI’s unparalleled data protection while utilizing our platform for seamless document storage and collaboration. Experience the perfect balance between uncompromised security and exceptional user experience.</Text>
						</Box>
						<Flex mt={20} gap={5}>
							<Flex direction={'column'} justifyContent={'center'} alignItems={'center'} w={410} h={370} bgColor={'rgb(30,31,59)'} borderRadius={'3em'}>
								<Image boxSize={'5em'} src='https://meetcody.ai/wp-content/uploads/2023/05/home-section_3-icon_1.svg'/>
								<Text mt={3} fontSize={'1.5em'} fontWeight={600}>Advanced Data Defense</Text>
								<Text mt={4} mx={4}>Safeguard your data with Cody AI’s robust AWS encryption and SOC II vector database privacy standards. Delight in a secure environment that places your privacy first without sacrificing efficiency and flexibility.</Text>
							</Flex>
							<Flex direction={'column'} justifyContent={'center'} alignItems={'center'} w={410} h={370} bgColor={'rgb(30,31,59)'} borderRadius={'3em'}>
								<Image  boxSize={'5em'} src='https://meetcody.ai/wp-content/uploads/2023/05/home-section_3-icon_2.svg'/>
								<Text mt={3} fontSize={'1.5em'} fontWeight={600}>Customizable Access Controls</Text>
								<Text mt={4} mx={4}>Maintain absolute control over your data with Cody AI’s permission enforcement. Our platform grants access on a per-chatbot basis, ensuring that users can only access the information they’re authorized to view, with real-time permission updates.</Text>
							</Flex>
							<Flex direction={'column'} justifyContent={'center'} alignItems={'center'} w={410} h={370} bgColor={'rgb(30,31,59)'} borderRadius={'3em'}>
								<Image boxSize={'5em'} src='https://meetcody.ai/wp-content/uploads/2023/05/home-section_3-icon_3.svg'/>
								<Text mt={3} fontSize={'1.5em'} fontWeight={600}>Unwavering Commitment to Security</Text>
								<Text mt={4} mx={5}>Rest easy knowing that your data is in capable hands. We adhere to stringent third-party security standards and continuously work on enhancing our measures to provide exceptional protection tailored to your needs.</Text>
							</Flex>
						</Flex>
					</Flex>
				</Stack>
			</Stack>
			<FooterComponents/>
		</>
	);
};

export default HeroPage;
