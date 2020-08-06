import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: <>Books Docs</>,
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        API documentation for Deskera Books. <br/>
        Deskera Books, formerly Deskera ERP, is a cloud-based enterprise resource planning (ERP) solution which covers purchasing, sales, stock & inventory, customer management, vendor management, billing, financial reporting, and more.
      </>
    ),
    link: 'docs/books/started',
  },
  {
    title: <>Sales Docs</>,
    imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <>
        API documentation for Deskera Sales.<br/>
        Deskera Sales helps to manage and grow your customer base with ease.<br/>
      </>
    ),
    link: 'docs/sales/started',
  },
];

function Feature({imageUrl, title, description,link}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('col col--6', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
      <Link to={useBaseUrl(link)} className='doc_link'>
        <u>Get started</u>
      </Link>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="All-in-One Business Accounting and Inventory Software, Run your business at ease with Deskera's Integrated Business Software on the Cloud. Sign up Now!">
      <header className={classnames('hero hero--primary header_colour', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                'button button--outline button--secondary button--lg headerBtn',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/books/started')}>
              Get Started
            </Link>
            <Link
              className={classnames(
                'button button--outline button--secondary button--lg headerBtn',
                styles.getStarted,
              )}
              to={'https://github.com/deskera'}>
              View Code
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
