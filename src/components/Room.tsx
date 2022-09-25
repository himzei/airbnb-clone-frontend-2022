import {
  Box,
  Button,
  Grid,
  HStack,
  Image,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { FaRegHeart, FaStar } from "react-icons/fa";

export default function Room() {
  const gray = useColorModeValue("gray.600", "gray.300");
  return (
    <VStack alignItems={"flex-start"}>
      <Box overflow="hidden" rounded="3xl" position="relative">
        <Image
          minH="240"
          w="100%"
          src="https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
        />
        <Button
          variant={"unstyled"}
          cursor={"pointer"}
          position="absolute"
          top={1}
          right={1}
          display={"flex"}
          justifyContent="center"
          color="white"
        >
          <FaRegHeart size="20px" />
        </Button>
      </Box>
      <Box>
        <Grid gap={2} templateColumns={"6fr 1fr"}>
          <Text as="b" noOfLines={1} fontSize={"md"}>
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </Text>
          <HStack spacing={1}>
            <FaStar size={15} />
            <Text>5.0</Text>
          </HStack>
        </Grid>
        <Text fontSize={"sm"} color={gray}>
          Lorem, ipsum dolor.
        </Text>
      </Box>
      <Text fontSize={"sm"} color={gray}>
        <Text as="b">$72</Text>/night
      </Text>
    </VStack>
  );
}
