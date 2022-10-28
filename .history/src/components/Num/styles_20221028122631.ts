import styled from 'styled-components';

type NumerProps = {
    margin?: string;
    fontSize?: string;
    padding?: string;

}

export const NumberComp = styled.span<NumerProps>`
    margin: ${props => props.margin ? props.margin : "0px"};
    color: ${props => props.color ? props.color : "white"};
    font-size: 40px;
    border-radius: 50%;
    display: inline;
    background-color: #209869;
    margin: 20px 10px;
    display: inline;

    padding: ${props => props.padding ? props.padding : "9px 13px"};

`;