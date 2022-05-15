import React from 'react';
import { ChevronDown, ChevronUp } from '../../icons';
import './style.css';
import { useDispatch } from 'react-redux';
import { removeItem, increaseItem, descreaseItem } from '../../features/cart/cartSlice';

const CartItem = ({id, title, price, img, amount}) => {
    const dispatch = useDispatch();
    return (
        <article>
            <div className='cart-item'>
                <img src={img} alt='' />
                <div>
                    <h4>{title}</h4>
                    <h4 className='item-price'>${price}</h4>
                    <button className='remove-btn' onClick={() => dispatch(removeItem({id}))}>remove</button>
                </div>
                <div>
                    <button className='amount-btn' onClick={() => {
                            if(amount === 10){
                                return
                            }
                            dispatch(increaseItem({id}))
                        }
                    }
                    >
                      <ChevronUp />
                    </button>
                    <p className='amount'>{amount}</p>
                    <button className='amount-btn' onClick={() => {
                            if(amount === 1){
                                dispatch(removeItem(id))
                                return
                            }
                            dispatch(descreaseItem({id}))
                        }
                    }
                    >
                      <ChevronDown />
                    </button>
                </div>
            </div>
        </article>
    );
}

export default CartItem;