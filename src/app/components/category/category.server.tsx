import CategoryIconHotImg from '../../../public/home/1_category_icon_Hot_80x80.svg';
import CategoryIconLoveImg from '../../../public/home/1_category_icon_love_80x80.svg';
import CategoryIconLockImg from '../../../public/home/1_category_icon_Lock_80x80.svg';
import Link from 'next/link';
import Image from 'next/image';
import styles from './category.module.css';

type Cetegory = {
  src: string;
  title: string;
  alt: string;
  link: string;
};

export default function Categorys() {
  const categories: Array<Cetegory> = [
    {
      alt: 'categoryHot',
      title: 'HOT',
      src: CategoryIconHotImg,
      link: 'survey',
    },
    {
      alt: 'categoryLove',
      title: '연애',
      src: CategoryIconLoveImg,
      link: 'survey',
    },
    {
      alt: 'categoryLock',
      title: '썸',
      src: CategoryIconLockImg,
      link: 'survey',
    },
    {
      alt: 'categoryLock',
      title: '꼰대력',
      src: CategoryIconLockImg,
      link: 'survey',
    },
  ];

  const { wrapS, itemS, labelS } = styles;

  return (
    <div className={wrapS}>
      {categories.map((category, index) => (
        <Link key={category.src + index.toString()} href={category.link}>
          <div className={itemS}>
            <Image
              src={category.src}
              alt={category.alt}
              width={80}
              height={80}
            />
            <div className={labelS}>{category.title}</div>
          </div>
        </Link>
      ))}
    </div>
  );
}
