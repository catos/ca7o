interface IListItem extends React.HTMLAttributes<HTMLLIElement> {
  children: React.ReactNode
}

export default function ListItem(props: IListItem) {
  return <li {...props} />
}
