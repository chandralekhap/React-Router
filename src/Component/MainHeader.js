import {NavLink} from 'react-router-dom';
import classes from './MainHeader.module.css';

const MainHeader = () =>{

return (

    <div>
        <header className = {classes.header}>
        <nav>
            <ul>
                <li>
                   <NavLink activeClassName= {classes.active}  to = 'Welcome'>Welcome</NavLink> 
                </li>
                <li>
                <NavLink to = 'Product'>Product</NavLink> 
                </li>

            </ul>
        </nav>
        </header>
    </div>
)
}

export default MainHeader;