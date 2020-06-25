import {createGlobalStyle, css} from 'styled-components';
import {getColor} from 'styles/helper';

export const GlobalStyle = createGlobalStyle`
    html,body {
        height: 100%;
        width: 100%;
        margin: 0;
    }
    
  
    body {
        background-color: ${getColor('background')};
        font-family: 'Tinos', 'Roboto', sans-serif !important;
        direction: rtl;
    } 
    
    #app {
        height: 100%;
        width: 100%;
        overflow: hidden;
        
        > * {
            height: 100%;
            width: 100%;
        }
    }
    
`;
