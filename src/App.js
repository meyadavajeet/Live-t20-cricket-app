import React, { useEffect, useState } from 'react';
import './App.css';
import { Grid } from '@material-ui/core';
import Navbar from './components/Navbar'
import { getUpcommingMatches } from './api/Api';
import MatchCard from './components/MatchCard';
function App() {

  const [matches, setMatches] = useState([]); //initail value is empty array

  useEffect(() => {
    getUpcommingMatches()
      .then((data) => {
        setMatches(data.matches);
        console.log(data);
      })
      .catch((error) => console.log(error));
  }, []);


  return (
    <div className="App">
      <Navbar />
      <Grid container>
        <Grid item sm={2}></Grid>
        <Grid item sm={8}>
          <Typography variant="h3" style={{ fontWeight: 900 }} color="secondary" >Live T20</Typography>
          {
            matches.map((match) => (
              <MatchCard match={match} key={match.unique_id} />
            ))
          }
          <Grid item xs={2}></Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
