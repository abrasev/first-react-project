import { useState } from "react";
import { Button, Typography, Grid, Container, Card, CardMedia, CardActions, CardContent } from '@material-ui/core';
import { Link } from "react-router-dom";

const Try = () => {

    const [users, setUsers] = useState([]);   

    fetch("http://www.projectbachelor.com/Car/getCarsForSale")
        .then((response) => response.json()        
        ).then(response => setUsers(response));

    return ( <div className="container">

         <Container className="cardGrid">
        <Grid container justifyContent="center" spacing={2}>

        {users.map((car, index) =>
        
        <Grid  key={index} item xs={4}> 
            <Card className="card">
                <CardMedia 
                className="cardMedia"
                image={car.Photos}
                title="Image"
                />
                <CardContent>
                    <Typography variant="h5">{car.FullName}</Typography>
                    <Typography variant="h5">$ {car.PricePerDay * 250}</Typography>
                </CardContent>
                <CardActions>        
                <a className="no-deco" href="/contact"> <Button variant="contained" color="secondary">
                    contact
                    </Button></a>
                </CardActions>
            </Card>
        </Grid>
                
        )}

        </Grid>
        <br></br><br></br><br></br>        
        
        <br></br><br></br>

        </Container>
    </div> );
}
 
export default Try;