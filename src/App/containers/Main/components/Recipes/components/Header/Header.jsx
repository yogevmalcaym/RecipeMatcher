import React, {memo} from 'react';
import classNames from 'classnames';
import styled from 'styled-components';
import * as styles from './styles';

const Index = styled.div`${styles.Index}`

const Indexes = memo(({currentIndex, recipesCount}) => {
    const indexes = [];
    for (let i = 0; i < recipesCount; i++)
        indexes.push(<Index key={i} isCurrent={currentIndex === i}/>)

    return <div className="indexes">{indexes}</div>;
})

export default styled(memo(({className, onNextClicked, onPreviousClicked, currentIndex, recipesCount}) =>
    <div className={classNames(className, "recipe-header")}>
        <span onClick={onNextClicked}>{'<'}</span>
        <Indexes {...{currentIndex, recipesCount}}/>
        <span onClick={onPreviousClicked}>{'>'}</span>
    </div>
))`${styles.Header}`
