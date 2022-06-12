import React from 'react';
import { createTheme, ThemeProvider, experimental_sx as sx } from '@mui/material/styles';

declare module '@mui/material/styles' {
    interface Theme {
        status: {
            danger: string;
        };
    }
    // allow configuration using `createTheme`
    interface ThemeOptions {
        status?: {
            danger?: string;
        };
    }
}

const theme = createTheme({
    components: {
        // Name of the component
        MuiListItemIcon: {
            styleOverrides: {
                // Name of the slot
                root: sx({
                  color:'white'
                }),
            },
        },
    },
});
const CustomTheme: React.FC = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    );
};

export default CustomTheme;