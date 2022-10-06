import {css} from "styled-components"

export const mobile = (props) => {
    return css`
    @media only screen and (max-width: 425px) {
        ${props}
    }
    `;
};

// export const tablet = (props) => {
//     return css`
//     @media only screen and (max-width: 380px) {
//         ${props}
//     }
//     `;
// };

// export const fullscreen = (props) => {
//     return css`
//     @media only screen and (max-width: 380px) {
//         ${props}
//     }
//     `;
// };