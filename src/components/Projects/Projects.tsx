import React from 'react';
import HrefElem from '../HrefElem';
import clsx from 'clsx';
// import SubHeadingComponent from '../SubHeadingComponent';
import SectionWrapper from '@site/src/Layouts/SectionWrapper';
import styles from './Projects.module.css';

const ProjectsData = [
    {
      id: 1,
      title: "Trivia API",
      author: ["Anas Ali"],
      intro: "Restful APIs for web based application to play Trivia(Question and answer) like game.",
      github_url: "https://github.com/ali-anas/trivia-api",
      live_url: null,
      youtube_url: null,
      techStack: ["Python3"],
      overview: "",
      img_url: '/img/projects/Trivia-project.png',
    },
    {
      id: 2,
      title: "Graph Visualizer",
      author: ["done by following CS 106L website"],
      intro: "This simple piece of software helps to produce a good drawing for a given arbitrary graph using Graph drawing algorithm.",
      github_url: "https://github.com/ali-anas/Graph-Visualization",
      live_url: null,
      youtube_url: "https://youtu.be/ohXzNHvqYVc",
      techStack: ["C++"],
      overview: "",
      img_url: '/img/projects/graph-project.png',
    },
    {
      id: 3,
      title: "Fyyur",
      author: ["Anas Ali"],
      intro: "Fyyur is a musical venue and artist booking site that facilitates the discovery and bookings of shows between local performing artists and venues.",
      github_url: "https://github.com/ali-anas/fyyur",
      live_url: null,
      youtube_url: null,
      techStack: ["Python3"],
      overview: "",
      img_url: '/img/projects/Fyyur-project.png',
    },
    {
      id: 4,
      title: "Archive of Code",
      author: ["Anas Ali"],
      intro: "A compilation of various code snippets and programs I have written. Includes interesting data structures, algorithms, and interview problems.",
      github_url: "https://github.com/ali-anas/Archive-of-Code",
      live_url: null,
      youtube_url: null,
      techStack: [""],
      overview: "",
      img_url: '/img/projects/aoc-project.png',
    },
]

function SingleProject({ project }) {
    return (
      <div className="col col--6 mb-8">
        <div className={clsx('w-full h-content rounded-md md:rounded-xl shadow-small hover:shadow-hover overflow-hidden', styles.zoomImageOnHover)}>
          <div className='flex flex-row flex-nowrap w-full text-center py-4 px-3 items-center bg-gray-800'>
            <div className='flex space-x-2'>
                <div className='h-3 w-3 rounded-full bg-[#FF605C]'></div>
                <div className='h-3 w-3 rounded-full bg-[#FFBD44]'></div>
                <div className='h-3 w-3 rounded-full bg-[#00CA4E]'></div>
            </div>
          </div>
          <div className='relative h-36 w-full'>
              <div className='absolute h-full w-full overflow-hidden inset-0'>
                <img className='object-cover w-full h-full' src={project.img_url} alt={`image ${project.title}`} />
              </div>
          </div>
          <div className='flex flex-col flex-nowrap justify-between h-content p-4 bg-bgSurface'>
              <h3 className='text-center w-full mb-1 text-textPrimary'>{project.title}</h3>
              <p className='mb-2 line-clamp-2 text-textSecondary'>{project.intro}</p>
              <div className='flex flex-nowrap flex-row justify-start items-center'>
                  {project.github_url && <HrefElem to={project.github_url} title="Github" />}
                  {project.youtube_url && <HrefElem to={project.youtube_url} title="YouTube" />}
                  {project.live_url && <HrefElem to={project.live_url} title="Live" />}
              </div>
          </div>
        </div>
      </div>
    )
}

export default function Projects() {
    return (
      <SectionWrapper sectionHeading="Projects">
        <div className="container">
          <div className="row">
            {ProjectsData.map((project, i) => (
              <SingleProject project={project} key={`project-${i + 1}`} />
            ))}
          </div>
        </div>
      </SectionWrapper>
    )
}