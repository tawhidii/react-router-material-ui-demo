import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Card,CardActionArea,
    CardMedia,CardContent,Typography,CardActions,Button} from '@material-ui/core'
import { useHistory } from 'react-router-dom';


const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 130,
    },
    })
const Country = (props) => {
    const {name,subregion,flag} = props.country
    const classes = useStyles()
     
    const history = useHistory()
    const hadleCountryDetails = (countryName) =>{
      history.push(`/country/${countryName}`)
    }
    return (
        <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={flag}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
               {name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                {subregion}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" variant="contained" color="primary" onClick={()=>hadleCountryDetails(name)}>
            Details
          </Button>
        </CardActions>
      </Card>
    );
};

export default Country;