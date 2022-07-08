import React, { FC } from "react";
import styles from "../styles/input.module.scss";

type InputProps = {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value: string;
};

const Input: FC<InputProps> = ({ value, onChange }) => {
    return (
        <div className={styles.inputWrapper}>
            <input
                className={styles.input}
                type="text"
                placeholder="URL"
                value={value}
                onChange={onChange}
            />
            <span className={styles.focusBorder}>
                <i></i>
            </span>
        </div>
    );
};

export default Input;
