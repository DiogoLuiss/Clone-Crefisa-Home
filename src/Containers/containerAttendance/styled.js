import styled from 'styled-components'

export const DivMain = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  margin-bottom: 50px;
  h2 {
    color: #888888;
    font-weight: 400;
    letter-spacing: 0.5px;
    font-size: 16px;
    margin-bottom: 10px;
  }
  h3 {
    font-size: 50px;
    color: #23b9e2;
    font-weight: 300;
    letter-spacing: 0.5px;
    max-width: 560px;
    line-height: 1;
  }
`
export const DivLeft = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  @media (max-width: 1150px) {
    width: 40%;
  }
  div {
    margin-top: 10px;
    width: 65%;

    p {
      text-align: left;
      line-height: 2;
    }
  }
`
export const DivParagraph = styled.div`
  display: flex;
  justify-content: space-between;
`
export const DivRight = styled.div`
  display: flex;

  flex-direction: column;
  gap: 10px;
  width: 50%;
  @media (max-width: 1000px) {
    width: 40%;
  }
  @media (max-width: 900px) {
    width: 25%;
  }
  input {
    padding-left: 15px;
    height: 55px;
    outline: none;
    border: 1px solid #dee2e6;
  }
  a {
    color: black;
    text-align: center;
  }
  div {
    display: flex;
    flex-direction: row;
    gap: 20px;
    button {
      margin-top: 10px;
      width: 45%;
      height: 45px;
      cursor: pointer;
    }
  }
`

export const Button1 = styled.button`
  color: #6c757d;
  background-color: transparent;
  background-image: none;
  border-color: #6c757d;
  letter-spacing: 2px;
`
export const Button2 = styled.button`
  background-color: #fdb913;
  border: none;
  color: white;
  letter-spacing: 2px;
`
