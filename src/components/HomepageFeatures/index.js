import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Học liệu số',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Truy cập kho học liệu số phong phú gồm bài giảng, tài liệu tham khảo, video, bài tập và câu hỏi trắc nghiệm.
        Dễ dàng chia sẻ, tải lên và tùy biến theo từng khối lớp và môn học.
      </>
    ),
  },
  {
    title: 'Soạn học liệu',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Cho phép giáo viên tạo mới các bài giảng, câu hỏi trắc nghiệm, video hướng dẫn, tài liệu PDF,...
        Tùy chỉnh nội dung theo từng môn học, khối lớp hoặc mục tiêu giảng dạy.
        Lưu trữ và chỉnh sửa học liệu dễ dàng ngay trong hệ thống.
      </>
    ),
  },
  {
    title: 'Xem học liệu',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Truy cập nhanh các học liệu đã có trong kho.
        Tìm kiếm học liệu theo từ khóa, môn học, lớp học hoặc loại tài liệu.
        Xem trước nội dung học liệu trực tiếp trên hệ thống.
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
