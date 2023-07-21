import './App.css';
import { Grid, Paper, Typography } from '@mui/material';
import React from "react";
import { useState } from "react";

export function Home () {
  const [input, setInput] = useState("")
  const [first, setFirst] = useState([])

  const insertValue = () => {
    console.log(input);
    setFirst([...first, input]);
    setInput(""); 
  }



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
            <input value={input} onChange = {(e) => setInput(e.target.value)}></input>
            <button onClick = {() => insertValue() }>送信</button>
            {first.map((item, index) => (
                <p key={index}>{item}</p>
              ))}
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};
