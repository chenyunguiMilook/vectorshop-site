import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Translate from '@docusaurus/Translate';

type FeatureItem = {
  title: JSX.Element;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: (
      <Translate>draw.title</Translate>
    ),
    Svg: require('@site/static/img/undraw_draw.svg').default,
    description: (
      <Translate>
      draw.description
      </Translate>
    ),
  },
  {
    title: (
      <Translate>symbol.title</Translate>
    ),
    Svg: require('@site/static/img/undraw_sfsymbol.svg').default,
    description: (
      <Translate>
      sfsymbol.description
      </Translate>
    ),
  },
  {
    title: (
      <Translate>export.title</Translate>
    ),
    Svg: require('@site/static/img/undraw_export.svg').default,
    description: (
      <Translate>
      export.description
      </Translate>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
