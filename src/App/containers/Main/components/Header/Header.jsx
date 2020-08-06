import React from 'react';
import styled from 'styled-components';
import * as styles from './styles';

export default styled(({className})=>{
    return <div {...{className}}>
        <h1><span>     </span>Recipe Matcher</h1>
    </div>
})`${styles.Header}`;
