/* eslint-disable no-unused-vars */
import { Box, Circle, Flex, Icon, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { BsTwitterX } from 'react-icons/bs';
import { FaDiscord } from 'react-icons/fa6';

const FooterComponents = () => {
	return (
		<Stack >
			<Flex direction={{base: 'column', lg: 'row'}} justifyContent={'space-evenly'}>
				<Flex mt={{base: '5em', lg:'0em'}} direction={'column'} justifyContent={'center'} alignItems={'center'}>
					<Box ml={'2em'}>
						<Link href="/">
							<Image
								width={'200PX'}
								src="https://meetcody.ai/wp-content/themes/cody_v1/assets/images/logo.svg"
							/>
						</Link>
					</Box>
					<Flex gap={'0.5em'} justifyContent={'center'} alignItems={'center'}>
						<Box mt={'4em'}>
							<Link href="/">
								<Circle size={'3em'} bgColor={'white'} color={'blue'}>
									<Icon as={BsTwitterX} />
								</Circle>
							</Link>
						</Box>
						<Box mt={'4em'}>
							<Link href="/">
								<Circle size={'3em'} bgColor={'white'} color={'blue'}>
									<Icon as={FaDiscord} />
								</Circle>
							</Link>
						</Box>
					</Flex>
				</Flex>
        <Flex ml={'20em'} justifyContent={'start'} textAlign={'start'} direction={'column'} w={420} h={283}>
          <Text mt={{base:'1em', lg: '0em'}} fontSize={'1.75em'} fontWeight={600} mb={5}>Support</Text>
          <NavLink to={'/'}>Help</NavLink>
          <NavLink to={'/'}>Use Cases</NavLink>
          <NavLink to={'/'}>AI for Slack</NavLink>
          <NavLink to={'/'}>Ai for Discord</NavLink>
          <NavLink to={'/'}>API</NavLink>
          <NavLink to={'/'}>Our Blog</NavLink>
          <NavLink to={'/'}>Community</NavLink>
          <NavLink to={'/'}>Merketing</NavLink>
        </Flex>
        <Flex justifyContent={'start'} textAlign={'start'} direction={'column'} ml={{base: '20em', lg: '10em'}} mt={{base:'1em', lg: '0em'}} w={420} h={283}>
          <Text fontSize={'1.75em'} fontWeight={600} mb={5}>About</Text>
          <NavLink to={'/'}>Enterprise</NavLink>
          <NavLink to={'/'}>Affiliates</NavLink>
          <NavLink to={'/'}>Terms & Conditions</NavLink>
          <NavLink to={'/'}>Privacy Policy</NavLink>
          <NavLink to={'/'}>Pricing</NavLink>
          <NavLink to={'/'}>Log In</NavLink>
          <NavLink to={'/'}>Sign Up</NavLink>
        </Flex>
        
        </Flex>
		</Stack>
	);
};

export default FooterComponents;