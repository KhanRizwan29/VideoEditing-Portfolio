export interface WorkItem {
  id: string;
  number: string;
  slug: string;
  projectTitle: string;
  category: string;
  heading: string;
  tech: string;
  videoSources: string[];
}

const workVideoSets: string[][] = Array.from({ length: 6 }, (_, workIndex) =>
  Array.from({ length: 9 }, (_, index) => {
    const row = Math.floor(index / 3) + 1;
    const col = (index % 3) + 1;
    return `/videos/${workIndex + 1}_${row}x${col}.webm`;
  })
);

export const workItems: WorkItem[] = [
  {
    id: "01",
    number: "01",
    slug: "cafe-and-eateries",
    projectTitle: "Project Name",
    category: "Category",
    heading: "Cafe and Eateries",
    tech: "Javascript, TypeScript, React, Threejs",
    videoSources: workVideoSets[0],
  },
  {
    id: "02",
    number: "02",
    slug: "tools-and-features-01",
    projectTitle: "Project Name",
    category: "Category",
    heading: "Informative Videos",
    tech: "Javascript, TypeScript, React, Threejs",
    videoSources: workVideoSets[1],
  },
  {
    id: "03",
    number: "03",
    slug: "tools-and-features-02",
    projectTitle: "Project Name",
    category: "Category",
    heading: "Properties",
    tech: "Javascript, TypeScript, React, Threejs",
    videoSources: workVideoSets[2],
  },
  {
    id: "04",
    number: "04",
    slug: "tools-and-features-03",
    projectTitle: "Project Name",
    category: "Category",
    heading: "Events",
    tech: "Javascript, TypeScript, React, Threejs",
    videoSources: workVideoSets[3],
  },
  {
    id: "05",
    number: "05",
    slug: "tools-and-features-04",
    projectTitle: "Project Name",
    category: "Category",
    heading: "Products",
    tech: "Javascript, TypeScript, React, Threejs",
    videoSources: workVideoSets[4],
  },
  {
    id: "06",
    number: "06",
    slug: "tools-and-features-05",
    projectTitle: "Project Name",
    category: "Category",
    heading: "UGC Content",
    tech: "Javascript, TypeScript, React, Threejs",
    videoSources: workVideoSets[5],
  },
];
