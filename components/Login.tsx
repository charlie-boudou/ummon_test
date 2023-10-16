import { useState } from 'react';
import SignInUp from './login/SignInUp';
import SwitchSignInUp from './login/SwitchSignInUp';
import { ISwitchSignInUp } from '../utils/types';

function Login(): JSX.Element {
  const [signInIsActive, setSignInIsActive] = useState<boolean>(true);

  const switchSignIn: ISwitchSignInUp = {name: "Se connecter", title: "Déjà un compte !", subtitle: "Pour ne rien manquer, connectez vous avec vos identifiants !"}
  const switchSignUp: ISwitchSignInUp = {name: "S'inscrire", title: "Pas encore de compte ?", subtitle:"Entrez vos informations personnelles et commencez votre aventure avec nous !"}

  const toggleBackground = () => {
    setSignInIsActive(!signInIsActive);
  };

  return (
    <main className="bg-[#04021D] h-[100vh] w-full p-[1rem]">
      <img src="/logo.png" alt="logo" width={150} height={250} />
      <div className="h-full w-full flex px-[1rem]">
        <div className={`h-full transform transition-transform bg-transparent w-1/2 ${
            signInIsActive ? 'translate-x-0' : 'translate-x-full'
          }`}>
            {signInIsActive ? (
              <SignInUp />
            ) : (
              <SignInUp register/>
            )}
        </div>
        <div className={`bg-[url('/background-login.png')] h-[95%] rounded-[1rem] flex items-center justify-center bg-center bg-no-repeat bg-cover h-full transform transition-transform w-1/2 ${
            !signInIsActive ? '-translate-x-full' : 'translate-x-0'
          }`}>
            {!signInIsActive ? (
              <SwitchSignInUp onClick={toggleBackground} infos={switchSignIn} />
            ) : (
              <SwitchSignInUp onClick={toggleBackground} infos={switchSignUp}/>
            )}
        </div>
      </div>
    </main>
  );
}

export default Login;
