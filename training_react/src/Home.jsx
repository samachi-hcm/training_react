import './App.css';
import { Grid, Paper, Typography } from '@mui/material';
import React from "react";
import { useState } from "react";

export function Home () {
  const [input, setInput] = useState("")
  const [tasks, setTasks] = useState([])
  const [gal, setGal] = useState('yabai');

  const galWord = (e) => {
    setGal(e.target.value);
  };
　
  const insertValue = () => {
　　
    console.log(input);
    setTasks(prevTasks => [...prevTasks, {task: input, gal: gal}]);
    setInput("");   
  };

  const getColor = (level) => {
    switch(level) {
      case 'yabai':
        return "#ff69b4";
      case 'yabakunai':
        return "#008000";
      default:
        return "#000000";
    }
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
            <select　onChange = {(e) => galWord(e)}>
              <option value="yabai">やばい</option>
              <option value="yabakunai">やばくない</option>
            </select>
            <button onClick = {() => insertValue() }>送信</button>
            {tasks.map((item, index) => (
                <div style={{ backgroundColor: getColor(item.gal), height: '100px', width: "100%"}} key={index}>{item.task}</div>
              ))}
              
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

