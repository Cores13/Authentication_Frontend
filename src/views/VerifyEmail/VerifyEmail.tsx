import { useEffect, useState } from 'react';
import './VerifyEmail.scss'
import { useNavigate, useParams } from 'react-router-dom';
import userService from '../../services/userService';
// import logo from '../../assets/images/private-layout/logo.png';

const VerifyEmail = () => {
    const [requestSent, setRequestSent] = useState<boolean>(false);
    const [resend, setResend] = useState<boolean>(false);
    const [pending, setPending] = useState<boolean>(true);
    const [verified, setVerified] = useState<boolean>(false);
    const { id, code } = useParams();

    useEffect(() => {
        if(id && code){
            verifyEmail();
        }
    }, [code, id]);

    const resendLink = () => {
        if(!resend){
            userService
                .resendEmailVerificationLink({
                    resendVerificationEmailDto: {
                        id: parseInt(id as string, 10),
                    },
                })
                .then(
                    () => {
                        setResend(true);
                    },
                    () => {
                        setResend(false);
                    }
                );
        }
    }

    const verifyEmail = () => {
        if(!requestSent){
            setRequestSent(true);
            userService
                .verifyEmail({
                    verifyEmailDto: {
                        id: parseInt(id as string, 10),
                        code: code
                    },
                })
                .then(
                    () => {
                        setRequestSent(true);
                        setVerified(true);
                        setPending(false);
                    },
                    () => {
                        setRequestSent(false);
                        setVerified(false);
                        setPending(false);
                    }
                );
        }
    }

    return (
        <div className="auth-page">
            <div className="bg-shape" />
            <div className="container">
                <div className="row">
                    <div className="col-md-6 offset-md-6">
                        <div className="d-flex flex-column align-items-center">
                            {/* <img src={logo} alt="Authentication logo" width={250} /> */}
                            {pending && <div className="spinner mt-4" />}
                            {!pending && verified && 
                                <h1>
                                    Uspješno ste verifikovali email adresu.
                                </h1>
                            }
                            {!pending && !verified && 
                                <h1>
                                    Došlo je do greške, molimo pokušajte ponovo.
                                </h1>
                            }
                            {!verified && 
                            <button className='button mt-3' onClick={resendLink}>Pošalji novi email</button>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VerifyEmail;
