import React, { Suspense, useEffect } from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Routes as Switch,
  Navigate,
  matchPath
} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './redux/store';
import Login from './views/Login/Login';
import './App.css';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import ForgotPassword from './views/ForgotPassword';
import VerifyEmail from './views/VerifyEmail';

import Contacts from './views/Contacts';
import Campaigns from './views/Campaigns';
import Statistics from './views/Statistics';
import Surveys from './views/Surveys';
import Media from './views/Media';
import Users from './views/Users';
import AuthRoute from './components/AuthRoute/AuthRoute';
import UserForm from './views/Users/UserForm';


function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Suspense fallback={null}>
          <Router>
            <Switch>
              <Route path='/' element={<PrivateRoute/>}>
                <Route path="/" element={<Navigate to="/campaigns" />} />

                <Route path='/campaigns' element={<Campaigns/>}/>

                <Route path='/statistics' element={<Statistics/>}/>

                <Route path='/surveys' element={<Surveys/>}/>

                <Route path='/media' element={<Media/>}/>

                <Route path='/contacts' element={<Contacts/>}/>

                <Route path='/users' element={<Users/>}/>
                <Route path='/users/:id' element={<UserForm/>}/>
              </Route>

              {/* <Route path='/' element={<PrivateRoute/>} >
                <Route path='/materials/:id' element={<SaveMaterial/>}/>
              </Route> */}

              <Route path='/' element={<AuthRoute/>}>
                <Route path='/verify-email/:id/:code' element={<VerifyEmail/>}/>
                <Route path='/forgot-password' element={<ForgotPassword/>}/>
                <Route path='/login' element={<Login/>}/>
              </Route>

              <Route path="*" element={<Navigate to="/" />} />

            </Switch>

          </Router>
          <ToastContainer hideProgressBar pauseOnHover={false} />
        </Suspense>
      </PersistGate>
    </Provider>
  );
}

export default App;