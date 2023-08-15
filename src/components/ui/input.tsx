export default function Input(props: React.HTMLProps<HTMLInputElement>) {
  const { id, label, ...rest } = props

  return (
    <div>
      <label
        className="block text-primary-700 text-sm font-bold mb-2"
        htmlFor={id}
      >
        {label}
      </label>
      <input
        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id={id}
        {...rest}
      />
    </div>
  )
}
