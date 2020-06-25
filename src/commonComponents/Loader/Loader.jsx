import React from 'react';
import classnames from 'classnames';
import styled from 'styled-components';
import * as styles from './styles';

export const Loader = styled(({className}) =>
    <div {...{className: classnames(className, 'loader-wrapper')}}>
        <span className="loader">Loading...</span>
    </div>
)`${styles.LoaderWrapper}`;
