import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';

const FeatureList = [
  {
    title: 'European Union',
    image: '/img/Flag_of_Europe.svg',
    redirectUrl : 'docs/europe/introduction-to-eu-privacy',
    description: (
      <>
        Introduction to privacy regulations in European Union.
      </>
    ),
  },
  {
    title: 'United States of America',
    image: '/img/Flag_of_the_United_States.svg',
    redirectUrl : 'docs/usa/introduction-to-privacy-in-usa',
    description: (
      <>
        Introduction to privacy regulations in United States of America.
      </>
    ),
  },
  {
    title: 'United Kingdom',
    image: '/img/Flag_of_the_United_Kingdom.svg',
    redirectUrl : 'docs/uk/introduction-to-uk-privacy',
    description: (
      <>
        Introduction to privacy regulations in United Kingdom.
      </>
    ),
  },
  {
    title: 'Commonwealth of Australia',
    image: '/img/Flag_of_Australia.svg',
    redirectUrl : 'docs/australia/introduction-to-privacy-in-australia',
    description: (
      <>
        Introduction to privacy regulations in Commonwealth of Australia.
      </>
    ),
  },
];

function Feature({title, description, redirectUrl, image}) {
  return (
    <div className={clsx('col col--3')}>
      <Link to={useBaseUrl(redirectUrl)} className="text--no-decoration">
        <div className={clsx('text--primary', styles.card)}>
          <div className="text--center">
            <img src={useBaseUrl(image)} width="160" height="100" alt={title} />
          </div>
          <div className="text--center padding-horiz--md">
            <Heading as="h3">{title}</Heading>
            <p>{description}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container py-100">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
