// helpful article:
// https://dev.to/elisealcala/react-context-with-usereducer-and-typescript-4obm

import React, { createContext, useContext, useReducer } from "react";

export type IState = {
	count: number;
	message?: string;
};

type IAction = {
	type: "INCREMENT" | "DECREMENT" | "MULTIPLY_BY_TWO";
	message?: string;
};
// React.Dispatch is a type provided by React. <IAction> is the generic we pass to React.Dispatch using our IAction type.
type ContextShape = {
	state: IState;
	dispatch: React.Dispatch<IAction>;
};

type Props = {
	children: React.ReactNode;
};

var initialState = {
	count: 0,
	message: "",
};

// must declare the type for the state as well as the action
const reducer = (state: IState, action: IAction) => {
	switch (action.type) {
		case "INCREMENT":
			return {
				count: state.count + 1,
				message: action.message,
			};
		case "DECREMENT":
			return {
				count: state.count + 1,
				message: state.message,
			};
		case "MULTIPLY_BY_TWO":
			return {
				count: state.count * 2,
				message: state.message,
			};
		default:
			return state;
	}
};

// have to create a ContextShape for the values we pass into Store.Provider value
// you can begin with an empty object and assert a type of ContextShapea
// by doing this the Store.Provider will now expect this type for it's value property.
// this will also ensure no errors are thrown when you useStore in other components
export const Store = createContext({} as ContextShape);

// React.FC automatically applies a type for children props
// the value passed in for Store.Provider value must match the ContextShape which is an object of state and dispatch.
// by asserting type of state and dispatch we tell ts not to infer it.
export const StoreProvider: React.FC<Props> = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);
	return (
		<Store.Provider value={{ state, dispatch } as ContextShape}>
			{children}
		</Store.Provider>
	);
};

export const useStore = () => useContext(Store);
