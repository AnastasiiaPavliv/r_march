import React from 'react';
import css from './TestUseToggle.module.css'
import {useToggle} from "../../hooks/useToggle";

const TestUseToggle = () => {
    const {value, change}= useToggle(true)
    return (
        <div className={[css.Toggle, value?css.purple:css.pink].join(' ')}>
<button onClick={change}>{!value?'purple':'pink'}</button>
        </div>

    );
};

export {TestUseToggle};