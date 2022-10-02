import { useEffect } from "react";
import { Heading, VStack, Text, Spinner, useToast } from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router-dom";

import { useQueryClient } from "@tanstack/react-query";
import { kakaoLogin } from "../api";

export default function KakaoConfirm() {
  const { search } = useLocation();
  const toast = useToast();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const confirmLogin = async () => {
    const params = new URLSearchParams(search);
    const code = params.get("code");

    if (code) {
      const status = await kakaoLogin(code);
      if (status === 200) {
        toast({
          status: "success",
          title: "welcome",
          description: "Happy to have you back",
        });
        queryClient.refetchQueries(["me"]);
        navigate("/");
      }
    }
  };
  useEffect(() => {
    confirmLogin();
  }, []);
  return (
    <VStack justifyContent={"center"} mt={40}>
      <Heading>진행 중입니다....</Heading>
      <Text>페이지를 벗어나지 마세요!</Text>
      <Spinner size="lg" />
    </VStack>
  );
}
