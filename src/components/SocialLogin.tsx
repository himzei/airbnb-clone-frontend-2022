import { Box, Button, Divider, HStack, Text, VStack } from "@chakra-ui/react";
import { AiFillGoogleSquare } from "react-icons/ai";
import { SiKakaotalk, SiNaver } from "react-icons/si";

interface SocialLoginProps {
  btnText: string;
}

export default function SocialLogin({ btnText }: SocialLoginProps) {
  return (
    <Box mb={4}>
      <HStack my={4}>
        <Divider />
        <Text color={"gray.400"} fontSize={"xs"}>
          OR
        </Text>
        <Divider />
      </HStack>
      <VStack>
        <Button w="100%" leftIcon={<SiKakaotalk />} colorScheme={"yellow"}>
          카카오로 {btnText}
        </Button>
        <Button
          w="100%"
          variant={"outline"}
          leftIcon={<SiNaver />}
          colorScheme={"green"}
        >
          네이버로 {btnText}
        </Button>
        <Button
          w="100%"
          leftIcon={<AiFillGoogleSquare size={22} />}
          colorScheme={"blue"}
        >
          Google {btnText}
        </Button>
      </VStack>
    </Box>
  );
}
