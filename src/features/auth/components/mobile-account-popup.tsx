import { signoutActions } from "@/features/auth/actions/signout-actions";
import { useAuth } from "@/features/auth/context/auth-provider"
import { Logout } from "@mui/icons-material";
import { Avatar, Box, Divider, IconButton, ListItemIcon, ListItemText, Menu, MenuItem, Stack, Typography } from "@mui/material"
import { useState } from "react";

export const AccountPopup = () => {
  const { account } = useAuth()
  
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  
  return (
    <Box>
      <IconButton sx={{ p: 0 }} onClick={handleClick}>
        <Avatar src={account?.avatar ?? ''} />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          paper: {
            sx: {
              width: 230
            }
          }
        }}
      >
        <Stack p="10px 18px 15px 18px">
          <Typography fontSize={14} fontWeight={500}>{account?.name}</Typography>
          <Typography fontSize={12}>{account?.email}</Typography>
        </Stack>
        <Divider />
        <MenuItem onClick={signoutActions}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          <ListItemText>Sign out</ListItemText>
        </MenuItem>
      </Menu>
    </Box>
  )
}