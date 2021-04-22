import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
// import Translate, {translate} from '@docusaurus/Translate';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { DocSearch } from '@docsearch/react'
import styles from './styles.module.css';

//Components
import ExploreContent from "../components/ExploreContent/ExploreContent";
import DiscoverYourPath from "../components/DiscoverYourPath/DiscoverYourPath";
import FeaturedTopics from "../components/FeaturedTopics/FeaturedTopics";
import DownloadableFiles from "../components/DownloadableFiles/DownloadableFiles";

//Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header className={clsx('hero', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          {/* <div className="display-flex justify-content--center margin-vert--md">
            <div className={clsx('margin-right--md', styles.buttons)}>
              <Link
                className={clsx(
                  'button button--outline button--lg',
                  styles.getStarted,
                )}
                to={useBaseUrl('docs/')}>
                <FontAwesomeIcon icon={ faDownload } className="margin-right--md"/>
                Download Zowe
              </Link>
            </div>
            <div className={styles.buttons}>
              <Link
                className={clsx(
                  'button button--outline button--lg',
                  styles.getStarted,
                )}
                to={useBaseUrl('docs/')}>
                Try Zowe
              </Link>
            </div>
          </div> */}
          <div className="searchDiv">
            <DocSearch apiKey="aa" indexName="aa" />
          </div>
        </div>
      </header>
      <ExploreContent />
      <DiscoverYourPath />
      <FeaturedTopics />
      <main>
        <DownloadableFiles />
      </main>
    </Layout>
  );
}

export default Home;
