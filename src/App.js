import { Outlet } from "react-router-dom"
import { Provider } from "react-redux";

import './App.css';
import Header from "./components/header"
import Footer from "./components/footer"
import appStore from "./components/redux/appStore.redux"

function App() {
  return (
    <Provider store={appStore}>
      <div>
        <Header/>
        <Outlet/>
        <Footer/>
      </div>
    </Provider>
  );
}

export default App;
