import { Component } from "react";
import logo from '../public/templogo.png'
import {
    Box,
    Button,
    ButtonGroup,
    Container,
    Flex,
    HStack,
    IconButton,
    useBreakpointValue,
  } from '@chakra-ui/react'

class NavBar extends Component{
    render(){
        return(
            <Box as="section" pb={{ base: '12', md: '24' }}>
            <Box as="nav" bg="bg-surface" boxShadow="sm">
            <Container py={{ base: '4', lg: '5' }}>
            <HStack spacing="10" justify="space-between">
                <img src={logo}/>
              <Flex justify="space-between" flex="1">
                <ButtonGroup variant="link" spacing="8">
                  {['Product', 'Pricing', 'Resources', 'Support'].map((item) => (
                    <Button key={item}>{item}</Button>
                  ))}
                </ButtonGroup>
                <HStack spacing="3">
                  <Button variant="ghost">Sign in</Button>
                  <Button variant="primary">Sign up</Button>
                </HStack>
              </Flex>
          </HStack>
        </Container>
      </Box>
    </Box>
        )
    }
}

export default NavBar;