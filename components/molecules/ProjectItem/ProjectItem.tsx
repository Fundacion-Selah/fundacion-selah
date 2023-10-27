import Image from "next/image";
import Description, { DescriptionProps } from "./components/Description";

interface ProjectItemProps {
  image: string;
  title: string;
  description: DescriptionProps;
  odd?: boolean;
  id?: string;
}

function ProjectItem({ image, title, description, odd, id }: ProjectItemProps) {
  const className = `project flex flex-wrap lg:flex-nowrap gap-8 py-10 px-0 lg:p-10 ${
    !odd ? "flex-row-reverse" : ""
  }`;

  return (
    <article className={className} id={id}>
      <Image
        src={image}
        alt={title}
        width={694}
        height={438}
        className="project__image"
      />
      <div className="project__info">
        <h3 className="font-serif font-bold text-3xl pb-2">{title}</h3>
        <Description {...description} />
      </div>
    </article>
  );
}

export default ProjectItem;
