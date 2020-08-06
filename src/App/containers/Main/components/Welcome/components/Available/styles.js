import {css} from 'styled-components';

export const Available = css`
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
    
    > .available-list {
        flex-wrap: wrap;
        > .ingredient {
            &:hover {
              background-color: forestgreen;
              box-shadow: 0px 0px 2px 3px #bababa;
            }
        }
    }
    
`;
