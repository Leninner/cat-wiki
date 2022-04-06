import styled from 'styled-components';

export const HaveACatContainer = styled.div`
  height: 600px;
  position: relative;
  padding: 50px 107px 98px 108px;
  margin-top: 100px;
  cursor: default;
  display: flex;
  justify-content: space-between;
  margin-bottom: 75px;

  section {
    width: 50%;
  }

  #information {
    max-width: 447.74px;
    h1 {
      font-weight: 700;
      font-size: 48px;
      line-height: 59px;
      width: 430.02px;
      color: #291507;
      margin-bottom: 42px;
    }

    p {
      font-weight: 500;
      font-size: 18px;
      line-height: 22px;
      color: #291507;
    }

    #line {
      width: 67.15px;
      height: 3.21px;
      background: #4d270c;
      border-radius: 77px;
      margin-bottom: 17px;
    }

    .more {
      cursor: pointer;
      display: flex;
      height: 22px;
      font-weight: 700;
      font-size: 18px;
      line-height: 22px;
      color: rgba(41, 21, 7, 0.6);
      margin-top: 66px;

      span {
        margin-left: 10px;
      }
    }
  }

  .masonry {
    max-width: 539px;
    width: 100%;
    display: flex;
    justify-content: space-between;

    div {
      display: flex;
      flex-direction: column;
      align-items: flex-end;

      #secondImg {
        margin-top: 29px;
      }
    }

    img {
      border-radius: 24px;
    }

    #firstImg {
      width: 273.52px;
      height: 167.08px;
      grid-column: 1 / 1 / 2;
    }

    #secondImg {
      width: 195.49px;
      height: 293.24px;
      grid-area: 2 / 1 / 3;
    }

    #thirdImg {
      width: 238.47px;
      height: 385.87px;
      grid-area: 1 / 2 / 2 / 3;
    }
  }
`;
