import React from 'react';
import './App.css';
import { Box, CssVarsProvider } from '@mui/joy';
import { CssBaseline } from '@mui/material';
import Sidebar from './components/Sidebar';
import Home from './meuns/Home';

function App() {
  return (
    <CssVarsProvider disableTransitionOnChange>
      <CssBaseline />
      <Box sx={{ display: 'flex', minHeight: '100dvh'}}>
        {/* <Header /> */}
        <Sidebar />
        <Box
          component="main"
          className="MainContent"
          sx={{
            px: { xs: 2, md: 6 },
            pt: {
              xs: 'calc(12px + var(--Header-height))',
              sm: 'calc(12px + var(--Header-height))',
              md: 3,
            },
            pb: { xs: 2, sm: 2, md: 3 },
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            minWidth: 0,
            height: '100dvh',
            gap: 1,
          }}
        >
          <Home />
        </Box>
      </Box>
    </CssVarsProvider>
  );
}

export default App;
