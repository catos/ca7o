export default function Input(props: React.HTMLProps<HTMLInputElement>) {
  const { id, label, ...rest } = props

  return (
    <div className="mb-6">
      <label
        className="block text-primary-700 text-sm font-bold mb-2"
        htmlFor={id}
      >
        {label}
      </label>
      <input
        className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
        id={id}
        {...rest}
      />
    </div>
  )
}
