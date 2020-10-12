import {css} from 'styled-components';

export const Available = css`
    flex: 2 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    
    > .header {
        display: flex;
        position: relative;
        justify-content: center;
        
        > input {
            position: absolute;
            right: 10px;
            top: 0px;
            padding: 5px;
            border-radius: 3px;
        }
        
        > h4 {
            padding: 2px 10px;        
            box-shadow: 0px 3px 4px -3px #bababa;
            width: fit-content;
        }
    }
    
    > .available-list {
        padding: 10px;
        flex-wrap: wrap;
        
        > .available-item {
            
            box-shadow: 0px 0px 2px 2px #59405c;
            
            &:hover {
                
                background-color: #87556f;  
                
            }
        }
    }
    
`;
