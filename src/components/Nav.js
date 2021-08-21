import { Link } from "react-router-dom"

const Nav = () => {
    return ( <div className="nav">
        
        <span className="logo-left"><Link className="no-deco" to="/">NavBar</Link></span>
        
        <ul>
            <li><Link className="no-deco" to="/carsForSale">Cars</Link></li>
            <li><Link className="no-deco" to="/recomendedServices">Recomended Services</Link></li>
            <li><Link className="no-deco" to="/contact">Contact</Link></li>
            </ul>
        
        
               
    </div> );
}
 
export default Nav;