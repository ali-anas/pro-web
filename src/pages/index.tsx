import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
// import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Laptop from '../components/Laptop';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import AboutMe from '../components/AboutMe';
import { HeaderWrapper, FooterWrapper } from '../Layouts/SectionWrapper/SectionWrapper';

import styles from './index.module.css';

export const bodySectionRef = React.createRef();

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  const handleScroll = ref => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start'});
    }
  }
  return (
    <header className={clsx('hero bg-bgHero mb-16', styles.heroBanner)}>
    <HeaderWrapper>
    
      <div className="container">
        <div className="row">
          <div className='w-full flex flex-wrap-reverse'>
            <div className="col col--8">
              <div className="w-full h-full flex flex-col justify-center">
                <h1 className={`text-5xl md:text-6xl lg:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-lime-500 via-emerald-500 to-cyan-lime-500 `}>{siteConfig.title}</h1>
                <p className="hero__subtitle">{siteConfig.tagline}</p>
                <div className='w-full flex flex-nowrap flex-col md:flex-row justify-center md:justify-start items-center'>
                  {/* <button className='w-fit px-8 py-2  rounded-md border-0 cursor-pointer shadow-large mb-4'>
                    <a href="https://bit.ly/3hFDxGR" className="text-lg font-semibold text-textPrimary hover:text-textPrimary" target="_blank">
                      <span>Resume</span>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width='16px' height='16px' className='fill-textPrimary ml-2'><path d="M128 0C92.7 0 64 28.7 64 64v96h64V64H354.7L384 93.3V160h64V93.3c0-17-6.7-33.3-18.7-45.3L400 18.7C388 6.7 371.7 0 354.7 0H128zM384 352v32 64H128V384 368 352H384zm64 32h32c17.7 0 32-14.3 32-32V256c0-35.3-28.7-64-64-64H64c-35.3 0-64 28.7-64 64v96c0 17.7 14.3 32 32 32H64v64c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V384zm-16-88c-13.3 0-24-10.7-24-24s10.7-24 24-24s24 10.7 24 24s-10.7 24-24 24z"/></svg>
                    </a>
                  </button> */}
                  <div className={styles.buttons}>
                <Link
                  className="button button--secondary button--lg"
                  to='https://bit.ly/3hFDxGR'>
                  <><span>Resume</span>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width='16px' height='16px' className='ml-2'><path d="M128 0C92.7 0 64 28.7 64 64v96h64V64H354.7L384 93.3V160h64V93.3c0-17-6.7-33.3-18.7-45.3L400 18.7C388 6.7 371.7 0 354.7 0H128zM384 352v32 64H128V384 368 352H384zm64 32h32c17.7 0 32-14.3 32-32V256c0-35.3-28.7-64-64-64H64c-35.3 0-64 28.7-64 64v96c0 17.7 14.3 32 32 32H64v64c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V384zm-16-88c-13.3 0-24-10.7-24-24s10.7-24 24-24s24 10.7 24 24s-10.7 24-24 24z"/></svg></>
                </Link>
              </div>
                </div>
              {/* <div className={styles.buttons}>
                <Link
                  className="button button--secondary button--lg"
                  to="/docs/intro">
                  Docusaurus Tutorial - 5min ⏱️
                </Link>
              </div> */}
              </div>
            </div>
            <div className="relative col col--4">
              <div className="relative top-6 flex flex-col justify-center items-center select-none">
                <div className="relative h-40 w-40">
                  <img src="/img/faceTransparentWhite.png" alt="coder face" />
                </div>
                <div className="absolute top-24 flex flex-row flex-nowrap items-center justify-between">
                  <div className="flex flex-no-wrap flex-col items-center">
                    <div className="relative z-10 w-8 h-3 rounded-2xl animate-shutEye bg-bgHero select-none"></div>
                    <div className="relative h-4 w-4 rounded-full bg-white"></div>
                  </div>
                  <div className="flex flex-no-wrap flex-col items-center">
                    <div className="relative z-10 w-8 h-3 rounded-2xl animate-shutEye bg-bgHero selelct-none"></div>
                    <div className="relative h-4 w-4 rounded-full bg-white"></div>
                  </div>
                </div>
                <Laptop />
              </div>
            </div>
            
          </div>
        </div>
        <div className="row relative flex justify-center items-center w-full">
          <span className={clsx('inline-block absolute top-8 rounded-full cursor-pointer w-16 h-16 flex justify-center items-center', styles.btmArrow)} onClick={() => handleScroll(bodySectionRef)}>
            <svg className="fill-white" width="36px" height="36px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>
          </span>
        </div>
      </div>
    
    </HeaderWrapper>
    
    </header>
  );
}

const footer = {
    links: [
      {
        title: 'Docs',
        items: [
          {
            label: 'Docs',
            to: '/docs/intro',
          },
        ],
      },
      {
        title: 'Social',
        items: [
          {
            label: 'LinkedIn',
            href: 'https://www.linkedin.com/in/alianas/',
          },
          {
            label: 'Resume',
            href: 'https://bit.ly/3hFDxGR',
          },
          {
            label: 'Instagram',
            href: 'https://www.instagram.com/alijnv_1521/',
          },
          {
            label: 'Youtube',
            href: 'https://www.youtube.com/channel/UC4vNL1ruynVAsTmtJLUHGGA',
          },
        ],
      },
      {
        title: 'More',
        items: [
          {
            label: 'Blog',
            to: '/blog',
          },
          {
            label: 'GitHub',
            href: 'https://github.com/ali-anas',
          },
        ],
      },
      {
        title: 'Coding Profiles',
        items: [
          {
            label: 'Codechef',
            href: 'https://www.codechef.com/users/alijnv_1521',
          },
          {
            label: 'Codeforces',
            href: 'https://codeforces.com/profile/alijnv_1521',
          },
          {
            label: 'Leetcode',
            href: 'https://leetcode.com/alijnv_1521/',
          },
        ],
      },
    ],
    copyright: `No © Copyright Issues. Built with Docusaurus.`,
    attribution: 'Icon made by Freepik from www.flaticon.com'
  };


const FooterLink = ({ title, to }) => {
  return (
    <div className="mr-4">
     <Link
       className="font-base text-textSecondary hover:text-textPrimary"
       to={to}>
         {title}
     </Link>
   </div>
 )
}

const Footer = () => {
  return (
    <footer className='w-full h-full bg-bgSecondary'>
      <FooterWrapper>
        <div className='container py-8'>
          <div className='row'>
            {footer.links.map((list, idx1) => (
              <div className='col col--3' key={`list-${idx1 + 1}`}>
                <div className='font-semibold mb-4'>
                  {list.title}
                </div>
                {list.items.map((item, idx2) => (
                  <div className='my-2' key={`link-${idx1+1}-${idx2 + 1}`}>
                    <FooterLink to={item.href ?? item.to} title={item.label} />
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div className='text-center text-textSecondary mt-4'>{footer.copyright}</div>
          <div className='text-center text-textSecondary'>{footer.attribution}</div>
        </div>
      </FooterWrapper>
    </footer>
  )
}

export default function Home(): JSX.Element {
  return (
    <Layout
      title="Anas Ali"
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main ref={bodySectionRef} className='scroll-mt-28'>
        {/* <HomepageFeatures /> */}
        <AboutMe />
        <Skills />
        <Projects />
      </main>
      <Footer />
    </Layout>
  );
}
