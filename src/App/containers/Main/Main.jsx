import classnames from 'classnames';
import {Loader} from '@common-components';
import React, {useEffect, useState} from 'react';
// import {Router} from 'routes';
// import * as routsUrls from 'routes/urls';
import styled from 'styled-components';
import * as styles from './styles';
import Welcome from './components/Welcome/Welcome';
import * as helpers from './helpers';

export default styled(({className}) => {
        const [initCompleted, setInitCompleted] = useState(false);
        const [availableIngredients, setAvailableIngredients] = useState(null);

        useEffect(() => {
            (async () => {
                try {
                    const availableIngredientsF = await helpers.getAvailableIngredients();
                    setAvailableIngredients(availableIngredientsF)
                } catch (error) {
                    //    TODO: check if there is a need for error handling.
                } finally {
                    setInitCompleted(true)
                }
            })()
        }, [setInitCompleted])
        return <div {...{className: classnames(className, 'main')}}>
            <div> HEADER</div>
            <div {...{className: 'content'}}>
                {initCompleted ? <Welcome {...{availableIngredients}} /> : <Loader/>}
            </div>
        </div>
    }
)`${styles.Main}`;
