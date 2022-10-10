import {css} from "styled-components"

export const mobile = (props) => {
    return css`
    @media only screen and (max-width: 602px) {
        ${props}
    }
    `;
};

export const tablet = (props) => {
    return css`
    @media only screen and (max-width: 768px) {
        ${props}
    }
    `;
};

export const smallScreen = (props) => {
    return css`
    @media only screen and (max-width: 1024px) {
        ${props}
    }
    `;
};