import './App.css';
import { Grid, Paper, Typography } from '@mui/material';

export function Home () {
  return (
    <div 
      sx={{ 
        flexGrow: 1, 
        p: 2 // padding: 2
      }}
    >
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper 
            sx={{ 
              p: 2, // padding: 2
              textAlign: 'center', 
              color: 'text.secondary' 
            }}
          >
            <Typography variant="h5" component="h2">
             chinpo
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};
