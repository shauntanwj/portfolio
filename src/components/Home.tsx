import { Container, Flex, Text, VStack } from "@chakra-ui/react";

const Home = () => {
  return (
    <>
      <Container maxWidth="100%" background="#131313">
        <Flex h="100vh" py={20}>
          <VStack h="full" w="full" spacing={10}>
            <Text fontSize={{ sm: 150, xl: 200 }} color="white">
              SHAUN TAN
            </Text>
            <Text fontSize={40} color="white">
              SOFTWARE DEVELOPER
            </Text>
          </VStack>
        </Flex>
      </Container>
    </>
  );
};

export default Home;
