import { Text, VStack, Heading, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <VStack justifyContent={"center"} minHeight={"100vh"}>
      <Heading>Page Not Found</Heading>
      <Text>It seems that you are lost</Text>
      <Link to="/">
        <Button variant={"link"} colorScheme={"red"}>
          Go home &rarr;
        </Button>
      </Link>
    </VStack>
  );
}
