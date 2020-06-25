import classnames from 'classnames';
import IngredientsList from "./components/IngredientsList/IngredientsList";
import IngredientForm from "./components/IngredientForm/IngredientForm";
import React, {useState, useCallback, memo, useEffect} from 'react';
import styled from 'styled-components';
import * as styles from './styles';

export default styled(memo(({className, availableIngredients, onSearch}) => {

        const [ingredients, setIngredients] = useState({});


        const onAdd = useCallback((ingredient) =>
                setIngredients({
                    ...ingredients,
                    [ingredient.name]: ingredients[ingredient.name] ?
                        parseInt(ingredients[ingredient.name]) + parseInt(ingredient.count) :
                        parseInt(ingredient.count)
                })
            , [setIngredients, ingredients]);

        const onRemove = useCallback((ingredientName) => {
            const {[ingredientName]: toRemove, ...newIngredients} = ingredients
            setIngredients(newIngredients)
        }, [ingredients])

        return <div {...{className: classnames(className, 'welcome')}}>
            <h3>עריכת מרכיבים לחיפוש</h3>
            <IngredientForm {...{availableIngredients, onAdd}}/>
            <IngredientsList {...{ingredients, availableIngredients, onRemove}} />
        </div>
    })
)`${styles.Welcome}`;
