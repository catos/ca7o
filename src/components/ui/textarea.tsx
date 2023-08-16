interface IInput extends React.HTMLAttributes<HTMLTextAreaElement> {
  required?: boolean
  name: string
  label: string
}

export default function Input(props: IInput) {
  const { id, label, ...rest } = props

  return (
    <div>
      <label
        className="block text-primary-700 text-sm font-bold mb-2"
        htmlFor={id}
      >
        {label}
      </label>
      <textarea
        className="appearance-none h-32 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:h-64"
        id={id}
        {...rest}
      />
    </div>
  )
}
