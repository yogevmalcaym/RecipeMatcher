import React from 'react';
import { css } from 'styled-components';

export const getColor = (key, tone = 'main') => ({ theme }) => theme.colors[key][tone];

export const appendEasyTransition = attr => () => css`
    transition: ${attr} 0.15s ease-in-out;
    `;
