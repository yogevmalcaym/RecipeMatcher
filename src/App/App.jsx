import React from "react";
import {ThemeProvider} from 'styled-components';
import theme from 'styles/theme';
import Main from './containers/Main/Main';
import * as styles from './styles';

class ErrorBoundary extends React.Component {
    componentDidCatch(error, info) {
        console.error(error)
    }

    render() {
        return this.props.children;
    }
}

export default () => {

    return <React.Fragment>
            <ErrorBoundary>
                <ThemeProvider {...{theme}}>
                    <styles.GlobalStyle/>
                    <Main/>
                </ThemeProvider>
            </ErrorBoundary>
        </React.Fragment>
};
