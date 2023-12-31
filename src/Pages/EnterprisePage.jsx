// eslint-disable-next-line no-unused-vars
import {
	Box,
	Button,
	Flex,
	Image,
	Input,
	SimpleGrid,
	Stack,
	Text,
  Textarea,
} from '@chakra-ui/react';
import NavBar from '../Components/HeaderComponents';
import { motion } from 'framer-motion';
import FooterComponents from '../Components/FooterComponents';


const EnterprisePage = () => {
	const MotionBox = motion(Box);
	return (
		<>
			<NavBar />
			<Stack w={'98vw'} mb={'5em'} bgColor={'rgb(18,19,36)'}>
				<Flex justifyContent={'center'} alignItems={'Center'}>
					<Flex
						mt={20}
						w={{base: 600,lg:869}}
						h={181}
						justifyContent={'center'}
						direction={'column'}
					>
						<Flex
							direction={'row'}
							justifyContent={'center'}
							alignItems={'center'}
              textAlign={'center'}
						>
							<Text
								bgGradient="linear(to-l, #7928CA, #FF0080)"
								bgClip="text"
								fontSize="4.5em"
								fontWeight="bold"
							>
								Enterprise AI Solutions
							</Text>
						</Flex>
						<Text textAlign={'center'}>
            Unlock the potential of advanced AI technologies to transform your business with our comprehensive Enterprise AI Solutions at Cody AI. Imagine being able to build almost any digital asset just by providing prompts in natural language. Large Language Models (LLMs) like Falcon, Llama 2, Claud 2, GPT-4, and PaLM have demonstrated impressive performance on such tasks, enabling human-like intelligent solutions that are platform-agnostic, customizable, and prioritize data privacy with added role-based security. By leveraging denoising cutting-edge AI technologies, we can help your business achieve unparalleled levels of efficiency and innovation.
						</Text>
					</Flex>
				</Flex>
				<Flex ml={5} mt={'5em'} direction={'row'} justifyContent={'center'}>
					<SimpleGrid columns={{ base: 1, lg: 3 }} spacing={5}>
						<Box
							display={'flex'}
							flexDirection={'column'}
							justifyContent={'center'}
							mr={3}
							borderRadius={40}
							h={553}
						>
							<Image
								boxSize={'6em'}
								src="https://meetcody.ai/wp-content/uploads/2023/05/enterprise-section_1-img_1-updated.svg"
							/>
							<Text fontSize={'1.5em'} fontWeight={600} mt={5}>
								Enhanced Efficiency and Productivity
							</Text>
							<Text textAlign={'start'} mt={5} h={127} w={424}>
								Cody AI’s solutions boost efficiency and productivity by
								automating tasks and streamlining processes. Our AI models
								analyze data, generate insights, and provide recommendations,
								allowing your team to focus on strategic initiatives.
							</Text>
							<Flex
								mt={'2em'}
								direction={'column'}
								justifyContent={'center'}
								alignItems={'center'}
								textColor={'white'}
							></Flex>
						</Box>
						<Box
							display={'flex'}
							flexDirection={'column'}
							justifyContent={'center'}
							mr={3}
							borderRadius={40}
							h={553}
						>
							<Image
								boxSize={'6em'}
								src="https://meetcody.ai/wp-content/uploads/2023/05/enterprise-section_1-img_2-updated.svg"
							/>
							<Text fontSize={'1.5em'} fontWeight={600} mt={5}>
								Customized AI Solutions for Unique Enterprise Needs
							</Text>
							<Text textAlign={'start'} mt={5} h={127} w={424}>
								We provide tailored AI models and solutions that address your
								specific business needs and integrate seamlessly into your
								existing systems. Our collaboration ensures that our AI
								solutions adapt to your evolving enterprise landscape.
							</Text>
							<Flex
								mt={'2em'}
								direction={'column'}
								justifyContent={'center'}
								alignItems={'center'}
								textColor={'white'}
							></Flex>
						</Box>
						<Box
							display={'flex'}
							flexDirection={'column'}
							justifyContent={'center'}
							mr={3}
							borderRadius={40}
							h={553}
						>
							<Image
								boxSize={'6em'}
								src="https://meetcody.ai/wp-content/uploads/2023/05/home-section_3-icon_1.svg"
							/>
							<Text fontSize={'1.5em'} fontWeight={600} mt={5} >
								Expertise and Support Throughout the AI Journey
							</Text>
							<Text textAlign={'start'} mt={5} h={127} w={424}>
								Our end-to-end enterprise AI solutions include consulting,
								development, testing, automation, deployment, and scaling. Our
								team of AI experts also offers training and best practice
								implementation to help your team effectively utilize AI
								technologies and stay competitive.
							</Text>
							<Flex
								mt={'2em'}
								direction={'column'}
								justifyContent={'center'}
								alignItems={'center'}
								textColor={'white'}
							></Flex>
						</Box>
					</SimpleGrid>
				</Flex>
					<Box w={'98vw'} h={{base: '180vh',lg: '120vh'}} borderRadius={'1em'} bgColor={'rgb(31,32,61)'}>
						<Flex
							direction={'column'}
							alignItems={'center'}
							justifyContent={'center'}
						>
							<Text mt={'1em'} fontSize={'3em'} fontWeight={600} textAlign={'center'}>
								Why Choose Cody AI for Enterprise AI Solutions
							</Text>
							<Text textAlign={'center'} fontSize={'1.25em'} mt={'2em'} w={{base:'30em', lg:'50em'}}>
								Our team of AI experts at Cody AI has extensive experience
								working with over 1,000 businesses and can help your business
								harness the power of advanced AI technologies. We offer:
							</Text>
							<SimpleGrid columns={{base: 1, lg: 2}} mt={'6em'}>
								<Box ml={'2em'} w={629}>
									<Flex direction={'column'}>
										<Flex flexDir={'column'}>
											<Text fontSize={'1.5em'} fontWeight={600}>
												Proven success strategies for enterprises
											</Text>
                      <Text mt={3} fontSize={'1.15em'}>
													We can help you integrate AI models into your existing
													tools and processes to improve productivity and
													collaboration with security at the forefront.
												</Text>
										</Flex>
										<Flex mt={'5em'} flexDir={'column'}>
											<Text fontSize={'1.5em'} fontWeight={600}>
                      Cost-effective solutions
											</Text>
                      <Text mt={3} fontSize={'1.15em'}>
                      We can help you reduce costs associated with using AI models by implementing the right model for the job and optimizing it for individual tasks.
												</Text>
										</Flex>
									</Flex>
								</Box>
								<Box ml={'2em'} w={629}>
									<Flex direction={'column'}>
										<Flex flexDir={'column'}>
											<Text fontSize={'1.5em'} fontWeight={600}>
                      Customized models for improved accuracy
											</Text>
                      <Text mt={3} fontSize={'1.15em'}>
                      Our team can build customized AI models based on your business domain and requirements, either by extending OpenAI models or using pre-trained open-source models.
												</Text>
										</Flex>
										<Flex mt={'5em'} flexDir={'column'}>
											<Text fontSize={'1.5em'} fontWeight={600}>
                      End-to-end AI soultions
											</Text>
                      <Text mt={3} fontSize={'1.15em'}>
                      We provide a full range of enterprise AI solutions, from initial consulting to development, testing, automation, deployment, and scale in an on-premises, multi-cloud, or hybrid environment.
												</Text>
										</Flex>
									</Flex>
								</Box>
							</SimpleGrid>
						</Flex>
					</Box>
					<Box mt={'5em'} w={'98vw'} h={{base: '165vh',lg: '120vh'}} borderRadius={'1em'} bgColor={'rgb(31,32,61)'}>
						<Flex
							direction={'column'}
							alignItems={'center'}
							justifyContent={'center'}
						>
							<Text mt={'1em'} fontSize={'3em'} fontWeight={600} textAlign={'center'}>
              Embark on Your AI Transformation Journey
							</Text>
							<Text textAlign={'center'} mt={'3em'} w={{base: '30em',lg: '40em'}}>
              Contact us today to learn more about our Enterprise AI Solutions at Cody AI
and discover how we can help your business thrive in the age of AI.
							</Text>
              <Flex direction={'column'}>
              <SimpleGrid mt={'5em'} columns={{base: 1, lg:2}}>
              <Box display={'flex'} flexDir={'column'} gap={6}>
                <Input w={629} placeholder='Full Name*' outlineColor={'violet'} borderRadius={30} _placeholder={{ opacity: 1, color: 'white', fontSize: 15, fontWeight: 500 }}/>
                <Input w={629} placeholder='Company Name' outlineColor={'violet'} borderRadius={30} _placeholder={{ opacity: 1, color: 'white', fontSize: 15, fontWeight: 500 }}/>
                <Input w={629} placeholder='Team Size' outlineColor={'violet'} borderRadius={30} _placeholder={{ opacity: 1, color: 'white', fontSize: 15, fontWeight: 500 }}/>
              </Box>
              <Box mt={{bsae: 5, lg: 0}} ml={{lg: 5}} display={'flex'} flexDir={'column'} gap={6}>
                <Input w={629} placeholder='Email*' outlineColor={'violet'} borderRadius={30} _placeholder={{ opacity: 1, color: 'white', fontSize: 15, fontWeight: 500 }}/>
                <Input w={629} placeholder='Company Name' outlineColor={'violet'} borderRadius={30} _placeholder={{ opacity: 1, color: 'white', fontSize: 15, fontWeight: 500 }}/>
                <Input w={629} placeholder='Website' outlineColor={'violet'} borderRadius={30} _placeholder={{ opacity: 1, color: 'white', fontSize: 15, fontWeight: 500 }}/>
              </Box>
              </SimpleGrid>
              <Box mt={5} w={{lg:'80.90em'}} >
              <Textarea h={'10em'} borderRadius={20} borderColor={'violet'} placeholder='Tell us about your use case...' _placeholder={{ opacity: 1, color: 'white', fontSize: 15, fontWeight: 500 }}/>
              </Box>
              <Flex mt={5} justifyContent={'center'}>
              <MotionBox
						as={Button}
						width={'10em'}
						height={'3.5em'}
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

							<Text textColor={'white'} fontSize={'1.25em'} fontWeight={700}>
								Submit
							</Text>
					</MotionBox>
              </Flex>
              </Flex>
						</Flex>
					</Box>
				
			</Stack>
			<FooterComponents />
		</>
	);
};

export default EnterprisePage;
