import { ControlledTextField } from "@/components/controlled/controlled-textfield";
import { useUpdateUserMutation } from "@/features/user/api/user-api";
import { User } from "@/types/user";
import { LoadingButton } from "@mui/lab";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Stack } from "@mui/material"
import { FC, useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup'
import { UpdateUserSchema, updateUserSchema } from "@/features/user/schema/update-user-schema";

interface UpdateUserModalProps {
  open: boolean;
  onClose: () => void;
  defaultValues: User | null;
}

export const UpdateUserModal: FC<UpdateUserModalProps> = ({
  onClose,
  open,
  defaultValues
}) => {
  const [updateFn, { isLoading }] = useUpdateUserMutation()
  const methods = useForm<UpdateUserSchema>({
    resolver: yupResolver(updateUserSchema)
  })
  const { reset, handleSubmit } = methods
  
  const handleClose = () => {
    onClose()
    reset()
  }

  const onSubmit = async (values: UpdateUserSchema) => {
    try {
      await updateFn(values)
      handleClose()
    } catch (e) {
      // Show error when request error
    }
  }

  useEffect(() => {
    if (!defaultValues) return;

    // ID should be not sent by body, just following the requirement
    reset({
      id: defaultValues.id ?? undefined,
      name: defaultValues.name ?? undefined,
      email: defaultValues.email ?? undefined,
      phoneNumber: defaultValues.phoneNumber ?? undefined,
    })
  }, [defaultValues])
  
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Update User</DialogTitle>
      <DialogContent>
        <FormProvider {...methods}>
          <Stack gap={2} minWidth={500}>
            <ControlledTextField fullWidth label="Name" name="name" />
            <ControlledTextField fullWidth label="Email" name="email" disabled />
            <ControlledTextField fullWidth label="Phone Number" name="phoneNumber" />
          </Stack>
        </FormProvider>
      </DialogContent>
      <DialogActions>
        <Button 
          onClick={handleClose} 
          variant="outlined"
        >
          Cancel
        </Button>
        <LoadingButton
          variant="contained"
          loading={isLoading}
          onClick={handleSubmit(onSubmit)}
        >
          Submit
        </LoadingButton>
      </DialogActions>
    </Dialog>
  )
}