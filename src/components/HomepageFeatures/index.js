import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Nhập điểm, nhận xét',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Giao diện được thiết kế trực quan, giúp giáo viên nhanh chóng nhập điểm và đưa ra nhận xét cá nhân hóa cho từng học sinh. Bạn chỉ cần tập trung vào việc đánh giá – chúng tôi sẽ lo phần còn lại.
      </>
    ),
  },
  {
    title: 'Xem báo cáo học tập',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Hệ thống tự động tổng hợp điểm số, nhận xét và biểu đồ học tập, giúp bạn nắm bắt kết quả học tập của học sinh mọi lúc, mọi nơi. Tất cả nằm trong một báo cáo trực quan, dễ hiểu.
      </>
    ),
  },
  {
    title: 'Học liệu số',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
       Truy cập, chia sẻ và mở rộng kho học liệu với khả năng tùy biến theo từng môn học và cấp lớp. Nền tảng hỗ trợ tích hợp nội dung số, giữ nguyên cấu trúc nhưng luôn sẵn sàng mở rộng khi cần.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
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

export default function HomepageFeatures() {
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
