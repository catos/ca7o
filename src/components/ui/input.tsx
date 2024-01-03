type Props = {
  label?: string
} & React.HTMLProps<HTMLInputElement>

export default function Input(props: Props) {
  const { id, label, ...rest } = props

  return (
    <div>
      {label && (
        <label
          className="block text-primary-700 text-sm font-bold mb-2 cursor-pointer"
          htmlFor={id}
        >
          {label}
        </label>
      )}
      <input
        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id={id}
        {...rest}
      />
    </div>
  )
}
