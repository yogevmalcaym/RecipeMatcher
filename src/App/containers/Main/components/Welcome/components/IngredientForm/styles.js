import {css} from 'styled-components';
import {getColor} from 'styles/helper';

export const IngredientForm = css`
    display: flex;
    flex-direction: column;
    
    > * {
      margin: 10px 0;
    };

    > .name-display{
    
        > select {
            position: absolute;
            border-radius: 5px;
            padding: 5px 2px;
            -webkit-appearance: none;
            -moz-appearance: none;
            text-indent: 1px;
            text-overflow: '';
        }
        
    }
    
    > .count-display {
    
        > .count-span {
            width: 63px;
            display: inline-block;
        }
        
        > .count-input {
            width: 4.1em;
        }
    }
    
    input {
        padding: 5px 2px;
        margin: 0px 5px;
        border-radius: 5px;
        border: none;
        box-shadow: inset 0px 0px 3px 1px #ddd;
        text-indent: 2px;
    }
    
    input:focus {
        box-shadow: inset 0px 0px 4px 2px #ddd;
        outline: none;
        border: none;
    }
    
    > .add-to-list-button {
        margin: auto;
        padding: 5px;
        border-radius: 5px;
        background-color: ${getColor("success", "light")};
    }
`;
