import React, { useState } from 'react';
import './ForgotPassword.scss'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import userService from '../../services/userService';
// import logo from '../../assets/images/private-layout/logo.png';

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>('');
  const [code, setCode] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [currentStep, setCurrentStep] = useState<string>('enterEmail');
  const [pending, setPending] = useState<boolean>(false);

  const onNextStep = () => {
    if (currentStep === 'enterEmail') {
        setPending(true);

        userService
            .forgotPasswordRequest({
                forgotPasswordRequestDto: {
                    email: email,
                },
            })
            .then(
                () => {
                    setCurrentStep('enterCode');
                    setPending(false);
                },
                () => {
                    setPending(false);
                }
            );
    } else if (currentStep === 'enterCode') {
        setPending(true);

        userService
            .forgotPasswordVerifyCode({
                forgotPasswordVerifyCodeDto: {
                    email: email,
                    code,
                },
            })
            .then(
                () => {
                    setCurrentStep('enterNewPassword');
                    setPending(false);
                },
                () => {
                    setPending(false);
                }
            );
    } else if (currentStep === 'enterNewPassword') {
        setPending(true);
        userService
            .forgotPasswordResetPassword({
                forgotPasswordResetDto: {
                    email: email,
                    code,
                    password,
                },
            })
            .then(
                () => {
                    toast.success('Nova lozinka postavljena.');
                    navigate('/');
                    setPending(false);
                },
                () => {
                    setPending(false);;
                }
            );
        }
  };

  return (
    <div className="auth-page">
        <div className="bg-shape" />
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-6">
                    <div className="d-flex flex-column align-items-center">
                        {/* <img src={logo} alt="Authentication logo" width={250} /> */}
                        <form
                            onSubmit={(e) => {
                            e.preventDefault();
                            onNextStep();
                            }}>
                            {currentStep === 'enterEmail' && (
                                <>
                                    <div className="login-note">
                                        Unesite svoj e-mail kako bi vam mogli poslati link za
                                        reset lozinke.
                                    </div>
                                    <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    onChange={(e) =>
                                        setEmail(e.target.value)
                                    }/>
                                </>
                            )}

                            {currentStep === 'enterCode' && (
                                <>
                                    <div className="login-note">
                                        Unesite kod koji ste primili putem maila.
                                    </div>
                                    <input
                                    name="code"
                                    placeholder="Kod"
                                    onChange={(e) =>
                                        setCode(e.target.value)
                                    }/>
                                </>
                            )}

                            {currentStep === 'enterNewPassword' && (
                                <>
                                    <div className="login-note">
                                        Unesite novu lozinku za vaš korisnički račun.
                                    </div>
                                    <input
                                    name="password"
                                    type="password"
                                    placeholder="Lozinka"
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }/>
                                </>
                            )}

                            <div className="form-footer">
                                <button
                                    className={`button ${
                                    pending ? 'button-loading' : ''
                                    }`}
                                    type="submit">
                                    Dalje
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

export default ForgotPassword;
