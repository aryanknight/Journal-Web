import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Img4 from '../../Images/img4.png'
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',maxWidth:'92%'
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
    },
    content: {
      flex: '1 0 auto',
      backgroundColor:'#D7D7D7',
      
    },
    cover: {
      width: '100%',
    }
  }));

export default function Cards() {

    const classes = useStyles();
    const theme = useTheme();

    return (
        <Card className={classes.root}>
            <CardMedia
                className={classes.cover}
                image={Img4}
                title="Live from space album cover"
            />

            <div className={classes.details}>
                <CardContent className={classes.content}>
                <Typography variant="subtitle1" color="textSecondary">
                     Author Name / DD MM YYYY
                </Typography>
                <Typography component="h5" variant="h5" style={{color:"#606060"}}>
                    The title for the research and more text placeholder and more text to show big titles .
                </Typography>
                </CardContent>
            </div>

        </Card>
    )
}
