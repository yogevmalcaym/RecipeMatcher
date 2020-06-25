import React from 'react';
import classnames from 'classnames';
import {Router as _Router} from '@reach/router';
import styled from 'styled-components';
import * as styles from './styles';

export const Router = styled(({className, children}) => {
    return <_Router {...{className: classnames(className, 'route')}}>
        {children}
    </_Router>
})`${styles.Router}`;