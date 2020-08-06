import {css} from 'styled-components';

export const ListsWrapper = css`
    width: 100%;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
`;

export const Welcome = css`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    > .get-a-recipe {
        width: 80%;
        padding: 10px 0px;
        font-size: 30px;
        cursor: pointer;
        border-radius: 10px;
        background-color: forestgreen;
    }
`;


