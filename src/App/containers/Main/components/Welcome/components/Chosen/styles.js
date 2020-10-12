import {css} from 'styled-components';

export const Chosen = css`
    flex: 1 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    
    > h4 {
        padding: 2px 10px;        
        box-shadow: 0px 3px 4px -3px #bababa;
        align-self: center;
        margin-top: 0;
        width: fit-content;
    }
    
    > .chosen-list {
        padding: 10px;
        flex-wrap: wrap;
        
        > .chosen-item {
        
              box-shadow: 0px 0px 2px 2px #59405c;
              background-color: #87556f;

            &:hover {
              background-color: transparent;
            }
        }
    }
`;
