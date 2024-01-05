/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/no-unused-vars */
// import jwt from 'jwt-decode';
import { jwtDecode } from "jwt-decode";
import React, { FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import { TokenResponseDto, UserRoleEnum } from '../../api';
// import logo from '../../assets/images/private-layout/logo.png';
import { logout } from '../../redux/auth/authSlice';
import authService from '../../services/authService';
// const { default: jwt_decode } = require("jwt-decode");

interface State {
  pending: boolean;
  email: string;
  password: string;
}

const Login = () => {
  const [state, setState] = useState<State>({
    pending: false,
    email: '',
    password: '',
  });

  const dispatch = useDispatch();

  const navigate = useNavigate();
  const location = useLocation();
  const { from }: any = location.state || { from: { pathname: '/' } };

  const onLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setState({ ...state, pending: true });
    
    dispatch(authService.login({ email: state.email, password: state.password }) as any)
      // @ts-ignore
      .then(
        (res: TokenResponseDto) => {
          const userRole: { role: string } = jwtDecode(res.accessToken || '') || null;
          navigate(from, {replace: true});
        },
        () => {
          setState({ ...state, pending: false });
        }
      );
  };

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  return (
    <div className="auth-page">
      <div className="bg-shape" />
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-6">
            <div className="d-flex flex-column align-items-center">
              {/* <img src={logo} alt="Authentication logo" width={250} /> */}

              <div className="login-note">Molimo Vas unesite svoje podatke</div>

              <form onSubmit={onLogin}>
                <input
                  type="email"
                  name="email"
                  placeholder="Email adresa"
                  onChange={handleInputChange}
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Lozinka"
                  onChange={handleInputChange}
                />

                <div className="form-footer">
                  <Link to="/forgot-password" className="forgot-password-link">
                    Zaboravili ste lozinku?
                  </Link>
                  <button
                    className={`button ${
                      state.pending ? 'button-loading' : ''
                    }`}
                    type="submit"
                    disabled={!state.email || !state.password}
                  >
                    Prijava
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;