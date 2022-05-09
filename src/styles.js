import styled from "styled-components"

export const Container = styled.div`

    text-align: center;
    margin: 4rem 0;

    h1 {
    text-align: center;
    margin: 4rem 0;
    }

`




export const  Lista = styled.ul`

list-style: none;
display: grid;
grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
column-gap: 3rem;
row-gap: 4rem;


`

export const Filme = styled.li`


    display: flex;
    flex-direction: column;
    align-items: center;



img {
    width: 300px;
    border-radius: 1rem;
    margin-bottom: 2rem;


}

span {
    font-weight: bold;
    fonte-size: 120%;
    

}

a{

    transition: all 0.4s;
}

a:hover {
    transform: scale(1.1);

}

`



