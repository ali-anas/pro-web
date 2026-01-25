export type Project = {
    slug: string;
    title: string;
    description: string;
    content?: string; // Markdown/Rich text content
    techStack: string[];
    link: string | null;
    github?: string;
    image: string;
    featured?: boolean;
};

export const projects: Project[] = [
    {
        slug: "path-finder",
        title: "Path Finder",
        description: "A path visualizer between two points in a 2d grid",
        content: `
# Path Finder

A path visualizer between two points in a 2d grid.

## Key Features

- **Obstacle Avoidance**: You can add obstacles(walls) in the grid. The algorithm avoid obstacles in the grid and find the shortest path. \\
    *(Note - Not all algorithms guarantees shortest path)*
- **Real-time Path Visualization**: Move source or destination points to see the updated path in near real time.
- **Reset**: Reset the grid to its initial state or clear the obstacles(walls).

## Technical Implementation

- Built using **React.js**.
- Provides a list of algorithms to find the path between two points in a 2d grid.
    - **Breadth First Search (BFS)** - Guarantees shortest path.
    - **Depth First Search (DFS)** - Does not guarantee shortest path.
    - **Dijkstra's Algorithm** - Guarantees shortest path.
    - **A \* Algorithm** - Guarantees shortest path.
        `,
        techStack: ["React.js", "TypeScript", "Redux Toolkit", "Scss", "Data Structures", "Algorithms"],
        link: "https://algo-visualizer-amber-beta.vercel.app/",
        github: "https://github.com/ali-anas/algo-visualizer",
        image: "/img/projects/path-finder.png",
        featured: true,
    },
    {
        slug: "trivia-api",
        title: "Trivia API",
        description: "Restful APIs for web based application to play Trivia(Question and answer) like game.",
        content: ``,
        techStack: ["Python3", "Flask"],
        link: "https://github.com/ali-anas/trivia-api/blob/master/backend/README.md",
        github: "https://github.com/ali-anas/trivia-api",
        image: "/img/projects/Trivia-project.png",
        featured: true,
    },
    {
        slug: "fyyur-app",
        title: "Fyyur",
        description: "Fyyur is a musical venue and artist booking site that facilitates the discovery and bookings of shows between local performing artists and venues.",
        content: ``,
        techStack: ["Python3", "Postgres", "Flask", "React.js"],
        link: null,
        github: "https://github.com/ali-anas/fyyur",
        image: "/img/projects/Fyyur-project.png",
    },
    {
        slug: "graph-visualizer",
        title: "Graph Visualizer",
        description: "This simple piece of software helps to produce a good drawing for a given arbitrary graph using Graph drawing algorithm.",
        content: ``,
        techStack: ["C++", "QT Tool"],
        link: "https://youtu.be/ohXzNHvqYVc",
        github: "https://github.com/ali-anas/Graph-Visualization",
        image: "/img/projects/graph-project.png",
    },
    {
        slug: "archive-of-code",
        title: "Archive of Code",
        description: "A compilation of various code snippets and programs I have written. Includes interesting data structures, algorithms, and interview problems.",
        content: ``,
        techStack: ["C++", "JS"],
        link: null,
        github: "https://github.com/ali-anas/Archive-of-Code",
        image: "/img/projects/aoc-project.png",
    }
];

export function getProjectBySlug(slug: string): Project | undefined {
    return projects.find((project) => project.slug === slug);
}
