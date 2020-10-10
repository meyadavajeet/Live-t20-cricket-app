import React, { useState } from 'react';
import { Card, CardActions, CardContent, Grid, Typography, Button, Dialog, DialogActions, DialogContentText, DialogTitle } from '@material-ui/core';
import Verses from '../img/v-s.jpg';
import { getMatchDetails } from '../api/Api';

const MatchCard = ({ match }) => {
    //state for setting match details
    const [matchDetail, setMatchDetail] = useState({}); //bydefault match detail state is empty
    //state for opening dialoge box
    const [open, setOpen] = useState(false);

    const handleClick = (id) => {
        // alert("match id is" + id)
        getMatchDetails(id)
            .then((data) => {
                console.log("Match data ", data);
                setMatchDetail(data);
                handleClickOpen();
            }
            )

            .catch((error) => console.log(error))
    }

    //for modal open and close
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const getMatchesCard = () => {
        return (
            <Grid container>
                <Card
                    style={{
                        background: match.matchStarted ? "#e2e2e2" : "",
                        marginTop: 15,
                    }}
                >
                    <CardContent>
                        <Grid container justify="center" alignItems="center" spacing={4}>
                            <Grid item>
                                <Typography variant="h5">{match['team-1']}</Typography>
                            </Grid>
                            <Grid item>
                                <img
                                    style={{ width: 85 }}
                                    src={Verses}
                                    alt="V/s"
                                />
                            </Grid>
                            <Grid item>
                                <Typography variant="h5">{match['team-2']}</Typography>
                            </Grid>
                        </Grid>
                    </CardContent>
                    <CardActions>
                        <Grid container justify="center">
                            <Button
                                variant="outlined"
                                color="secondary"
                                onClick={() => {
                                    handleClick(match.unique_id)
                                }}
                            > Show Detail
                            </Button>
                            <Button
                                style={{ marginLeft: 5 }}
                                variant="contained"
                                color="primary"
                            >
                                Starting time {new Date(match.dateTimeGMT).toLocaleString()}
                            </Button>
                        </Grid>
                    </CardActions>
                </Card>

            </Grid>
        )
    }

    const getDialog = () => (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle id="alert-dialog-title">{"Match Details..."}
            </DialogTitle>
            <DialogContentText id="alert-dialog-description">
                <Typography>
                    Match  <span style={{ fontStyle: "italic", fontWeight: "bold", }}>
                        {
                            matchDetail.matchStarted ? "Started" : "Still not Started"
                        }
                    </span>
                </Typography>
                <Typography>
                    Score <span style={{ fontStyle: "italic", fontWeight: "bold", }} >
                        {matchDetail.score}
                    </span>
                </Typography>
                <Typography>
                    Status <span style={{ fontStyle: "italic", fontWeight: "bold", }} >
                        {matchDetail.stat}
                    </span>
                </Typography>
            </DialogContentText>
            <DialogActions>
                <Button onClick={handleClose} color="primary" autoFocus>
                    Close
                </Button>
            </DialogActions>
        </Dialog>
    )

    return (
        <>
            {match.type = "Twenty20" ? getMatchesCard() : "No Twenty 20 Match Available Right Now"}
            {getDialog()}

        </>
    )
}

export default MatchCard;