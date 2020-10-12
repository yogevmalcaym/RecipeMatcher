import React, {memo, useCallback, useEffect, useState} from 'react';
import Header from './components/Header/Header';
import Recipe from './components/Recipe/Recipe';
import {Loader} from '@common-components'
import styled from 'styled-components';
import * as styles from './styles';
import * as helper from "./helper";

export default styled(memo(({className, ingredients, navigate}) => {
    const [recipes, setRecipes] = useState(null);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        (async () => {
            const recipes = await helper.getRecipe(ingredients);
            setRecipes(recipes);
        })();
    }, [setRecipes]);

    const onBackToWelcome = useCallback(() =>
            navigate('/')
        , [setRecipes]);

    const onNextClicked = useCallback(() => {
        setIndex(prevIndex => prevIndex + 1 < recipes.length ? prevIndex + 1 : 0)
    }, [setIndex, recipes]);

    const onPreviousClicked = useCallback(() => {
        setIndex(prevIndex => prevIndex - 1 >= 0 ? prevIndex - 1 : recipes.length - 1)
    }, [setIndex, recipes]);

    return recipes ?
        <div {...{className}}>
            <Header {...{
                onNextClicked,
                onPreviousClicked,
                recipesCount: recipes.length,
                currentIndex: index
            }}/>
            <Recipe {...{data: recipes[index]}}/>
            <div {...{onClick: onBackToWelcome, className: "back-to-welcome"}}>חזרה לעריכת מצרכים</div>
        </div> :
        <Loader/>;
}))`${styles.Recipes}`;
