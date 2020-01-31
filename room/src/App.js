import React from 'react';
import './App.css';
import './footer.css'
import Home from './pages/Home';
import Room from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import Error from './pages/Error';
import {Route, Switch} from 'react-router-dom';
import Form from './components/form';
import Footer from './components/footer';
import Host from './components/host';

function App() {
    return ( < div >
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/rooms/" component={Room} />
            <Route exact path="/rooms/:slug" component={SingleRoom} />
            <Route exact path="/components/form" component={Form} />
            <Route exact path="/components/host" component={Host} />
            <Route component={Error} />
        </Switch>
        <Footer />
        </div>
    )
}

export default App;