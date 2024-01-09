import * as React from "react"

// TODO: customFormHook: https://www.telerik.com/blogs/how-to-build-custom-forms-react-hooks
export type OnSubmitType = (values: any, event: any, error: any) => void //Promise<void>
export type StatusType = "idle" | "pending" | "rejected" | "success"
export type ChangeEventType = HTMLInputElement | { name?: string; value: any }

/**
 * TODO: remove | undefined (check login)
 */
function useForm<T>({
  initialValues,
  onSubmit,
  onChange,
}: {
  initialValues: T
  onSubmit: OnSubmitType
  onChange?: (values: T, event: React.ChangeEvent<ChangeEventType>) => void
}) {
  const [values, setValues] = React.useState<T>(initialValues)
  const [errors] = React.useState({})

  const handleSubmit = async (event: any) => {
    if (event) {
      event.preventDefault()
    }

    // TODO: support validation ?
    onSubmit(values, event, errors)
  }

  const handleChange = (event: React.ChangeEvent<ChangeEventType>) => {
    const { name, value } = event.target
    if (name && values) {
      setValues({
        ...values,
        [name]: value,
      })
    }

    if (onChange) {
      onChange(values, event)
    }
  }

  const reset = () => {
    setValues(initialValues)
  }

  return {
    values,
    setValues,
    handleSubmit,
    handleChange,
    reset,
  }
}

export default useForm
