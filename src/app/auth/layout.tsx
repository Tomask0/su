// src/app/(public)/auth/layout.tsx

import { Box } from '@mui/material';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <Box
      sx={{
        // Ensure the layout covers the full height of the viewport.
        minHeight: '100vh',

        // Use flexbox to arrange children.
        display: 'flex',

        // Horizontally center the children within the layout.
        justifyContent: 'center',

        // Vertically center the children within the layout.
        alignItems: 'center',

        // Apply the default background color from the Material UI theme.
        backgroundColor: 'background.default',

        // Add horizontal padding for better spacing on smaller screens.
        px: 2,
      }}
    >
      {children}
    </Box>
  );
}
