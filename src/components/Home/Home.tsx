import { Text, Heading, Grid, GridItem, Button } from "@chakra-ui/react";
import styles from "./Home.module.css";

const Home = () => {
  const monthName = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const today = new Date();
  const month = monthName[today.getMonth()];
  const date = today.getDate();
  const year = today.getFullYear();
  return (
    <>
      <Grid
        templateAreas={{
          base: `"date" "name" "description"`,
          md: `"name date" "name space" "name description"`,
        }}
        templateColumns={{ sm: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
        h="100vh"
        templateRows={{ sm: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }}
        gap={{ sm: 1, lg: 4 }}
        px={{ base: "20px", md: "30px", lg: "45px", xl: "60px" }}
        pt={{ base: "80px", md: "90px", lg: "100px", xl: "120px" }}
        pb={{ md: "30px", lg: "70px" }}
        mb={{ md: "40px", lg: "60px", xl: "80px" }}
        id="home"
      >
        <GridItem
          area="name"
          rowSpan={{ sm: 1, md: 3 }}
          colSpan={1}
          textAlign="left"
        >
          <Heading
            fontSize={{ base: "70px", md: "90px", lg: "100px", xl: "150px" }}
            lineHeight={1.02}
          >
            <Text className={styles.text}>SHAUN</Text>
            <Text className={styles.text}>TAN</Text>
          </Heading>
          <Text
            fontSize={{ md: "15px", lg: "20px", xl: "30px" }}
            className={styles.text}
          >
            SOFTWARE DEVELOPER
          </Text>
        </GridItem>
        <GridItem area="date" rowSpan={1}>
          <Text
            fontSize={{ md: "20px", xl: "30px" }}
            fontWeight="thin"
            pt={2}
            className={styles.text}
          >
            {date} {month} {year} <br /> {}
          </Text>
        </GridItem>

        <GridItem area="space" rowSpan={1} />

        <GridItem
          area="description"
          rowSpan={{ sm: 1, lg: 1 }}
          textAlign="right"
        >
          <Text
            fontSize={{ sm: "15px", md: "17px", lg: "22px", xl: "30px" }}
            fontWeight="regular"
            className={styles.text}
            color="white"
          >
            I'm a recent computer science graduate from Monash University
            Malaysia with an unwavering passion for software development and
            emerging technologies.
          </Text>
          <a href="mailto:shauntanwj10@gmail.com" target="_blank">
            <Button
              mt={4}
              borderRadius={20}
              w="fit-content"
              variant="outline"
              textColor="#ddd4d4;"
              className={styles.button}
            >
              Contact Me
            </Button>
          </a>
        </GridItem>
      </Grid>
    </>
  );
};

export default Home;
