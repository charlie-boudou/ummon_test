import { useState } from "react";
import InputLogin from './InputLogin';
import Button from '../Button';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode";

const clientId = '492308766796-4rukpcc44v9mhjrtk98ibj9eoan212qa.apps.googleusercontent.com';

interface ISignInUpProps {
  register?: boolean;
}

function SignInUp({
  register,
}: ISignInUpProps): JSX.Element {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const [errorName, setErrorName] = useState<string>('');
    const [errorEmail, setErrorEmail] = useState<string>('');
    const [errorPassword, setErrorPassword] = useState<string>('');

    const checkEmail = (mail: string) => {
        const reg =
          /^(([^<>()[\]\\.,;:\s@\\"]+(\.[^<>()[\]\\.,;:\s@\\"]+)*)|(\\".+\\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return reg.test(mail);
    };

    const handleGoogleLogin = (credentialResponse) => {
      console.log(jwt_decode(credentialResponse.credential));
    };

    const handleClick = () => {
      if ((register && password && name && checkEmail(email)) || (!register && password && checkEmail(email))) {
        console.log('connected');
      } else {
        if(!email || !checkEmail(email)) {
          setErrorEmail('Veuillez saisir une adresse mail invalide.');
        }
        if(register && !name) {
          setErrorName('Veuillez saisir un nom.');
        }
        if(!password) {
          setErrorPassword('Veuillez saisir un mot de passe.');
        }
      }
    }

    return (
      <GoogleOAuthProvider clientId={clientId}>
        <div className="w-full h-full flex flex-col items-center justify-center space-y-[1.5rem]"> 
          <p className="text-bold text-[2.5rem] text-white">{`${register ? 'Créer un nouveau compte' : 'Connectez vous'}`}</p>
          <GoogleLogin
              onSuccess={credentialResponse => {
                handleGoogleLogin(credentialResponse);
              }}
              onError={() => {
                console.log('Login Failed');
              }}
          />
          <div className="w-full flex items-center justify-around py-[1rem]">
            <div className="h-[2px] bg-[#5903E5] w-[30%]"/>
            <p className="text-[#5903E5] text-bold">OU</p>
            <div className="h-[2px] bg-[#5903E5] w-[30%]"/>
          </div>
          <form className="flex flex-col items-center justify-center space-y-[1rem] pb-[2rem]">
              {register && (
                <InputLogin name="Name" type="text" inputValue={name} setInputValue={setName} error={errorName} setError={setErrorName}/>
              )}
              <InputLogin name="Email" type="email"  inputValue={email} setInputValue={setEmail} error={errorEmail} setError={setErrorEmail}/>
              <InputLogin name="Password" type="password" inputValue={password} setInputValue={setPassword} error={errorPassword} setError={setErrorPassword}/>
          </form>
          <Button name={`${register ? 'Inscription' : 'Connection'}`} onClick={handleClick}/>
        </div>
      </GoogleOAuthProvider>
    );
  }
  
  export default SignInUp;