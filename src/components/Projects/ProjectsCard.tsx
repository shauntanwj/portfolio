import { Project } from "../../data/projectData";
import {
  Card,
  Image,
  CardBody,
  Heading,
  Text,
  AspectRatio,
  Stack,
  Link,
  HStack,
  Icon,
} from "@chakra-ui/react";
import { HiMiniArrowUpRight } from "react-icons/hi2";
import styles from "./Projects.module.css";
import whosYourYb from "../../assets/images/whos_ur_yb.png";
import tsunamiDetection from "../../assets/images/tsunami_detection.png";
import fireVideo from "../../assets/videos/fire.mp4";
import dinosaurVid from "../../assets/videos/dinosaur.mp4";
import scraper from "../../assets/images/scraper.png";

interface Props {
  project: Project;
}

const ProjectsCard = ({ project }: Props) => {
  const assetMap: { [key: string]: string } = {
    whosYourYb: whosYourYb,
    tsunamiDetection: tsunamiDetection,
    dinosaur: dinosaurVid,
    fire: fireVideo,
    scraper: scraper,
  };
  return (
    <Card borderRadius={0} background="none" overflow="hidden" cursor="pointer">
      <CardBody>
        <AspectRatio ratio={16 / 9}>
          {project.asset_type === "img" ? (
            <Image
              src={assetMap[project.asset_name]}
              className={styles.asset}
              objectFit="cover"
            />
          ) : (
            <video
              src={assetMap[project.asset_name]}
              className={styles.asset}
              loop
              autoPlay
              muted
              playsInline
            ></video>
          )}
        </AspectRatio>
        <Stack>
          <Text
            fontSize={{ base: "12px", md: "17px" }}
            color="#ddd4d4"
            marginTop={2}
          >
            {project.year} / {project.category} / {project.category_detail}
          </Text>
          <Heading fontSize={{ base: "17px", md: "25px" }} color="#ddd4d4">
            {project.project_name}
          </Heading>
          <HStack spacing={1}>
            <Link
              className={styles.link}
              fontSize={{ base: "10px", md: "15px" }}
              href="https://www.linkedin.com/in/shauntan0410"
              isExternal={true}
              color="white"
              fontWeight="thin"
            >
              See project
            </Link>
            <Icon
              as={HiMiniArrowUpRight}
              color="white"
              boxSize={{ base: 3, lg: 5 }}
            />
          </HStack>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default ProjectsCard;
