import Home from './Views/Home/Home';
import './App.css';
import Detail from './Views/Detail/Detail';
import Create from './Views/Create/Create';


function App() {
  return (
    <div className="App">
      <h1>Henry Pokemon</h1>
      <Home />
      <Detail />
      <Create/>

    </div>
  );
}

export default App;
