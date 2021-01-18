import logo from './logo.svg';
import './App.css';
import Home from './components/Home'
import Navbar from './components/Navbar';
import Content from './components/Content';
import Category from './components/Category';
import ConstructionPart from './components/ConstructionPart';
import Brands from './components/Brands'
import PrivacyPolicy from './components/PrivacyPolicy'
import Terms from './components/Terms'
import {BrowserRouter as BrowserRouter,Router,Switch,Route,Link} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Navbar />
        <Content /> */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/clip" component={Home} />
          <Route exact path="/category" component={Category}/>
          <Route exact path="/constructionPart" component={ConstructionPart}/>
          <Route exact path="/brands" component={Brands}/>
          <Route exact path="/privacypolicy" component={PrivacyPolicy}/>
          <Route exact path="/terms" component={Terms}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
