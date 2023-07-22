import './App.css';
import { Grid, Paper, Typography } from '@mui/material';
import React, { useEffect } from "react";
import { useState } from "react";

export function Home() {
  const [input, setInput] = useState("")
  const [first, setFirst] = useState([])
  const [select, setSelect] = useState("#FF9B9B")

  const insertValue = () => {
    console.log(input);
    console.log(select)
    setFirst([...first, { value: input , important: select}]);
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
              <input value={input} onChange={(e) => setInput(e.target.value)}></input>
              <select onChange={(e) => setSelect(e.target.value)}>
                <option value="#FF9B9B">やばい</option>
                <option value="#FFFEC4">やばくない</option>
              </select>
              <button onClick={() => insertValue()} style={{marginBottom:"2vh"}}>送信</button>
              {first.map((item, index) => (
                <div key={index} style={{backgroundColor:item.important , border:"solid 1px gray", marginLeft:"40vh", marginRight:"40vh"}}>
                  <p key={index} style={{ display: "inline-block" }}>{item.value}</p>
                </div>
              ))}
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};
