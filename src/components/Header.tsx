import { useRef } from "react";
import {
  Avatar,
  Box,
  Button,
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  ToastId,
  useColorMode,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { FaCampground, FaSun, FaMoon } from "react-icons/fa";
import { logOut } from "../api";
import useUser from "../lib/useUser";
import LoginModal from "./LoginModal";
import SignUpModal from "./SignUpModal";
import { Link } from "react-router-dom";

export default function Header() {
  const { userLoading, isLoggedIn, user } = useUser();
  const { colorMode, toggleColorMode } = useColorMode();
  const {
    onOpen: onLoginOpen,
    isOpen: isLoginOpen,
    onClose: onLoginClose,
  } = useDisclosure();
  const {
    onOpen: onSignupOpen,
    isOpen: isSignupOpen,
    onClose: onSignupClose,
  } = useDisclosure();
  const toast = useToast();
  const queryClient = useQueryClient();
  const toastId = useRef<ToastId>();
  const mutation = useMutation(logOut, {
    onMutate: () => {
      toastId.current = toast({
        title: "굿바이~",
        description: "다음에 만나요.",
        status: "loading",
      });
    },
    onSuccess: () => {
      if (toastId.current) {
        queryClient.refetchQueries(["me"]);
        toast.update(toastId.current, {
          title: "Done",
          status: "success",
          description: "See you later",
        });
      }
    },
  });
  const onLogOut = async () => {
    mutation.mutate();
  };

  return (
    <Stack
      justifyContent={"space-between"}
      alignItems="center"
      py={5}
      px={40}
      spacing={{
        sm: 4,
        md: 0,
      }}
      direction={{
        sm: "column",
        md: "row",
      }}
      borderBottomWidth={1}
    >
      <Box color="green.500">
        <FaCampground size={40} />
      </Box>
      <HStack spacing={2}>
        <IconButton
          onClick={toggleColorMode}
          variant={"ghost"}
          aria-label="Toggle Dark Mode"
          icon={colorMode === "light" ? <FaMoon /> : <FaSun />}
        />
        {!userLoading ? (
          !isLoggedIn ? (
            <>
              <Button onClick={onLoginOpen}>로그인</Button>
              <Button onClick={onSignupOpen} colorScheme={"green"}>
                회원가입
              </Button>
            </>
          ) : (
            <Menu>
              <MenuButton>
                <Avatar name={user.name} src={user.avatar} size={"md"} />
              </MenuButton>
              <MenuList>
                {user?.is_host ? (
                  <Link to="/rooms/upload">
                    <MenuItem>캠핑부지등록</MenuItem>
                  </Link>
                ) : null}
                <MenuItem onClick={onLogOut}>로그아웃</MenuItem>
              </MenuList>
            </Menu>
          )
        ) : null}
      </HStack>
      <LoginModal isOpen={isLoginOpen} onClose={onLoginClose} />
      <SignUpModal isOpen={isSignupOpen} onClose={onSignupClose} />
    </Stack>
  );
}
