import {css} from 'styled-components'
import {getColor} from 'styles/helper';

export const Main = css`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-content: center;
    
    > .content {
        display: flex;
        overflow: auto;
        width: 100%;
        height: 100%;
    }
`;
