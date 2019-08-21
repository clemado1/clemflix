import {createGlobalStyle} from 'styled-components';
import reset from 'styled-reset';

const globalStyles = createGlobalStyle`
    ${reset};
    a{
        text-decoration:none;
        color:inherit;
    }
    *{
        box-siziong:border-box;
    }
    body{
        font-familly:Roboto;
        font-size:12px;
        background-color: rgba(20,20,20,1);
        color: white;
        padding-top: 50px;
    }

`;

export default globalStyles;