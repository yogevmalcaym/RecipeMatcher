import React, {memo} from 'react';
import classNames from 'classnames';
import styled from 'styled-components';
import * as styles from './styles';

export default styled(memo(({className, data = {}}) =>
    <div className={classNames(className, "recipe")}>
        <h2>{data.name}</h2>
        {data.score && <h4 className = "score">Score {data.score}</h4>}
        <img src={`/images/${data.pictureName}`}/>

        <h4>Recipe Ingredients </h4>
        <ol {...{className: classNames("list", 'ingredients')}}>
            {data.ingredients && data.ingredients.map((ingredient) =>
                <li key={ingredient._id}>{ingredient.name}, {ingredient.amount}</li>)}
        </ol>

        <h4>Instructions </h4>
        <ol {...{className: classNames("list", 'directions')}}>
            {data.directions && data.directions.map((direction, index) =>
                <li key={index}>{direction}</li>)}
        </ol>
    </div>
))`${styles.Recipe}`;
