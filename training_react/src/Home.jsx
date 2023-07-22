import './App.css';
import { Grid, Paper, Typography } from '@mui/material';
import React, { useEffect } from "react";
import { useState } from "react";
import { db } from './Firebase';
import { collection, getFirestore, addDoc, setDoc, doc, getDoc, getDocs } from 'firebase/firestore/lite';

export function Home() {
  const [input, setInput] = useState("")
  const [tasks, setTasks] = useState([])
  const [gal, setGal] = useState('yabai');
  const [receivedData, setReceivedData] = useState(null)

  const getFirebaseData = async () => {
    const TEST = doc(db, 'TEST', 'Tasks');
    const TESTSnapshot = await getDoc(TEST);
    const TESTData = TESTSnapshot.data()
    setReceivedData(TESTData)
  }

  useEffect(() => {
    getFirebaseData()
  }, [])

  useEffect(() => {
    console.log(receivedData)
  }, [receivedData])



  const galWord = (e) => {
    setGal(e.target.value);
  };
  const insertValue = () => {
    console.log(input);
    setTasks(prevTasks => [...prevTasks, { task: input, gal: gal }]);
    setInput("");
  };

  const getColor = (level) => {
    switch (level) {
      case 'yabai':
        return "#ff69b4";
      case 'yabakunai':
        return "#008000";
      default:
        return "#000000";
    }
  }

  const getDeleteValue = (value) => {
    console.log(value);
    setTasks(prevTasks => prevTasks.filter((item, index) => index !== value));
  };

  const displayReceivedData = () => {
    if(receivedData === null){
      return (<></>)
    }
    else{
      return(<p>{receivedData.testMessage}</p>)
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
              {displayReceivedData()}
              <input value={input} onChange={(e) => setInput(e.target.value)}></input>
              <select onChange={(e) => galWord(e)}>
                <option value="yabai">やばい</option>
                <option value="yabakunai">やばくない</option>
              </select>
              <button onClick={() => insertValue()}>送信</button>
              {tasks.map((item, index) => (
                <div style={{ backgroundColor: getColor(item.gal), border: "solid 1px gray", marginBottom: "10px" }}>
                  <div style={{ height: '100px', width: "100%" }} key={index}>{item.task}</div>
                  <button onClick={() => getDeleteValue(index)}>delete</button>
                </div>
              ))}

            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

