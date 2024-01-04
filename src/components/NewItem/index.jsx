/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import { Container } from "./style";
import { FiPlus, FiX } from 'react-icons/fi'

export function NewItem({ isNew, value, OnClick, ...rest }){

    return(

        <Container isNew={isNew}>
            <input 
                type="text"
                value={value} 
                readOnly={!isNew} 
                placeholder="Novo link"
                {...rest} 
            />

            <button 
                type="button"
                Onclick={OnClick}
                className={isNew ? "button-add" : "button-delete"}
            >
                {isNew ? <FiPlus /> : <FiX /> }
            </button>
        </Container>

    );

}