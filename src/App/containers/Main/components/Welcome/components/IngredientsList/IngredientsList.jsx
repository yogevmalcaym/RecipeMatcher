import React, {memo, useCallback, useMemo} from 'react';
import classnames from 'classnames';
import styled from 'styled-components';
import * as styles from './styles';

const List = styled(({className, children}) =>
    <div {...{className: classnames(className, "list")}}>
        {children}
    </div>
)`${styles.List}`;

const NoIngredients = styled(({className}) =>
    <div {...{className: classnames(className, 'no-ingredients')}}>
        עדיין לא הוספת רכיבים לרשימה
    </div>
)`${styles.NoIngredients}`;


export default styled(memo(({className, ingredients, availableIngredients, onRemove}) => {
        const ListItem = ({ingredientName, onRemove}) => {

            const onClick = useCallback(() =>
                confirm(`האם את/ה בטוח/ה שברצונך למחוק את ${ingredientName} מהרשימה?`) &&
                onRemove(ingredientName)
                , [onRemove]);

            return <div {...{className: "list-item"}}>
                <button {...{onClick}}>X</button>
                {ingredients[ingredientName]} {availableIngredients[ingredientName]} של {ingredientName}
            </div>
        }

        const ingredientsNames = Object.keys(ingredients);

        const ingredientsListItems = useMemo(() =>
                ingredientsNames.map((ingredientName) =>
                    <ListItem {...{key: ingredientName, ingredientName, onRemove}} />
                )
            , [ingredients, availableIngredients, onRemove]
        )


        return <div {...{className}}>
            <h3>רשימת מרכיבים:</h3>
            {ingredientsNames.length === 0 ?
                <NoIngredients/> :
                <List>
                    {ingredientsListItems}
                </List>}
        </div>
    }
))`${styles.IngredientsListWrapper}`;
