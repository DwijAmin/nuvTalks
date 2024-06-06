import './App.css'
import Post from './Post';
import Feed from './Feed';
import Profile from './Profile';
import { Provider } from 'react-redux'
import Question from './Question';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { GoogleLogin } from 'react-google-login';
import Messenger from './Messenger';
import axios from 'axios';
import Login from './Login';
import { useSelector } from "react-redux";
import { selectItems } from './Slices';
import Home from './Home/Home';
import { store } from './Store';
import News from './News';
import Header from './Header';
import Covid from './Covid';
import Friends from './Friends'
import Regirstation from './Regirstation';
function App() {
  const item = useSelector(selectItems)
  console.log(item)

  return (
    <div>
     <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path='/' component={Login} />
            <Route exact path='/Friends' component={Friends} />
            <Route exact path='/Messenger' component={Messenger} />
            <Route exact path='/Question' component={Question} />
            <Route exact path='/Covid' component={Covid} />
            <Route exact path='/News' component={News} />

            <Route exact path='/Home' component={Home} />
            <Route exact path='/Regirstation' component={Regirstation} />

            <Route path="/profile/:name">
              <Profile />
            </Route>

          </Switch>

        </Router>
      </Provider>
    </div>
  )
}

export default App;
