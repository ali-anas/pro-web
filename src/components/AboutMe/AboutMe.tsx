import React, { useState } from 'react';
import clsx from 'clsx';
import SectionWrapper from '@site/src/Layouts/SectionWrapper';
import styles from './AboutMe.module.css';

const aboutMeText = [`<span>Hi I'm Anas Ali, a 25 year old Front-end Developer based in Mumbai, India.</span>`,
`<span>I am working as a software engineer with People Interactive(Shaadi.com).</span>
<span>During my time here at Shaadi.com, I've learned a lot about good practices in software development and implementing a feature from scratch and have contributed to the front-end web application of Shaadi.com and Sangam.com.</span>`,
`<span>Prior to this role. I completed my bachelors degree in computer science from BTKIT, Dwarahat.</span>`,
`<span>I'd love to combine my passion for learning and solving problem with my software development skills to continue building personalized products for peoples and organizations.</span>`];

const ExperienceData = [
  {
    title: 'People Interactive(Shaadi.com)',
    session: 'Nov,2023 - Present',
    subtitle: 'Software Engineer II',
    description: ['Worked on improving the performance of the pages.', 'Migrated the legacy code from class based components to functional components', 'Upgraded the dev tools used by developers in sangam team by upgrading the node verison and CI/CD pipelines in front-end repositories'],
  },
  {
    title: 'People Interactive(Shaadi.com)',
    session: 'Dec,2021 - Oct, 2023',
    subtitle: 'Software Engineer I',
    description: ['Enhanced the SEO score of shaadi.com SEO page from 82% to 100% and performance score to 97%', 'Revamped and optimized the registration funnel of Sangam.com', `Added support for 10 vernacular Indian languages in sangam platform`],
  },
];

const EducationData = [
  {
    title: 'BTKIT, Dwarahat',
    session: '2017 - 2021',
    subtitle: 'B-Tech, Computer Science & Engineering',
    description: [],
  },
  {
    title: 'Coding Ninjas',
    session: 'Dec,2019 - Mar,2020',
    subtitle: 'Data Structures using C++',
    description: [],
  },
];

const ListItem = ({ title, subtitle, session, description }) => (
    <div className='w-full flex flex-row flex-nowrap'>
      <div className='relative ml-4 md:ml-8 mr-4 mt-8 -pb-8 border-solid border border-primary'>
        <div className='absolute w-4 h-4 -left-2 -top-6 rounded-full bg-primary'></div>
      </div>
      <div className='mb-8'>
        <div className='flex pb-2 items-center'>
          <span className='font-bold text-lg tracking-wide'>{title}</span>
        </div>
        <div className='flex flex-row flex-wrap'>
            <span className='text-sm text-textSecondaryLight'>{session}</span>
        </div>
        <div className='flex flex-row flex-wrap'>
            <span className='text-md text-textSecondary font-semibold'>{subtitle}</span>
        </div>
        <div className='ml-4 text-textSecondary'>
          {description.map((item, idx) => <li key={`desc-${idx+1}`} className='mb-0'>{item}</li>)}
        </div>
      </div>
      
    </div>
);

const ToggleSection = () => {
  const [showEducation, setShowEducation] = useState(false);
  const toggle = (btn) => {
    if(btn === 'showExperience') {
      setShowEducation(false);
      return;
    }
    setShowEducation(true);
  }
  return (
    <div className='shadow-medium rounded-xl overflow-hidden bg-bgSurface'>
      <div className='w-full'>
        <div onClick={() => toggle('showExperience')} className={clsx('text-xl text-center py-4 cursor-pointer text-primary', !showEducation && styles.active)} role="button">Experience</div>
        {/* <div onClick={() => toggle('showEducation')} className={clsx('text-xl text-center py-4 cursor-pointer text-primary', showEducation && styles.active)} role="button">Education</div> */}
      </div>
      <div className='row p-8'>
        {showEducation ? EducationData.map((item, idx) => <ListItem {...item} key={`edu-${idx+1}`}/>) : ExperienceData.map((item, idx) => <ListItem {...item} key={`exp-${idx+1}`}/>) }
      </div>
    </div>
  )
}

const AboutMe = () => {
  return (
    <SectionWrapper sectionHeading='About Me'>
      <div className="container">
        <div className="row">
          <div className="col">
            {aboutMeText.map((text, idx) => <p key={`text-${idx+1}`} className="text-lg text-textSecondary text-left mx-auto leading-8 max-w-prose tracking-wide" dangerouslySetInnerHTML={{__html: text}}></p>)}
            
          </div>
        </div>
        <div className="row flex align-center justify-center mt-8">
          <div className="col col--8">
            <ToggleSection />
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
export default AboutMe;
