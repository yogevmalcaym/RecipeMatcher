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
        align-items: center;
        
        > span {
            width: 191px;
        }
        
        > input {
            float: left;
            padding: 5px;
            border-radius: 3px;
            background-color: inherit;
            
            ::placeholder {
                color: #9e9e9e;
                opacity: 1; /* Firefox */
            }
            
            :-ms-input-placeholder { /* Internet Explorer 10-11 */
                color: #9e9e9e;
            }
            
            ::-ms-input-placeholder { /* Microsoft Edge */
                color: #9e9e9e;
            }
        }
        
        > h4 {
            margin: 0px 10px;
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
