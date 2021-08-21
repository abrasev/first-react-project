import { Button, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

const Home = () => {
    return (<div className="container"> 
    <div className="home-text">
    <br></br><br></br><br></br><br></br>
    <Typography variant="h1">Welcome to our Shop</Typography>
    <br></br><br></br><br></br><br></br>
    <Typography variant="h5">Chose your next adventure partner here <span className="point-hand">&#128071;</span></Typography><br></br>
    <br></br><br></br>
    <Link to="/carsForSale"><Button  variant="contained" color="secondary">Shop Now</Button></Link>
    </div>    
    </div>  
    );
}
 
export default Home;