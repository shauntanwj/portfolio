export interface Project {
  id: number;
  project_name: string;
  image_name: string;
  year: number;
  category: string;
  category_detail?: string;
}

export const ProjectData = [
  {
    id: 1,
    project_name:
      "Profiling Malaysian’s Politician’s Political Influence Based on the Sentiment of the Public",
    image_name: "whosYourYb",
    year: 2022,
    category: "Final Year Project",
    category_detail: "User Generated Content",
  },
  {
    id: 2,
    project_name: "Real Time Fire and Climate Data Streaming Simulation",
    image_name: "whosYourYb",
    year: 2022,
    category: "Academic",
    category_detail: "Big Data Management",
  },
  {
    id: 3,
    project_name:
      "Tsunami Detection in a Distributed Wireless Sensor Network (WSN)",
    image_name: "tsunamiDetection",
    year: 2021,
    category: "Academic",
    category_detail: "Parallel Computing",
  },
  {
    id: 4,
    project_name: "Dinosaur Park",
    image_name: "dinosaur",
    year: 2021,
    category: "Academic",
    category_detail: "Java Console Game",
  },
  {
    id: 5,
    project_name: "Client Information Web Scrapper",
    image_name: "tsunamiDetection",
    year: 2023,
    category: "Personal",
    category_detail: "Web Scrapping",
  },
];
