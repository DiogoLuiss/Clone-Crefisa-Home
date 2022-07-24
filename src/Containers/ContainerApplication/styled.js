import styled from 'styled-components'

export const DivMain = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin-top: 50px;
`

export const DivLeft = styled.div`
  display: flex;
  flex-direction: row;
  width: 65%;
  gap: 150px;
  @media (max-width: 1290px) {
    gap: 50px;
    width: 100%;
    padding: 0px 150px;
  }

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
    margin-bottom: 10px;
  }
`
export const DivParagraph = styled.div`
  width: 60%;
  text-align: left;
  display: flex;
  justify-content: space-between;
  padding: 5px;
  line-height: 2;
`
export const DivCrefisaImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 30px;
  gap: 20px;
  width: 180px;
  p {
    margin-top: 10px;
    text-align: center;
    font-size: 18px;
  }
  div {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 118px;
  }
`
export const Img = styled.img`
  height: 139%;
`
