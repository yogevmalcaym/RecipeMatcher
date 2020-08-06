import {css} from 'styled-components';

export const Recipe = css`
    flex-grow: 1;
    padding: 10px 30px;
    width: 100%;
    
    > img {
        max-height: 300px;
        max-width: 100%;
        border-radius: 5px;
        margin: 10px 0;
    }
    
    h4 {
        margin: 10px 0 20px 0;
    }
    
    .score {
        margin-bottom: 10px;
    }
    
    .list {
            text-align: start;
            padding: 0 10%;
            
            > li {
              padding: 5px;
              border-radius: 5px;
              border: 1px solid #bababa;
              margin: 5px 0;
            }
        
        }
`;
