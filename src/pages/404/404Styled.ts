import styled from "styled-components";
import { Link } from "react-router-dom";


export const Content = styled.div`
    text-align: center;
    padding: 40px 20px;
    max-width: 600px;
    margin: 0 auto;
`

export const Title = styled.h1`
    font-size: 100px;
    font-weight: bold;
    color: #ff6b6b;
    margin: 0 0 20px 0;
    line-height: 1;
`

export const Message = styled.p`
    font-size: 24px;
    font-weight: bold;
    color: #333;
    margin: 0 0 10px 0;
`

export const Subtitle = styled.p`
    font-size: 16px;
    color: #666;
    margin: 0 0 30px 0;
`

export const Actions = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
`

export const Link404 = styled(Link)<{ to: string }>`
    display: inline-block;
    padding: 12px 30px;
    background-color: #4e73df;
    color: white;
    text-decoration: none;
    border-radius: 4px;
    transition: background-color 0.3s;
    border: none;
    cursor: pointer;
    font-size: 16px;

    &:hover {
    background-color: #2e59d9;
    }
`
