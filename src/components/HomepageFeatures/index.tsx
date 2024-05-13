import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: '易于使用',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: <>EasyPage API 形式表单定义，让描述更简洁、更规范</>,
  },
  {
    title: '专注业务',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        EasyPage
        接管了复杂的状态管理、副作用：联动、校验等、内敛了很多常用的场景，让我们能更专注于业务本身。
      </>
    ),
  },
  {
    title: '便捷扩展',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>Easy Page 可以让你根据自身场景诉求，便捷扩展适配自身组件库。</>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
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
