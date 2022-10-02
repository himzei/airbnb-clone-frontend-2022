import {
  Box,
  Checkbox,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputLeftAddon,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { FaBed, FaToilet } from "react-icons/fa";
import useHostOnlyPage from "../components/HostOnlyPage";
import ProtectedPage from "../components/ProtectedPage";

export default function UploadRoom() {
  useHostOnlyPage();
  return (
    <ProtectedPage>
      <Box
        pb={40}
        mt={10}
        px={{
          base: 10,
          lg: 40,
        }}
      >
        <Heading textAlign={"center"}>정박지 등록하기</Heading>
        <VStack spacing={5} as="form" mt={5}>
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input type="text" />
            <FormHelperText>등록할 사이트의 이름을 적어주세요.</FormHelperText>
          </FormControl>
          <FormControl>
            <FormLabel>지역</FormLabel>
            <Input type="text" />
          </FormControl>
          <FormControl>
            <FormLabel>주소</FormLabel>
            <Input type="text" />
          </FormControl>
          <FormControl>
            <FormLabel>가격</FormLabel>
            <InputGroup>
              <InputLeftAddon children="₩" />
              <Input type="number" min={0} />
            </InputGroup>
          </FormControl>
          <FormControl>
            <FormLabel>Toilet</FormLabel>
            <InputGroup>
              <InputLeftAddon children={<FaToilet />} />
              <Input type="number" min={0} />
            </InputGroup>
          </FormControl>
          <FormControl>
            <FormLabel>Toilet</FormLabel>
            <InputGroup>
              <InputLeftAddon children={<FaBed />} />
              <Input type="number" min={0} />
            </InputGroup>
          </FormControl>
          <FormControl>
            <FormLabel>Description</FormLabel>
            <Textarea />
          </FormControl>
          <FormControl>
            <Checkbox>Pet friendly</Checkbox>
          </FormControl>
          <FormControl>
            <FormLabel>Kink of Room </FormLabel>
            <Select placeholder="Choose a kind">
              <option value="entire_place">Entire Place</option>
              <option value="private_room">Private Place</option>
              <option value="shared_room">Shared Room</option>
            </Select>
            <FormHelperText>What kind of room are you select</FormHelperText>
          </FormControl>
        </VStack>
      </Box>
    </ProtectedPage>
  );
}
