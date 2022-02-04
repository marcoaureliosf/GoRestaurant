import { BrowserRouter as Router } from "react-router-dom";

import { MainRoutes } from "./routes";

import { GlobalStyle } from "./styles/global";

import Modal from 'react-modal';
import { FoodProvider } from "./context/FoodContext";

Modal.setAppElement('#root');

export function App() {

  return (
    <FoodProvider>
      <Router>
        <MainRoutes />
      </Router>
      <GlobalStyle />
    </FoodProvider>
  )
}
