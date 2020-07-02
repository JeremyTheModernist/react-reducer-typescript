import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { StoreProvider } from "./store";
import ShowCount from "./show-count";

function App() {
	return (
		<StoreProvider>
			<main className="App">
				Cool stuff
				<ShowCount />
			</main>
		</StoreProvider>
	);
}

export default App;
