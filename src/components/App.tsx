import React from "react";
import Input from "./Input";
import styles from "../styles/app.module.scss";
import btnStyles from "../styles/button.module.scss";
import { useState } from "react";
import download from "../api/download";

const App = () => {
    const [url, setUrl] = useState<string>("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUrl(e.target.value);
    };

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        download(url);
    };

    return (
        <div className={styles.app}>
            <Input value={url} onChange={handleChange} />
            <button className={btnStyles.button} onClick={handleClick}>
                Download
            </button>
        </div>
    );
};

export default App;
