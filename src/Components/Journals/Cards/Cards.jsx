import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import News from '../../../Images/news.png';
import './Cards.css';

const useStyles = makeStyles({
  media: {
    height: 140,
  },
});

export default function Cards({img,title}) {

    const classes = useStyles();
    return (
        <div className="card">
            <Card className="root" >
                <CardActionArea>
                    <CardMedia
                    className={classes.media}
                    image={img}
                    />
                    <CardContent>
                        <Typography className="title" style={{fontSize:'24px',lineHeight:'1',marginBottom:'10px'}}>
                            {title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Journal on Legal Studies publishes
                            research with an emphasis on important
                            developments in classical analysis, linear
                            and nonlinear functional analysis,
                            ordinary and partial ans.
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <div className="action">
                    PUBLISH
                </div>
                {/* <CardActions>
                    <Button size="small" color="primary">
                    Publish
                    </Button>
                </CardActions> */}
            </Card>
        </div>
    )
}
