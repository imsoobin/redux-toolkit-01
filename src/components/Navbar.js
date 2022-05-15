import {CartIcon} from '../icons';
import { useSelector } from 'react-redux';

const NavBar = () => {
    const {cartItems} = useSelector((state) => state.cart);
    // console.log(cartItems);
    return (
        <nav>
            <div className='nav-center'>
            <h3>Redux-toolkit</h3>
            <div className='nav-container'>
                <CartIcon />
            <div className='amount-container'>
                <p className='total-amount'>{cartItems.length}</p>
            </div>
        </div>
            </div>
        </nav>
    )
}

export default NavBar;