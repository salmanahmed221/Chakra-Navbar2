"use client";
import {
  Box,
  Heading,
  Text,
  Flex,
  HStack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

export default function Navbar() {
  return (
    <>
      <Box w="1400px" bg="black">
        <Flex>
          <Box color="white">
            <Heading ml="100px">Company</Heading>
          </Box>

          <Box color="white" ml="150px" mt="10px">
            <HStack spacing="100px">
              <Text>Home</Text>
              <Text>About</Text>
              <Menu>
                <MenuButton
                  as={Button}
                  rightIcon={<ChevronDownIcon />}
                  bg="black"
                >
                  Gallery
                </MenuButton>
                <MenuList>
                  <MenuItem bg="black">2019</MenuItem>
                  <MenuItem bg="black">2018</MenuItem>
                  <MenuItem bg="black">2017</MenuItem>
                </MenuList>
              </Menu>

              <Text>Contact</Text>
              <Menu>
                <MenuButton
                  as={Button}
                  rightIcon={<ChevronDownIcon />}
                  bg="black"
                >
                  Others
                </MenuButton>
                <MenuList>
                  <MenuItem bg="black">Register</MenuItem>
                  <MenuItem bg="black">Sign In</MenuItem>
                </MenuList>
              </Menu>
            </HStack>
          </Box>
        </Flex>
      </Box>
    </>
  );
}
