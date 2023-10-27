import {
  Box,
  HStack,
  Heading,
  Text,
  Icon,
  Spacer,
  Link,
  Show,
  Stack,
} from "@chakra-ui/react";
import { BiSolidCircle } from "react-icons/bi";
import styles from "./Footer.module.css";
import resume from "../../../public/Shaun Tan Wei Jie.pdf";

const Footer = () => {
  return (
    <>
      <Box
        as="footer"
        id="footer"
        px={{ base: "20px", md: "30px", lg: "45px", xl: "60px" }}
        pb="30px"
      >
        <Box w="100%" my={2}>
          <Heading
            color="#ddd4d4"
            fontSize={{ base: "22px", lg: "40px" }}
            fontWeight="semibold"
          >
            Interested in Hiring Me?
          </Heading>
        </Box>
        <Stack
          w="100%"
          justifyContent="space-between"
          direction={{ base: "column", md: "row" }}
        >
          <Stack
            direction={{ base: "column", md: "row" }}
            alignItems={{ base: "start", md: "center" }}
          >
            <a href="mailto:shauntanwj10@gmail.com" target="_blank">
              <Text
                className={styles.link}
                textColor="#ddd4d4"
                fontSize={{ lg: "20px" }}
                cursor="pointer"
              >
                shauntanwj10@gmail.com
              </Text>
            </a>
            <Show above="lg">
              <Icon as={BiSolidCircle} color="gray.400" boxSize={1.5} />
            </Show>
            <Text textColor="#ddd4d4" fontSize={{ lg: "20px" }}>
              60149681255
            </Text>
          </Stack>
          <Show above="lg">
            <Spacer />
          </Show>
          <HStack>
            <Link
              className={styles.link}
              fontSize={{ lg: "20px" }}
              href={resume}
              isExternal={true}
              color="#ddd4d4"
            >
              Resume
            </Link>
            <Icon as={BiSolidCircle} color="gray.400" boxSize={1.5} />
            <Link
              className={styles.link}
              fontSize={{ lg: "20px" }}
              href="https://github.com/shauntanwj"
              isExternal={true}
              color="#ddd4d4"
            >
              Github
            </Link>
            <Icon as={BiSolidCircle} color="gray.400" boxSize={1.5} />
            <Link
              className={styles.link}
              fontSize={{ lg: "20px" }}
              href="https://www.linkedin.com/in/shauntan0410"
              isExternal={true}
              color="#ddd4d4"
            >
              LinkedIn
            </Link>
          </HStack>
        </Stack>
      </Box>
    </>
  );
};

export default Footer;
