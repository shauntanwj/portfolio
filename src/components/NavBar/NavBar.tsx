import { HStack, Image, Flex } from "@chakra-ui/react";
import logo from "../../assets/logo.webp";
import { Link } from "react-scroll";
import styles from "./NavBar.module.css";
import { useState } from "react";

const NavBar = () => {
  const [navBarSize, setNavBarSize] = useState(false);
  const shrinkNavBar = () => {
    if (window.scrollY >= 80) {
      setNavBarSize(true);
    } else {
      setNavBarSize(false);
    }
  };
  window.addEventListener("scroll", shrinkNavBar);
  return (
    <>
      <Flex
        as="header"
        position="fixed"
        background="transparent"
        backdropFilter="saturate(180%) blur(5px)"
        w="100%"
        paddingY={navBarSize ? "15px" : "20px"}
      >
        <HStack spacing="20px" paddingX="60px">
          <Image src={logo} boxSize={navBarSize ? "40px" : "60px"} />

          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-90}
            duration={500}
            className={styles.link}
          >
            About
          </Link>
          <Link className={styles.link} to="experience">
            Experience
          </Link>
          <Link className={styles.link} to="projects">
            Projects
          </Link>
          <Link className={styles.link} to="contact">
            Contact
          </Link>
        </HStack>
      </Flex>
    </>
  );
};

export default NavBar;
