import NavBar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTotalItem, getItems } from "./features/cart/cartSlice";
import Modal from "./components/CartItem/Modal";

function App() {
  const {cartItems, isLoading} = useSelector((state) => state.cart);
  const {isOpen} = useSelector((state) => state.modal);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getItems())
  }, [])

  useEffect(() => {
    dispatch(getTotalItem())
  }, [cartItems])

  if(isLoading){
    return(
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    )
  }

  return (
  <main>
    {isOpen && <Modal />}
    <NavBar />
    <CartContainer />
  </main>
  )
}
export default App;
