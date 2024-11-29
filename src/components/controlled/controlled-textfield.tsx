import { BuddyTextField, BuddyTextFieldProps } from "@/components/inputs/buddy-textfield"
import { FC } from "react"
import { useController, useFormContext } from "react-hook-form";

interface ControlledTextFieldProps extends Omit<BuddyTextFieldProps, 'name' | 'onChange' | 'onBlur'> {
  name: string;
}

export const ControlledTextField: FC<ControlledTextFieldProps> = (props) => {
  const { name } = props;
  const { control } = useFormContext()
  const { field, fieldState } = useController({ name, control })
  const { error } = fieldState

  return (
    <BuddyTextField 
      errorMessage={error?.message}
      {...field} 
      {...props} 
    />
  )
}