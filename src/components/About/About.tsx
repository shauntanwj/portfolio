import { Text, VStack, Container, Flex } from "@chakra-ui/react";
import NavBar from "../NavBar/NavBar";

const About = () => {
  return (
    <>
      <Container maxWidth="100%" id="about" background="#131313">
        <Flex py={10}>
          <VStack w="full" spacing={10} alignItems="center">
            <Text
              fontSize={{ lg: "50px" }}
              fontWeight="semibold"
              color="#ddd4d4"
            >
              {" "}
              Hello. I'm Shaun Tan, a recent computer science graduate from
              Monash University Malaysia with an unwavering passion for software
              development and emerging technologies. <br />
              <br />
              I'm on the lookout for opportunities to kickstart my career in the
              ever-evolving world of software development. My journey has just
              begun, and I'm eager to embark on this exciting adventure. Armed
              with a strong foundation in programming and a knack for
              problem-solving, I'm ready to roll up my sleeves and contribute
              fresh ideas and innovation to your team. <br /> <br />
              My curiosity knows no bounds, and I'm always hungry to learn,
              adapt, and grow in this dynamic field. From coding to debugging
              and everything in between, I'm up for the challenge! Let's connect
              and explore how my passion for software development can be a
              valuable asset to your organization. Together, we can create
              digital wonders!{" "}
            </Text>
          </VStack>
        </Flex>
      </Container>
    </>
  );
};

export default About;
