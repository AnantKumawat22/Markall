import React from 'react';
import styles from '../styles/Alert.module.css'
import 'bootstrap/dist/css/bootstrap.css';

const Alert = (props) => {
    const capitalize = (word)=>{
        if(word === "danger") word = "Error";
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return (
        <div className={styles.alert}>
        {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
           <strong>{capitalize(props.alert.type)}</strong>: {props.alert.message} 
        </div>}
        </div>
    )
}

export default Alert
