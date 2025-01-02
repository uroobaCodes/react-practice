// the state in our reducer is the initial state.

const reducer = (state, action) => {
  switch (action.type) {
    case "CLEAR_CART":
      return { ...state, cart: [] };

    case "REMOVE":
      return {
        ...state,
        cart: state.cart.filter((cartItem) => cartItem.id !== action.payload),
      };

    case "INCREASE":
      let tempCart = state.cart.map((cartItem) => {
        if (cartItem.id === action.payload) {
          return { ...cartItem, amount: cartItem.amount + 1 };
        }
        return cartItem;
      });
      return { ...state, cart: tempCart };

    case "DECREASE":
      let cartTwo = state.cart.map((cartItem) => {
        if (cartItem.id === action.payload) {
          return { ...cartItem, amount: cartItem.amount - 1 };
        }
        return cartItem;
      });
      let cartFilter = cartTwo.filter((cartItem) => cartItem.amount !== 0);
      return { ...state, cart: cartFilter };

    // another way of writing this:
    //  let cartTwo = state.cart.map((cartItem) => {
    //    if (cartItem.id === action.payload) {
    //      return { ...cartItem, amount: cartItem.amount - 1 };
    //    }
    //    return cartItem;
    //  }).filter(cartItem => cartItem !== 0)

    //  return { ...state, cart: cartTwo };

    // mixing increase and decrease:

    case "TOGGLE_AMOUNT":
      let changedCart = state.cart
        .map((cartItem) => {
          if (cartItem.id === action.payload.id) {
            if (action.payload.type === "inc") {
              return { ...cartItem, amount: cartItem.amount + 1 };
            }
            if (action.payload.type === "dec") {
              return { ...cartItem, amount: cartItem.amount - 1 };
            }
          }
          // end of parent if condition
          // return all the cartItems when they dont go through changes
          return cartItem;
        })
        .filter((cartItem) => cartItem.amount !== 0);
      return { ...state, cart: changedCart };

    case "GET_TOTAL":
      // we declare total and amount with let because we need to set the total to two decimal places
      let { total, amount } = state.cart.reduce(
        (cartAccumulator, currentCartItem) => {
          // const { price, amount } = currentCartItem;
          const { price, amount } = currentCartItem;

          // console.log(price, amount);
          cartAccumulator.amount = cartAccumulator.amount + amount;
          // or
          // cartAccumulator.amount += amount
          const amountPrice = amount * price;
          cartAccumulator.total = amountPrice + cartAccumulator.total;
          return cartAccumulator;
        },
        {
          total: 0,
          amount: 0,
        }
      );
      total = parseFloat(total.toFixed(2));
      return { ...state, total, amount };

    case "LOADING":
      return { ...state, loading: true };

    case "DISPLAY_ITEMS":
      return { ...state, loading: false, cart: action.payload };

    default:
      console.log(`action type ${action.type} not found`);
      return state;
  }
};

export default reducer;
