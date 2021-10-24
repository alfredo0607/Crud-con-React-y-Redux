import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./componentes/Header";
import NuevoProducto from "./componentes/NuevoProducto";
import EditarProducto from "./componentes/EditarProducto";
import Productos from "./componentes/Productos";

// Redux
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Header />
        <div className="container mt-5">
          <Switch>
            <Route exact path="/" component={Productos} />
            <Route exact path="/productos/nuevo" component={NuevoProducto} />
            <Route
              exact
              path="/productos/editar/:id"
              component={EditarProducto}
            />
          </Switch>
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
