import React,{useEffect,Suspense} from 'react';
import classes from './app.module.scss';
import LandingPage from './components/LandingPage/LandingPage';
import { Route,Switch } from 'react-router-dom';
import Layout from './components/Layouts/Layout';
import Cakes from './components/Cakes/Cakes';
import PostMessage from './components/Forms/PostMessage/PostMessage';
import ShowFavorites from './components/ShowFavorites/ShowFavorites';
const ReadMessages = React.lazy(() => import('./components/AdminActions/ReadMessages/ReadMessages'));
const UploadNew = React.lazy(() => import('./components/AdminActions/UploadNew/UploadNew'));

function App(props) {

  useEffect(()=>{

    console.log('[App.js useEffect] rendered...');
    window.localStorage.favorites = JSON.stringify({});
  },[])

  return (
    <div className={classes.App}>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Layout>
          <Route exact path="/cakes/:dir" component={Cakes} />
          <Route exact path="/message" component={PostMessage} />
          <Route exact path="/favorites" component={ShowFavorites} />
          <Route exact path="/inbox" render={()=>
          {
            return (<Suspense fallback={<h1>Loading...</h1>} ><ReadMessages {...props} /></Suspense>);
          }}/>
          <Route exact path="/upload" render={()=>
          {
            return (<Suspense fallback={<h1>Loading...</h1>} ><UploadNew {...props} /></Suspense>);
          }} />
        </Layout>
      </Switch>
    </div>
  );
}

export default App;
