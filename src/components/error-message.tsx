import { alpha, Box, Stack, Typography } from "@mui/material"
import { FC } from "react";

export interface ErrorMessageProps {
  errors: string | string[];
}

export const ErrorMessage: FC<ErrorMessageProps> = ({ errors }) => {
  return (
    <Box
      sx={{ 
        padding: 1.5,
        borderRadius: ({ shape }) => `${shape.borderRadius}px`,
        backgroundColor: ({ palette }) => alpha(palette.error.light, .2),
        border: '1px solid',
        borderColor: ({ palette }) => palette.error.main,
      }}
    >
      {typeof errors === 'object' 
        ? errors.map((error, index) => (
          <Stack 
            direction="row" 
            alignItems="center" 
            gap={2}
          >
            <Box 
              sx={{ 
                width: '5px', 
                height: '5px', 
                borderRadius: '5px', 
                backgroundColor: ({ palette }) => palette.error.main 
              }} 
            />
            <Typography 
              key={index + error} 
              sx={{ color: ({ palette }) => palette.error.main }}
            >
              {error}
            </Typography>
          </Stack>
        )) 
        : <Typography sx={{ color: ({ palette }) => palette.error.main, }}>{errors}</Typography>
      }
    </Box>
  )
}