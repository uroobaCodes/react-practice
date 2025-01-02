import {
  useState,
  useContext,
  useReducer,
  useEffect,
  createContext,
} from "react";
import cartItems from "./data";
import reducer from "./reducer";

const url = `https://www.course-api.com/react-useReducer-cart-project`;

// create context
const CartAppContext = createContext();

// initial state
const initialState = {
  loading: false,
  cart: cartItems,
  total: 0,
  amount: 0,
};

// use context hook
const useCartAppContext = () => {
  return useContext(CartAppContext);
};

// cart app Provider
const CartAppProvider = ({ children }) => {
  // const [cart, setCart] = useState(cartItems);
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: "GET_TOTAL" });
  }, [state.cart]);

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };
  const remove = (id) => {
    dispatch({ type: "REMOVE", payload: id });
  };

  const increase = (id) => {
    dispatch({ type: "INCREASE", payload: id });
  };
  const decrease = (id) => {
    dispatch({ type: "DECREASE", payload: id });
  };

  // combine these two to rid of duplicity in the reducer
  const toggleAmount = (id, type) => {
    dispatch({ type: "TOGGLE_AMOUNT", payload: { id, type } });
  };

  const fetchData = async () => {
    dispatch({ type: "LOADING" });
    const response = await fetch(url);
    const cart = await response.json();
    dispatch({ type: "DISPLAY_ITEMS", payload: cart });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <CartAppContext.Provider
      value={{ ...state, clearCart, remove, increase, decrease, toggleAmount }}
    >
      {children}
    </CartAppContext.Provider>
  );
};

export { useCartAppContext };
export default CartAppProvider;
