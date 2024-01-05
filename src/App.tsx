import React, { Suspense } from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Routes as Switch,
  Navigate,
} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './redux/store';
// import Home from './views/Home/Home';
import Login from './views/Login/Login';
import './App.css';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Home from './views/Home';
import ForgotPassword from './views/ForgotPassword';
import VerifyEmail from './views/VerifyEmail';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Suspense fallback={null}>
          <Router>
            <Switch>
              <Route path='/' element={<PrivateRoute/>}>
                <Route path='/' element={<Home/>}/>
              </Route>

              {/* <Route path='/' element={<PrivateRoute/>} >
                <Route path='/materials/:id' element={<SaveMaterial/>}/>
              </Route> */}

              <Route path='/verify-email/:id/:code' element={<VerifyEmail/>}/>
              <Route path='/forgot-password' element={<ForgotPassword/>}/>
              <Route path='/login' element={<Login/>}/>
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