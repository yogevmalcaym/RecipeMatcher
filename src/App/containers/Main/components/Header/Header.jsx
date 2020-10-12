import React from 'react';
import styled from 'styled-components';
import * as styles from './styles';

export default styled(({className})=>
    <div {...{className}}>
        <h1>My Recipe</h1>
    </div>
)`${styles.Header}`;
