import React from 'react';

import { 
    GroupContainer, 
    FormInputContainer, 
    LabelContainer } from './form-input.style';

const FormInput = ({handleChange, label, ...restProps}) => {
    return (
        <GroupContainer>
            <FormInputContainer onChange = {handleChange} {...restProps}/>
            {
                label ? (
                    <LabelContainer className = {restProps.value.length ? "shrink" : ''}
                    >{label}</LabelContainer> 
                ) : null
            }
            
        </GroupContainer>
    )
}

export default FormInput
