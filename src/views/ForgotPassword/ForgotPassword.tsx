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
                    toast.success('New password has been set.');
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
                        {/* <img src={logo} alt="Takeda logo" width={250} /> */}
                        <form
                            onSubmit={(e) => {
                            e.preventDefault();
                            onNextStep();
                            }}>
                            {currentStep === 'enterEmail' && (
                                <>
                                    <div className="login-note">
                                        Please enter your email so we can send you a link to
                                        password reset.
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
                                        Please enter the code you received via email.
                                    </div>
                                    <input
                                    name="code"
                                    placeholder="Code"
                                    onChange={(e) =>
                                        setCode(e.target.value)
                                    }/>
                                </>
                            )}

                            {currentStep === 'enterNewPassword' && (
                                <>
                                    <div className="login-note">
                                        Please enter a new password for your user account.
                                    </div>
                                    <input
                                    name="password"
                                    type="password"
                                    placeholder="Password"
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
                                    NEXT
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
