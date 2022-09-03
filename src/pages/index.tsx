import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';
import Laptop from '../components/HomepageFeatures/Laptop';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero bg-bgHero', styles.heroBanner)}>
      <div className="container">
        <div className="row">
          <div className="relative col col--4">
            <div className="relative top-6 flex flex-col justify-center items-center select-none">
              <div className="relative h-40 w-40">
                <img src="/img/faceTransparentWhite.png" />
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
          <div className="col col--8">
            <div className="w-full h-full flex flex-col justify-center">
            <h1 className="hero__title">{siteConfig.title}</h1>
            <p className="hero__subtitle">{siteConfig.tagline}</p>
            {/* <div className={styles.buttons}>
              <Link
                className="button button--secondary button--lg"
                to="/docs/intro">
                Docusaurus Tutorial - 5min ⏱️
              </Link>
            </div> */}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  return (
    <Layout
      title="Anas Ali"
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
