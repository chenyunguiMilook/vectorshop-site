import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Easy to Draw',
    Svg: require('@site/static/img/undraw_draw.svg').default,
    description: (
      <>
        VectorShop supports drawing various types of curves and allows you to combine different types of curves in multiple ways to create your desired shapes. This helps you complete your creations in the fastest and most intuitive way.
      </>
    ),
  },
  {
    title: 'Optimize for generating SFSymbol',
    Svg: require('@site/static/img/undraw_sfsymbol.svg').default,
    description: (
      <>
        VectorShop is optimized for generating SFSymbols, allowing you to adjust stroke weight and align baselines seamlessly, boosting efficiency by a hundredfold.
      </>
    ),
  },
  {
    title: 'Easy to Export',
    Svg: require('@site/static/img/undraw_export.svg').default,
    description: (
      <>
        VectorShop offers over ten export presets, making exporting your icons incredibly simple. It also supports converting graphics into code, speeding up your development process.
      </>
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
