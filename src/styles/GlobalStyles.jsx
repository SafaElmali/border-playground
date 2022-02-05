import { createGlobalStyle } from "styled-components/macro";

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    html,body {
        margin: 0;
        padding: 0;
        font-family: 'Inter', sans-serif;
    }
`;

export default GlobalStyles;
