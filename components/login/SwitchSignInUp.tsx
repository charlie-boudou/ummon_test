import { useState } from 'react';
import Button from '../Button';
import { ISwitchSignInUp } from '../../utils/types';

interface ISwitchSignInUPProps {
    infos: ISwitchSignInUp;
    onClick: () => void;
}

function SwitchSignInUp({
    infos,
    onClick,
  }: ISwitchSignInUPProps): JSX.Element {

  return (
    <div className="bg-[#5903E5] cover rounded-[1rem] text-white w-[80%] h-[50%] flex flex-col items-center justify-center space-y-[1.5rem]"> 
        <p className="text-[2rem] text-bold">{infos.title}</p>
        <p className='pb-[2rem] text-center w-[75%]'>{infos.subtitle}</p>
        <Button name={infos.name} onClick={onClick} isSwitch/>
    </div>
  );
}

export default SwitchSignInUp;
