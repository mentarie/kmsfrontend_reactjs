import React from 'react';
import { Input, Icon } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../assets/css/style.css'
import axios from 'axios'; 

function InputForm({
    value, onChange, placeholder, className, style, name, type,
    iconType = 'user', withIcon = true, iconColor = '#2C37BA', disabled, icon
}) {
    return (        
        <Input
            name={name}
            placeholder={placeholder}
            onChange={onChange}
            value={value}
            className={className}
            style={style}
            type={type}
            disabled = {disabled}
        />
        
    );
}

 

export default InputForm;