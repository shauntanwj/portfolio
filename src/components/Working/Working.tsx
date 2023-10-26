import {
  Box,
  Grid,
  GridItem,
  Heading,
  SimpleGrid,
  Stack,
  Text,
  Image,
  StackDivider,
  UnorderedList,
  ListItem,
  Center,
  VStack,
  HStack,
  Icon,
  Tag,
} from "@chakra-ui/react";
import companyLogo from "../../assets/softskills_1.png";

import { BiSolidCircle } from "react-icons/bi";

const Working = () => {
  return (
    <>
      <Stack
        bg="#131313"
        px={{ base: "20px", lg: "60px" }}
        mb={{ base: 50, lg: 100 }}
        spacing={5}
        divider={<StackDivider borderColor="gray.200" />}
        id="experience"
      >
        <Heading
          pt={10}
          textColor="#ddd4d4"
          fontSize={{ base: "22px", lg: "40px" }}
        >
          Working Experience
        </Heading>

        <Grid
          templateRows={{ sm: "repeat(3, 1fr)", lg: "repeat(2, 1fr)" }}
          templateColumns={{ sm: "repeat(1, 1fr)", lg: "repeat(2, 1fr)" }}
          templateAreas={{
            base: `"logo" "box" "description"`,
            lg: `"logo description" "box description" `,
          }}
          gap={6}
        >
          <GridItem area="logo" rowSpan={1} alignItems="center">
            <Center pt={{ base: 0, lg: 5 }}>
              <Image
                src={companyLogo}
                filter="invert(100%) grayscale(100%) brightness(90%)"
              />
            </Center>
          </GridItem>
          <GridItem area="description" rowSpan={{ sm: 1, lg: 2 }} colSpan={1}>
            <VStack pt={{ lg: "50px" }}>
              <UnorderedList
                textColor="#ddd4d4"
                fontSize={{ base: "17px", lg: "20px" }}
                fontWeight="semibold"
                spacing={3}
              >
                <ListItem>
                  Developed new pages for existing web application using Vue.js
                </ListItem>
                <ListItem>
                  Developed new services using Java Spring Boot
                </ListItem>
                <ListItem>
                  Enhanced one of the client’s existing service by adding a new
                  API endpoint using Java Spring Boot, Postman
                </ListItem>
                <ListItem>
                  Revised one of the existing service from JPA specification to
                  QueryDSL method to remove and avoid boilerplate code
                </ListItem>
              </UnorderedList>
              <HStack
                mt={{ base: "20px", lg: "40px" }}
                flexWrap="wrap"
                justifyContent="center"
              >
                <Tag
                  colorScheme="whiteAlpha"
                  textColor="#ddd4d4"
                  variant="outline"
                  borderRadius="20px"
                  size={{ base: "sm", lg: "lg" }}
                >
                  Vue.js
                </Tag>
                <Icon as={BiSolidCircle} color="gray.400" boxSize={1} />
                <Tag
                  colorScheme="whiteAlpha"
                  textColor="#ddd4d4"
                  variant="outline"
                  borderRadius="20px"
                  size={{ base: "sm", lg: "lg" }}
                >
                  Spring Boot
                </Tag>
                <Icon as={BiSolidCircle} color="gray.400" boxSize={1} />
                <Tag
                  colorScheme="whiteAlpha"
                  textColor="#ddd4d4"
                  variant="outline"
                  borderRadius="20px"
                  size={{ base: "sm", lg: "lg" }}
                >
                  Postman
                </Tag>
                <Icon as={BiSolidCircle} color="gray.400" boxSize={1} />
                <Tag
                  colorScheme="whiteAlpha"
                  textColor="#ddd4d4"
                  variant="outline"
                  borderRadius="20px"
                  size={{ base: "sm", lg: "lg" }}
                >
                  GitLab
                </Tag>
              </HStack>
            </VStack>
          </GridItem>
          <GridItem area="box" rowSpan={1}>
            <SimpleGrid columns={2} border="white" px={{ base: 0, lg: 50 }}>
              <Box
                display="flex"
                height={{ base: "70px", lg: "80px" }}
                border="solid white"
                alignItems="center"
                px={{ base: 3, lg: 7 }}
              >
                <Stack spacing={0}>
                  <Text
                    textColor="gray.400"
                    fontWeight="hairline"
                    fontSize={{ base: "9px", lg: "14px" }}
                  >
                    Company
                  </Text>
                  <Text fontSize={{ base: "12px", lg: "16px" }} color="#ddd4d4">
                    Soft-Skills Sdn Bhd
                  </Text>
                </Stack>
              </Box>
              <Box
                display="flex"
                height={{ base: "70px", lg: "80px" }}
                border="solid white"
                alignItems="center"
                px={{ base: 3, lg: 7 }}
              >
                <Stack spacing={0}>
                  <Text
                    textColor="gray.400"
                    fontWeight="hairline"
                    fontSize={{ base: "9px", lg: "14px" }}
                  >
                    Role
                  </Text>
                  <Text fontSize={{ base: "12px", lg: "16px" }} color="#ddd4d4">
                    Software Developer Intern
                  </Text>
                </Stack>
              </Box>
              <Box
                display="flex"
                height={{ base: "70px", lg: "80px" }}
                border="solid white"
                alignItems="center"
                px={{ base: 3, lg: 7 }}
              >
                <Stack spacing={0}>
                  <Text
                    textColor="gray.400"
                    fontWeight="hairline"
                    fontSize={{ base: "9px", lg: "14px" }}
                  >
                    Location
                  </Text>
                  <Text fontSize={{ base: "12px", lg: "16px" }} color="#ddd4d4">
                    Selangor, Malaysia
                  </Text>
                </Stack>
              </Box>
              <Box
                display="flex"
                height={{ base: "70px", lg: "80px" }}
                border="solid white"
                alignItems="center"
                px={{ base: 3, lg: 7 }}
              >
                <Stack spacing={0}>
                  <Text
                    textColor="gray.400"
                    fontWeight="hairline"
                    fontSize={{ base: "9px", lg: "14px" }}
                  >
                    Date
                  </Text>
                  <Text fontSize={{ base: "12px", lg: "16px" }} color="#ddd4d4">
                    Nov 2021 - Feb 2022
                  </Text>
                </Stack>
              </Box>
            </SimpleGrid>
          </GridItem>
        </Grid>
      </Stack>
    </>
  );
};

export default Working;
