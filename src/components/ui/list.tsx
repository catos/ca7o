interface IList extends React.HTMLAttributes<HTMLUListElement> {
  children: React.ReactNode
}

export default function List({ children, ...rest }: IList) {
  return (
    <ul className="pl-4 list-disc" {...rest}>
      {children}
    </ul>
  )
}
