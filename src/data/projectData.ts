export interface Project {
  id: number;
  project_name: string;
  asset_name: string;
  asset_type: string;
  year: number;
  category: string;
  category_detail?: string;
  href: string;
}

export const ProjectData = [
  {
    id: 1,
    project_name: "Client Information Web Scrapper",
    asset_name: "scraper",
    asset_type: "img",
    year: 2023,
    category: "Personal",
    category_detail: "Web Scrapping",
    href: "https://github.com/shauntanwj/client-scraper",
  },
  {
    id: 2,
    project_name:
      "Profiling Malaysian’s Politician’s Political Influence Based on the Sentiment of the Public",
    asset_name: "whosYourYb",
    asset_type: "img",
    year: 2022,
    category: "Final Year Project",
    category_detail: "User Generated Content",
    href: "https://github.com/Monash-FYP-MA02",
  },
  {
    id: 3,
    project_name: "Real Time Fire and Climate Data Streaming Simulation",
    asset_name: "fire",
    asset_type: "vid",
    year: 2022,
    category: "Academic",
    category_detail: "Big Data Management",
    href: "https://github.com/shauntanwj/realtime-data-streaming-simulation",
  },
  {
    id: 4,
    project_name:
      "Tsunami Detection in a Distributed Wireless Sensor Network (WSN)",
    asset_name: "tsunamiDetection",
    asset_type: "img",
    year: 2021,
    category: "Academic",
    category_detail: "Parallel Computing",
    href: "https://github.com/shauntanwj/tsunami-detections-simulation",
  },
  {
    id: 5,
    project_name: "Dinosaur Park",
    asset_name: "dinosaur",
    asset_type: "vid",
    year: 2021,
    category: "Academic",
    category_detail: "Object Oriented Programming (OOP)",
    href: "https://github.com/shauntanwj/dinosaur-game-oop",
  },
];
