import { 
  FormControl,
  FormHelperText,
  InputBase,
  InputLabel,
  InputProps,
} from "@mui/material"
import { FC } from "react"

export interface BuddyTextFieldProps extends InputProps {
  label?: string;
  errorMessage?: string;
}

export const BuddyTextField: FC<BuddyTextFieldProps> = ({ label, errorMessage, ...props }) => {
  return (
    <FormControl error={!!errorMessage} variant="standard">
      {label && <InputLabel shrink htmlFor={props.id}>{label}</InputLabel>}
      <InputBase {...props} />
      {errorMessage && <FormHelperText error>{errorMessage}</FormHelperText>}
    </FormControl>
  )
}