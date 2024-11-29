import { useGetUsersQuery } from '@/features/user/api/user-api';
import { UpdateUserModal } from '@/features/user/components/update-user-modal';
import { User } from '@/types/user';
import { Avatar, IconButton } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useState } from 'react';
import { Edit } from '@mui/icons-material';

export const UserGrid = () => {
  const { data, isLoading } = useGetUsersQuery('users')
  const [editUser, setEditUser] = useState<User | null>(null)
  
  const handleCloseForm = () => {
    setEditUser(null)
  }
  
  const columns: GridColDef<User>[] = [
    {
      field: 'avatar',
      headerName: '',
      width: 100,
      renderCell: ({ row }) => <Avatar src={row.avatar ?? undefined} />
    },
    {
      field: 'name',
      headerName: 'Name',
      flex: 1,
      minWidth: 150,
    },
    {
      field: 'email',
      headerName: 'Email',
      flex: 1,
      minWidth: 150,
    },
    {
      field: 'phoneNumber',
      headerName: 'Phone Number',
      flex: 1,
      minWidth: 150,
    },
    {
      field: 'action',
      headerName: '',
      width: 50,
      renderCell: ({ row }) => (
        <IconButton
          size='small' 
          onClick={() => setEditUser(row)}
        >
          <Edit fontSize='small' />
        </IconButton>
      )
    }
  ]
  
  return (
    <>
      <DataGrid
        columns={columns}
        loading={isLoading}
        rows={data}
        disableRowSelectionOnClick
        disableColumnSorting
        disableColumnFilter
      />
      <UpdateUserModal 
        defaultValues={editUser}
        open={!!editUser} 
        onClose={handleCloseForm} 
      />
    </>
  )
}