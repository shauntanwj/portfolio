import {
  HStack,
  Image,
  Flex,
  Spacer,
  Show,
  Hide,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  Button,
  AbsoluteCenter,
  VStack,
} from "@chakra-ui/react";
import logo from "../../assets/images/logo_1.png";
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

  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleClick = () => {
    onOpen();
  };

  return (
    <>
      <Hide below="sm">
        <Flex
          position="fixed"
          background="transparent"
          backdropFilter="saturate(180%) blur(5px)"
          w="100%"
          py={{
            md: navBarSize ? "10px" : "15px",
            lg: navBarSize ? "15px" : "20px",
          }}
          px={{ md: "30px", lg: "45px", xl: "60px" }}
          zIndex={200}
          as="header"
        >
          <HStack w="100%" justifyContent="space-between">
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              <Image
                src={logo}
                boxSize={{
                  md: "30px",
                  lg: navBarSize ? "30px" : "70px",
                  xl: navBarSize ? "40px" : "80px",
                }}
                cursor="pointer"
              />
            </Link>
            <Spacer />
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className={styles.link}
            >
              about,
            </Link>
            <Link
              className={styles.link}
              activeClass="active"
              to="experience"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            >
              experience,
            </Link>
            <Link
              className={styles.link}
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              projects,
            </Link>
            <Link
              className={styles.link}
              activeClass="active"
              to="footer"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              contact
            </Link>
          </HStack>
        </Flex>
      </Hide>

      <Show below="sm">
        <HStack
          w="100%"
          px="20px"
          py="10px"
          justifyContent="space-between"
          position="fixed"
          background="transparent"
          backdropFilter="saturate(180%) blur(5px)"
          zIndex={200}
          as="header"
        >
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            <Image src={logo} boxSize={"50px"} cursor="pointer" />
          </Link>
          <Spacer />

          <Button
            color="white"
            variant="text"
            onClick={() => handleClick()}
            fontWeight={"thin"}
          >
            menu
          </Button>

          <Drawer onClose={onClose} isOpen={isOpen} size="full">
            <DrawerOverlay />
            <DrawerContent fontSize="30px" fontWeight={"semibold"} bg="#ddd4d4">
              <HStack
                w="100%"
                px="20px"
                py="10px"
                justifyContent="space-between"
              >
                <Link
                  activeClass="active"
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  onClick={onClose}
                >
                  <Image src={logo} boxSize={"50px"} cursor="pointer" />
                </Link>
                <Spacer />
                {/* <DrawerCloseButton /> */}
                <Button variant="text" onClick={onClose} fontWeight={"thin"}>
                  close
                </Button>
              </HStack>
              <AbsoluteCenter>
                <VStack fontSize="40px" fontWeight="bold">
                  <Link
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onClick={onClose}
                  >
                    about
                  </Link>
                  <Link
                    activeClass="active"
                    to="experience"
                    spy={true}
                    smooth={true}
                    offset={-40}
                    duration={500}
                    onClick={onClose}
                  >
                    experience
                  </Link>
                  <Link
                    activeClass="active"
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onClick={onClose}
                  >
                    projects
                  </Link>
                  <Link
                    activeClass="active"
                    to="footer"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onClick={onClose}
                  >
                    contact
                  </Link>
                </VStack>
              </AbsoluteCenter>
            </DrawerContent>
          </Drawer>
        </HStack>
      </Show>
    </>
  );
};

export default NavBar;
