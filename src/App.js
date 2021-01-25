import './App.css';
import { Route, BrowserRouter, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import Posts from "./components/Posts";
import Counter from "./components/Counter";
import Home from "./components/Home";
import { store } from "./store";

function App(props) {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/posts" render={props => <Posts {...props} />} />
          <Route path="/counter" render={props => <Counter {...props} />} />
          <Route path="/" render={props => <Home {...props} />} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
