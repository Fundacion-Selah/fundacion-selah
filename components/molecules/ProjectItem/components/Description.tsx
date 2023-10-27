export interface DescriptionProps {
  propose: string;
  place: string;
  problem: string;
  items?: string[];
  book?: string;
  other?: { title: string; content: string };
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

export default Description;