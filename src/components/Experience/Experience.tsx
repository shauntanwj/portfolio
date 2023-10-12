import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Center,
  Heading,
  VStack,
  Box,
} from "@chakra-ui/react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const Experience = () => {
  return (
    <VStack bg="black" py={{ base: 200 }}>
      <Heading as="h1" color="white">
        Experience
      </Heading>
      <Accordion allowMultiple w={{ base: 500 }} bg="gray" borderRadius={20}>
        <AccordionItem border="none">
          {({ isExpanded }) => (
            <>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    Monash University Malaysia
                  </Box>
                  <Box as="span" flex="1" textAlign="right">
                    2019-2023
                  </Box>
                  {isExpanded ? (
                    <AiOutlineMinus fontSize="12px" />
                  ) : (
                    <AiOutlinePlus fontSize="12px" />
                  )}
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
        <AccordionItem border="none">
          {({ isExpanded }) => (
            <>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    Pay Fong High School
                  </Box>
                  <Box as="span" flex="1" textAlign="right">
                    2013-2018
                  </Box>
                  {isExpanded ? (
                    <AiOutlineMinus fontSize="12px" />
                  ) : (
                    <AiOutlinePlus fontSize="12px" />
                  )}
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
      </Accordion>
    </VStack>
  );
};

export default Experience;
