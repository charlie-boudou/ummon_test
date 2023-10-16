import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { Dispatch, SetStateAction } from 'react';

interface IInputLoginProps {
    name: string;
    type: string;
    inputValue: string;
    setInputValue: Dispatch<SetStateAction<string>>;
    error: string;
    setError: Dispatch<SetStateAction<string>>;
}

function InputLogin({
    name,
    type,
    inputValue,
    setInputValue,
    error,
    setError
  }: IInputLoginProps): JSX.Element {

    const icon = () => {
        switch (name) {
            case 'Name':
                return faUser;
            case 'Email':
                return faEnvelope;
            case 'Password':
                return faLock;
            default:
                return;
        }
    };

    return (
        <div>
            <label className="px-[1rem] py-[.5rem] bg-white rounded-[.5rem] flex items-center space-x-[.5rem]">
                <FontAwesomeIcon icon={icon()} style={{color: 'grey'}} />
                <input
                    className="bg-transparent outline-none"
                    type={type}
                    placeholder={name}
                    name={name} 
                    value={inputValue}
                    onChange={(e) => {
                        if(error) {
                            setError('');
                        }
                        setInputValue(e.target.value);
                    }}
                />
            </label>
            {error && <div className='text-red-600 text-[.75rem]'>* {error}</div>}
        </div>
    );
  }
  
  export default InputLogin;