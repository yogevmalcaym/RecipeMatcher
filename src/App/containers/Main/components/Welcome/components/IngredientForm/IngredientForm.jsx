import React, {useCallback, useEffect, useMemo, useRef, useState, memo} from 'react';
import classnames from 'classnames';
import * as styles from './styles';
import styled from 'styled-components';

export default styled(memo(({className, availableIngredients, onAdd}) => {
    const [ingredient, setIngredient] = useState({name: "", count: 1});
    const [isNameChosen, setIsNameChosen] = useState(false);
    const dropDownRef = useRef();

    const filteredIngredients = useMemo(() => {
        if (!ingredient.name) return availableIngredients;
        return Object.keys(availableIngredients).reduce((acc, ingName) => {
            if (ingName.indexOf(ingredient.name) >= 0)
                return {
                    ...acc,
                    [ingName]: availableIngredients[ingName]
                };
            return acc;
        }, {});

    }, [ingredient.name]);

    useEffect(() => {
        if (!dropDownRef.current) return;
        if (isNameChosen && !filteredIngredients[ingredient.name]) {
            setIsNameChosen(false);
            dropDownRef.current.value = "1";
            return;
        } else {
            const filteredIngLength = Object.keys(filteredIngredients).length;
            dropDownRef.current.size = filteredIngLength + 1 > 6 ? 6 : filteredIngLength + 1;
        }
        if (!ingredient.name || isNameChosen) dropDownRef.current.size = 0;

    }, [ingredient.name, isNameChosen]);

    const onIngredientNameChange = useCallback((e) => {
        setIngredient({...ingredient, name: e.target.value});
    }, [ingredient, setIngredient]);

    const onIngredientCountChange = useCallback((e) => {
        if (e.target.value < 10000) setIngredient({...ingredient, count: e.target.value});
        else alert("הכמות המקסימלית להוספה בודדת הינה 9999.");
    }, [ingredient, setIngredient])

    const ingredientNameSelectHandler = useCallback((e) => {
        onIngredientNameChange(e);
        setIsNameChosen(true);
    }, [])

    const ingredientsOptions = useMemo(() => {
        if (Object.keys(filteredIngredients).length > 0)
            return <select defaultValue="1" onChange={ingredientNameSelectHandler} ref={dropDownRef}>
                <option disabled value="1">אפשרויות זמינות</option>
                {Object.keys(filteredIngredients).map((ingName) =>
                    <option key={ingName} value={ingName}>{ingName}</option>
                )}
            </select>
        else return <div className="no-options">אין אפשרויות שתואמות את הטקסט</div>
    }, [ingredient.name]);

    const onSubmit = useCallback(e => {
        e.preventDefault();

        if (!ingredient.name) return alert("נא למלא שם מרכיב");
        if (!availableIngredients[ingredient.name]) return alert("מרכיב זה אינו כלול באפשרויות");
        if (parseInt(ingredient.count) <= 0) return alert("הכמות חייבת להיות 1 או יותר");

        onAdd(ingredient);
    }, [ingredient, onAdd]);

    return <form {...{className: classnames(className, "add-ingredient-form"), onSubmit}}>
        <div className="name-display">
            <span>שם מרכיב</span>
            <input {...{
                onChange: onIngredientNameChange,
                type: "text",
                value: ingredient.name,
                placeholder: "שם המרכיב"
            }}/>
            {ingredientsOptions}
        </div>
        <div className="count-display">
            <span {...{className: "count-span"}}>כמות</span>
            <input {...{className: "count-input", max: 9999, onChange: onIngredientCountChange, type: "number"}}
                   value={ingredient.count}/>
            <span>{availableIngredients[ingredient.name]}</span>
        </div>
        <button className="add-to-list-button"> הוסף לרשימה</button>
    </form>
}))`${styles.IngredientForm}`;
