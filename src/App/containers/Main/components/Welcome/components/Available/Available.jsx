import classnames from 'classnames';
import {Ingredient, List} from '@common-components';
import React, {useState, useCallback, memo, useEffect} from 'react';
import styled from 'styled-components';
import * as styles from './styles';

const ListItem = memo(({_id: id, name, onAdd}) => {
    const onClick = useCallback(() =>
            onAdd({id})
        , [onAdd]);
    return <Ingredient {...{onClick}}>{name}</Ingredient>
})

export default styled(({className, data, onAdd}) => {
        return <div {...{className}}>
            <h4>Available Ingredients</h4>
            <List className = "available-list">
                {Object.keys(data).map((id) =>
                    <ListItem {...{key: id, ...data[id], onAdd}}/>
                )}
            </List>
        </div>
    }
)`${styles.Available}`;
