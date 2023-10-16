interface IButtonProps {
    isSwitch?: boolean;
    name: string;
    onClick: () => void;
}

function Button({
    isSwitch,
    name,
    onClick,
  }: IButtonProps): JSX.Element {

    return (
        <button
          type="submit" 
          className={`${isSwitch ? 'border border-white bg-transparent' : 'bg-[#5903E5]'} rounded-[1rem] px-[1.5rem] py-[.5rem] text-white hover:bg-[#8C00FB]`}
          onClick={() => onClick()}
        >
            {name}
        </button>
    );
  }
  
  export default Button;