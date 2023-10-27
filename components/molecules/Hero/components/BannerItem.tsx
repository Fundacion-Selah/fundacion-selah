import Link from "next/link";

type BannerProps = {
  image: string;
  title: string;
  description: string;
  link: string;
};

const BannerItem = ({ image, title, description, link }: BannerProps) => {
  return (
    <li
      className="banner__item w-[80vw] max-w-[80vw] lg:max-w-none rounded-xl lg:rounded-none snap-center snap-always"
      style={{ backgroundImage: `url(${image})` }}
    >
      <Link href={`/${link}`} className="w-full banner__link">
        <div className="banner__info text-ghost-white">
          <h1 className="info__title font-serif text-xl lg:text-4xl font-bold mb-1">
            {title}
          </h1>
          <p className="info__description text-sm">{description}</p>
        </div>
      </Link>
    </li>
  );
};
export default BannerItem;
