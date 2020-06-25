import {css} from 'styled-components';
import {getColor} from 'styles/helper';

export const List = css`
    > .list-item {
        margin: 5px 0px;
        padding: 3px 5px 6px 5px;
        border-bottom: 1.5px solid ${getColor("background", "shade")};
        
        > button {
            background-color: ${getColor("danger")};
            border-radius: 15px;
            width: 20px;
            height: 20px;
            font-weight: bold;
            display: inline-flex;
            justify-content: center;
            margin-left: 10px;
        }
        
        > button:focus {
            outline: none;
        }
    }
    
    > .list-item:last-child {
        border: none;
    }

`;

export const NoIngredients = css`
    color: ${getColor("dark", "highlight")};
    font-size: x-large;
`;

export const IngredientsListWrapper = css`
    > h3 {
        text-align: center;
    }

`;
