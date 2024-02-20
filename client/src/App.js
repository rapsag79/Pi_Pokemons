import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Detail from './Views/Detail/Detail';
import About from './Views/About/About';
import Home from './Views/Home/Home';

function App() {

  return (

    <div>
    <Router>
      <Switch>
        <Route path="/home" component={ Home  } />
        <Route path="/about" component={ About  } />
        <Route path="/detail/:id" component={ Detail } />
      </Switch>
    </Router>
    </div>
  );
}

export default App;
