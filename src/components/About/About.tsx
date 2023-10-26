import { Text, VStack, Container, Flex, Highlight } from "@chakra-ui/react";

const About = () => {
  return (
    <>
      <Container
        maxWidth="100%"
        id="about"
        px={{ base: "20px", lg: "60px" }}
        mb={10}
      >
        <Flex>
          <VStack w="full" spacing={10} alignItems="center">
            <Text
              fontSize={{ base: "20px", lg: "40px" }}
              fontWeight="semibold"
              color="#ddd4d4"
            >
              <Highlight
                query={[
                  "opportunities",
                  "software development",
                  "problem-solving",
                ]}
                styles={{
                  px: "3",
                  py: "1",
                  border: "solid #ddd4d4",
                  rounded: "full",
                  color: "white",
                }}
              >
                Hello. I'm Shaun Tan. I'm on the lookout for opportunities to
                kickstart my career in the ever-evolving world of software
                development. My journey has just begun, and I'm eager to embark
                on this exciting adventure. Armed with a strong foundation in
                programming and a knack for problem-solving, I'm ready to roll
                up my sleeves and contribute fresh ideas and innovation to your
                team.
              </Highlight>
            </Text>

            <Text
              fontSize={{ base: "20px", lg: "40px" }}
              fontWeight="semibold"
              color="#ddd4d4"
            >
              <Highlight
                query={["learn", "adapt", "grow"]}
                styles={{
                  px: "3",
                  py: "1",
                  border: "solid #ddd4d4",
                  rounded: "full",
                  color: "white",
                }}
              >
                My curiosity knows no bounds, and I'm always hungry to learn,
                adapt, and grow in this dynamic field. From coding to debugging
                and everything in between, I'm up for the challenge!
              </Highlight>
            </Text>

            <Text
              fontSize={{ base: "20px", lg: "40px" }}
              fontWeight="semibold"
              color="#ddd4d4"
            >
              <Highlight
                query={["connect"]}
                styles={{
                  px: "3",
                  py: "1",
                  border: "solid #ddd4d4",
                  rounded: "full",
                  color: "white",
                }}
              >
                Let's connect and explore how my passion for software
                development can be a valuable asset to your organization.
                Together, we can create digital wonders!
              </Highlight>
            </Text>
          </VStack>
        </Flex>
      </Container>
    </>
  );
};

export default About;
