import { ListItemDian } from "@/components/atoms";

type ListDianProps = {
  items: { title: string; href: string }[];
  title?: string;
}

const ListDian = ({ items, title }: ListDianProps) => {
  return (
    <>
      {title ? (
        <h2 className="text-3xl font-bold font-serif">{title}</h2>
      ) : null}
      <ul className="list-disc list-inside font-bold py-2">
        {items.map(item => (
          <ListItemDian key={item?.title} href={item?.href} title={item?.title} />
        ))}

      </ul>
    </>
  )
}

export default ListDian;
