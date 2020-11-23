import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import STATE from '../state'
import { Link } from 'react-router-dom'
import './css/card.css'

const useStyles = makeStyles({
    root: {
        maxWidth: 255,
        padding:'10px',
        margin:'10px',
        // border: '2px solid'
    },
});

export default function ImgCard() {
    const classes = useStyles();

    const stateData = STATE.store_data

    return (
        <div className='card_div'>
            {stateData.map((value, index) => {
                return (
                    <Card key={index} className={classes.root}>
                            <Link className='cards_link'  to={`/item/${value.id}`}>

                            <CardActionArea  >

                                <CardMedia
                                    component="img"
                                    alt="Contemplative Reptile"
                                    height="140"
                                    image={value.img}
                                    title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {value.name}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                       RS : {value.price}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Link>

                    </Card>
                )
            })
            }
        </div>
    );
}
