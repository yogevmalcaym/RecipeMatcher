import {css} from 'styled-components';

export const Chosen = css`
    flex-grow: 1;
    max-height: calc(50% - 35px);
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
        flex-wrap: wrap;
        
        > .ingredient {
        
            &:hover {
              background-color: #dd1b1b;
              box-shadow: 0px 0px 2px 3px #bababa;
            }
        }
    }
`;
