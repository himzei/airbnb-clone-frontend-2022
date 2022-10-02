import { Box, Button, Divider, HStack, Text, VStack } from "@chakra-ui/react";
import { AiFillGoogleSquare } from "react-icons/ai";
import { SiKakaotalk, SiNaver, SiGithub } from "react-icons/si";

interface SocialLoginProps {
  btnText: string;
}

export default function SocialLogin({ btnText }: SocialLoginProps) {
  const kakaoParams = {
    client_id: "a67156e32fe491374477fab0710432f6",
    redirect_uri: "http://127.0.0.1:3000/social/kakao",
    response_type: "code",
  };
  const params = new URLSearchParams(kakaoParams).toString();
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
        <Button
          as="a"
          href="https://github.com/login/oauth/authorize?client_id=0e7cf626f2d15f28509f&scope=read:user,user:email"
          w="100%"
          leftIcon={<SiGithub />}
        >
          Github {btnText}
        </Button>
        <Button
          as="a"
          href={`https://kauth.kakao.com/oauth/authorize?${params}`}
          w="100%"
          leftIcon={<SiKakaotalk />}
          colorScheme={"yellow"}
        >
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
