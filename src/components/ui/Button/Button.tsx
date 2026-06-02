import styles from "./Button.module.css";
import { ButtonProps } from "./types";

export default function Button(props: ButtonProps){
    const {children, onClick, disabled, type, className} = props;
    return <button 
                type={type}
                className={className}
                onClick={onClick}
                disabled={disabled}
            >{children}</button>
}