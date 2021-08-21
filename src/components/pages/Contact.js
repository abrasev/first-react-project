import { Button, Card, CardActions, CardContent, Container, Typography } from "@material-ui/core";

const Contact = () => {
    return ( <div className="container">
        <br></br>        
        <Typography variant="h3">Contact sellers:</Typography>
        <br></br><br></br>    <br></br>    
        <Container>
        <div className="fkloatHeith">
        <div className="float-right">
        <Card className="root">
      <CardContent>
        <Typography className="title no-deco" variant="h5" gutterBottom>
          Toni:
        </Typography>
        <Typography className="no-deco" variant="h5" component="h2">
          078/228-996
        </Typography>
        <br></br><br></br><br></br>
        <Typography className="pos no-deco" variant="h5" gutterBottom>
          Email:
        </Typography>
        <Typography className="pos no-deco" variant="h5" gutterBottom>
          toni@cars.com
        </Typography> 
      </CardContent>
      <CardActions>
      </CardActions>
    </Card>
        </div>        
    <div className="float-left">
    <Card className="root">
      <CardContent>
        <Typography className="title no-deco" variant="h5" gutterBottom>
          Krume:
        </Typography>
        <Typography className="no-deco" variant="h5" component="h2">
          078/228-997
        </Typography>
        <br></br><br></br><br></br>
        <Typography className="pos no-deco" variant="h5" gutterBottom>
          Email:
        </Typography>
        <Typography className="pos no-deco" variant="h5" gutterBottom>
          krume@cars.com
        </Typography> 
      </CardContent>
      <CardActions>      
      </CardActions>
    </Card>
    </div>    
    <br></br>
    
    
    </div>
    <a className="no-deco" href="/carsForSale"> <Button variant="contained" color="secondary">
                    Back to Shoping
                    </Button></a>
    </Container>
    </div> 
    );
}
 
export default Contact;