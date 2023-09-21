import Image from "next/image";

interface DescriptionProps {
  propose: string;
  place: string;
  problem: string;
  items?: string[];
  book?: string;
  other?: { title: string; content: string };
}

interface ProjectItemProps {
  image: string;
  title: string;
  description: DescriptionProps;
  odd?: boolean;
  id?: string;
}

const Description = ({
  propose,
  place,
  problem,
  items,
  book,
  other,
}: DescriptionProps) => {
  return (
    <>
      <p>
        <span className="font-bold">Propósito: </span>
        {propose}
      </p>
      <p>
        <span className="font-bold">Lugar de intervención: </span>
        {place}
      </p>
      <p>
        <span className="font-bold">Problemática: </span>
        {problem}
      </p>
      {items && (
        <ul className="list-disc list-inside font-bold pt-2 leading-5 ">
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
      {book && (
        <p>
          <span className="font-bold">Libro: </span> {book}
        </p>
      )}
      {other && (
        <p>
          <span className="font-bold">{other.title}</span> {other.content}
        </p>
      )}
    </>
  );
};

function ProjectItem({ image, title, description, odd, id }: ProjectItemProps) {
  return (
    <article className="project project--odd flex gap-8 p-10" id={id}>
      {odd ? (
        <>
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
        </>
      ) : (
        <>
          <div className="project__info">
            <h3 className="font-serif font-bold text-3xl pb-2">{title}</h3>
            <Description {...description} />
          </div>
          <Image
            src={image}
            alt={title}
            width={694}
            height={438}
            className="project__image"
          />
        </>
      )}
    </article>
  );
}

export default ProjectItem;
