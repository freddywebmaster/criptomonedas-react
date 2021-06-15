import styled from '@emotion/styled';

export const Contenedor = styled.div`
    max-width: 900px;
    margin: 0 auto;
    @media(min-width: 992px){
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        column-gap: 2rem;
    }
`;

export const Imagen = styled.img`
    max-width: 100%;
    margin-top: 5rem;
    text-align: center;
`;

export const Heading = styled.h1`
    font-family: 'Bebas Neue', cursive;
    color:#fff;
    text-align: left;
    font-size:50px;
    margin-bottom: 50px;
    margin-top: 50px;
    &::after{
        content: '';
        width: 100px;
        height: 6px;
        background-color: #66a2fe;
        display: block;
    }
`;

export const BtnSubmit = styled.input`
    margin-top: 20px;
    font-weight: bold;
    font-size: 20px;
    padding: 10px;
    background-color: #66a2fe;
    border: none;
    width: 100%;
    border-radius: 10px;
    color: #fff;
    transition: background-color .3s ease;
    &hover{
        background-color: #326ac0;
        cursor: pointer;
    }
`;

export const Label = styled.label`
    font-family: 'Bebas Neue', cursive;
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 2.4rem;
    margin-top: 2rem;
    display: block;
`;

export const Select = styled.select`
    width: 100%;
    display: block;
    padding: 1rem;
    --webkit-appearance: none;
    border-radius: 10px;
    border: none;
    display: block;
    font-size: 1.2rem;
    outline: none;
`;
export const ErrorStyle = styled.p`
    font-family: 'Bebas Neue', cursive;
    padding: 1rem;
    background-color: #b7322c;
    color: #fff;
    font-weight: 700;
    text-align: center;
    font-size: 1.2rem;
    border-radius: .8rem;
`;
