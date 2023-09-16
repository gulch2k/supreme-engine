// Import necessary libraries
import { createContext, useReducer } from "react";

// Create a context for the cart
export const Cartcontext = createContext();

// Define the context provider component
export const Context = (props) => {

  // Define the reducer function
  // This function takes current state and an action as parameters
  const reducer = (state, action) => {

    // Use a switch statement to handle different types of actions
    switch (action.type) {

      case "ADD":
        // Filter the state array to see if the item already exists
        const tempstate = state.filter((item) => action.payload.id === item.id);
        // If the item exists, return the current state
        if (tempstate.length > 0) {
          return state;
        } 
        // Else add the new item to the state array
        else {
          return [...state, action.payload];
        }

      case "INCREASE":
        // Map through the state array
        // If the current item id matches the action payload id, increase the item quantity
        // Else return the item as is
        const tempstate1 = state.map((item) => {
          if (item.id === action.payload.id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
        return tempstate1;

      case "DECREASE":
        // Similar to the "INCREASE" case, but decrease the item quantity instead
        const tempstate2 = state.map((item) => {
          if (item.id === action.payload.id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
        return tempstate2;

      case "REMOVE":
        // Filter the state array to remove the item with the action payload id
        const tempstate3 = state.filter(
          (item) => item.id !== action.payload.id
        );
        return tempstate3;

      // Default case returns the current state
      default:
        return state;
    }
  };

  // Use the useReducer hook with the reducer function and an empty initial state
  const [state, dispatch] = useReducer(reducer, []);
  const info = { state, dispatch };

  // Return the context provider with the state and dispatch function as its value
  return (
    <Cartcontext.Provider value={info}>{props.children}</Cartcontext.Provider>
  );
};