import styles from './Input.module.css';
import { InputProps } from './types';

export default function Input(props: InputProps){
    /* const {placeholder, value, type, id, onChange, className, checked} = props; */
    const {value, type, onChange, className, ...other} = props
    return  <input
                type={type}
                value={value}
                placeholder={other?.placeholder}
                id={other?.id}
                onChange={onChange}
                className={className}
                checked={other?.checked || false}
                name={other?.name}
                />
}

