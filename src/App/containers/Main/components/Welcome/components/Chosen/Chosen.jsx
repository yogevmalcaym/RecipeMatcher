import classNames from 'classnames';
import React, {useState, useCallback, memo, useEffect} from 'react';
import styled from 'styled-components';
import * as styles from './styles';
import {List} from "@common-components/List/List";
import {Ingredient} from "@common-components/Ingredient/Ingredient";


const ListItem = memo(({_id: id, name, onRemove}) => {
    const onClick = useCallback(() =>
            onRemove({id})
        , [onRemove]);
    return <Ingredient {...{onClick, className: "chosen-item"}}>{name}</Ingredient>
})


export default styled(memo(({className, data, onRemove}) => {
        return <div {...{className}}>
            <h4>המצרכים שנבחרו</h4>
            <List className="chosen-list">
                {Object.keys(data).map((id) =>
                    <ListItem {...{key: id, ...data[id], onRemove}}/>
                )}
            </List>
        </div>
    }
))`${styles.Chosen}`;
