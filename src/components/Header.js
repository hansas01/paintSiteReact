
import { useState } from 'react'; 
import {
    Navbar,
    NavbarBrand,
    Collapse,
    NavbarToggler,
    Nav,
    NavItem
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import AlamoLogo from '../app/assets/img/alamoICONO.png';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <Navbar style={{ backgroundColor: '#7B9E89' }} dark sticky='top' expand='md'>
            <NavbarBrand className='ms-5 d-flex align-items-center' href='/'>
                <div>
                    <img src={AlamoLogo} alt='alamo logo' style={{ width: '100px', height: '100px' }} />
                </div>
                <div className='ms-3'>
                    <h2 className='mt-2'>Alamo Design</h2>
                </div>
            </NavbarBrand>

            <NavbarToggler onClick={() => setMenuOpen(!menuOpen)}/>
            <Collapse isOpen={menuOpen} navbar>
                <Nav className='ms-auto' navbar>
                    <NavItem>
                        <NavLink className='nav-link' to='/'>
                            <i className='fa fa-home fa-lg' /> Inicio 
                        
                        </NavLink>
                    </NavItem>
                        <NavLink className='nav-link' to='/Servicios'>
                            <i className='fa fa-list fa-lg' /> Servicios
                        </NavLink>  
                    <NavItem>
                        <NavLink className='nav-link' to='/Nosotros'>
                            <i className='fa fa-info fa-lg' /> Nosotros
                        </NavLink>  
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/Portafolio'>
                            <i className='fa fa-address-card fa-lg' /> Portafolio
                        </NavLink> 
                    </NavItem> 
                </Nav>
            </Collapse>
        </Navbar>
    );
}

export default Header;
