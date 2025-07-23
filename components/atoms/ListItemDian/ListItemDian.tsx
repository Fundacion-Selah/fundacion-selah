type ListItemDianProps = {
  href: string;
  title: string;
};

const ListItemDian = ({ href, title }: ListItemDianProps) => {
  return (
    <li>
      <a
        className="hover:underline"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {title}
      </a>
    </li>
  )
}

export default ListItemDian;
