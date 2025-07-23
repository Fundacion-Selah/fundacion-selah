const ListItemDian = ({ href, title }) => {
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
