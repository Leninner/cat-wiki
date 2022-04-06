import styled from 'styled-components';

export const MostSearchedBreedsContainer = styled.div`
  height: 600px;
  position: relative;
  background-color: #e3e1dc;
  border-radius: 0 0 42px 42px;
  padding: 50px 107px 98px 108px;
  margin-bottom: 100px;
  cursor: default;

  #most-searched {
    h2 {
      font-weight: 500;
      font-size: 18px;
      line-height: 22px;
      color: #291507;
    }

    div {
      width: 59.18px;
      height: 3.21px;
      background-color: #4d270c;
    }
  }

  #discovered {
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: space-between;

    h1 {
      width: 536.93px;
      height: 118px;
      font-size: 48px;
      line-height: 59px;
      color: #291507;
    }

    div {
      font-size: 18px;
      line-height: 22px;
      text-align: right;
      color: rgba(41, 21, 7, 0.6);
      display: flex;
      align-items: center;
      cursor: pointer;

      span {
        margin-left: 10px;
      }
    }
  }
`;
