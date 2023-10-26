import {
  Box,
  Heading,
  SimpleGrid,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";

const Education = () => {
  return (
    <Stack
      bg="#131313"
      mb={{ base: "50px", lg: "70px" }}
      px={{ base: "20px", lg: "60px" }}
      divider={<StackDivider borderColor="gray.200" />}
      direction="column"
      spacing={5}
    >
      <Heading
        pt={10}
        textColor="#ddd4d4"
        fontSize={{ base: "22px", lg: "40px" }}
      >
        Education
      </Heading>

      <SimpleGrid
        columns={{ base: 1, md: 2 }}
        alignItems="baseline"
        width="100%"
      >
        <Box>
          <Text
            fontSize={{ base: "15px", lg: "25px" }}
            fontWeight="thin"
            color="#ddd4d4"
          >
            October 2019 - July 2023
          </Text>
        </Box>

        <Box>
          <Text
            fontSize={{ base: "20px", lg: "35px" }}
            fontWeight="semibold"
            color="#ddd4d4"
          >
            Monash University Malaysia
          </Text>
          <Text fontSize={{ base: "15px", lg: "20px" }} color="#ddd4d4">
            Bachelor of Computer Science
          </Text>
        </Box>
      </SimpleGrid>

      <SimpleGrid columns={{ sm: 1, md: 2 }} alignItems="baseline" width="100%">
        <Box>
          <Text
            fontSize={{ base: "15px", lg: "25px" }}
            fontWeight="thin"
            color="#ddd4d4"
          >
            September 2022 - February 2023
          </Text>
        </Box>

        <Box>
          <Text
            fontSize={{ base: "20px", lg: "35px" }}
            fontWeight="semibold"
            color="#ddd4d4"
          >
            University Of Liverpool
          </Text>
          <Text fontSize={{ base: "15px", lg: "20px" }} color="#ddd4d4">
            Student Exchange Programme
          </Text>
        </Box>
      </SimpleGrid>

      <SimpleGrid columns={{ sm: 1, md: 2 }} alignItems="baseline" width="100%">
        {" "}
        <Box>
          <Text
            fontSize={{ base: "15px", lg: "25px" }}
            fontWeight="thin"
            color="#ddd4d4"
          >
            January 2013 - December 2018
          </Text>
        </Box>
        <Box>
          <Text
            fontSize={{ base: "20px", lg: "35px" }}
            fontWeight="semibold"
            color="#ddd4d4"
          >
            Pay Fong High School
          </Text>
          <Text fontSize={{ base: "15px", lg: "20px" }} color="#ddd4d4">
            Chinese Independent High School
          </Text>
        </Box>
      </SimpleGrid>
      <Box></Box>
    </Stack>
  );
};

export default Education;
