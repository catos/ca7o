import * as React from "react"

export type StatusType = "idle" | "pending" | "rejected" | "success"
export type ChangeEventType = HTMLInputElement | { name?: string; value: any }

/**
 * Inspiration:
 * - https://www.telerik.com/blogs/how-to-build-custom-forms-react-hooks
 * - https://react-hook-form.com/get-started
 *
 * TODO: add status (idle, pending, rejected, success) on submit
 * TODO: support validation ?
 * TODO: add throttled onChange ?
 */
function useForm<T>({
  initialValues,
  onSubmit,
  onChange,
}: {
  initialValues: T
  onSubmit: (values: T, event: any, error: any) => void
  onChange?: (values: T, event: React.ChangeEvent<ChangeEventType>) => void
}) {
  const [values, setValues] = React.useState<T>(initialValues)
  const [errors] = React.useState({})

  const handleSubmit = async (event: any) => {
    if (event) {
      event.preventDefault()
    }

    onSubmit(values, event, errors)
  }

  const handleChange = (event: React.ChangeEvent<ChangeEventType>) => {
    const { name, value } = event.target

    if (!name) {
      return
    }

    const _values = { ...values, [name]: value }
    setValues(_values)

    if (onChange) {
      onChange(_values, event)
    }
  }

  const reset = () => {
    setValues(initialValues)
  }

  const register = (name: string) => {
    const key = name as keyof T

    return {
      id: name,
      name,
      onChange: handleChange,
      value: values[key],
    }
  }

  return {
    values,
    register,
    handleSubmit,
    handleChange,
    reset,
  }
}

export default useForm
