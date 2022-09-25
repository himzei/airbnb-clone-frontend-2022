import {
  Box,
  Button,
  HStack,
  IconButton,
  useColorMode,
  useDisclosure,
} from "@chakra-ui/react";
import { FaCampground, FaSun, FaMoon } from "react-icons/fa";
import LoginModal from "./LoginModal";
import SignUpModal from "./SignUpModal";

export default function Header() {
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
  return (
    <HStack
      justifyContent={"space-between"}
      py={5}
      px={10}
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
        <Button onClick={onLoginOpen}>로그인</Button>
        <Button onClick={onSignupOpen} colorScheme={"green"}>
          회원가입
        </Button>
      </HStack>
      <LoginModal isOpen={isLoginOpen} onClose={onLoginClose} />
      <SignUpModal isOpen={isSignupOpen} onClose={onSignupClose} />
    </HStack>
  );
}