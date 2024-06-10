import { Route, Router } from "wouter";
import AddMonto from "./page/AddMonto";
import Comparacion from "./page/Comparacion";
import Gastos from "./page/Gastos";
import GastosFijos from "./page/GastosFijos";
import Home from "./page/Home";
import Nav from "./components/Nav";
import "./App.css";

function App() {
  return (
    <div className="bg-slate-950 h-screen flex flex-row gap-4">
      <div className="w-[20%] flex flex-col justify-center ml-4">
        <h1 className="text-zinc-300 text-3xl m-4 ml-0">GastosApp</h1>
        <Nav />
      </div>
      <div className="w-[80%] mr-4">
        <Router>
          <Route path="/" component={Home} />
          <Route path="/addMonto" component={AddMonto} />
          <Route path="/comparacion" component={Comparacion} />
          <Route path="/gastos" component={Gastos} />
          <Route path="/gastosFijos" component={GastosFijos} />
        </Router>
      </div>
    </div>
  );
}

export default App;
