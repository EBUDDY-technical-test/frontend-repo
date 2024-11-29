import { colorPalette, fontFamily } from "@/theme/constants";
import { alpha, createTheme } from "@mui/material";

export const themeConfig = createTheme({
  palette: {
    ...colorPalette,
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiInputBase: {
      styleOverrides: {
        root: {
          'label + &': {
            marginTop: 24,
          },
        },
        input: {
          borderRadius: 8,
          position: 'relative',
          backgroundColor: colorPalette.background.paper,
          border: '1px solid',
          borderColor: colorPalette.divider,
          fontSize: 16,
          padding: '10px 12px',
          fontFamily,
          transition: 'all .15s ease-in-out',
          '&:focus': {
            boxShadow: `${alpha(colorPalette.primary.main, 0.25)} 0 0 0 0.2rem`,
            borderColor: colorPalette.primary.main,
          },
        }
      }
    },
    MuiButton: {
      defaultProps: {
        disableRipple: true,
        variant: 'contained',
      },
      variants: [
        {
          props: {
            variant: 'contained',
            color: 'primary',
          },
          style: {
            backgroundColor: colorPalette.primary.main,
            borderColor: colorPalette.primary.main,
            '&:hover': {
              backgroundColor: colorPalette.primary.light,
            },
            '&:active': {
              backgroundColor: colorPalette.primary.main,
              borderColor: colorPalette.primary.dark,
            },
            '&:focus': {
              boxShadow: `0 0 0 0.2rem ${alpha(colorPalette.primary.main, 0.25)}`,
            },
          }
        }
      ],
      styleOverrides: {
        root: {
          boxShadow: 'none',
          textTransform: 'none',
          fontSize: 16,
          padding: '6px 12px',
          border: '1px solid',
          lineHeight: 1.5,
          '&:hover': {
            boxShadow: 'none',
          },
        },
        text: { fontFamily }
      }
    }
  },
  typography() {
    return ({ 
      fontFamily,
      body1: {
        fontSize: 16,
      }
    })
  },
});

