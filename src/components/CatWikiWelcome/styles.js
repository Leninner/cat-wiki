import styled from 'styled-components';

export const CatWikiWelcomeContainer = styled.div`
  height: 600px;
  position: relative;

  img {
    border-radius: 42px 42px 0 0;
    height: 100%;
    object-fit: cover;
    width: 100%;
  }

  div {
    position: absolute;
    z-index: 1;
    color: white;
    top: 115px;
    left: 108px;
    width: 394.6px;

    img {
      border-radius: 0 0 0 0;
      margin-bottom: 11px;
    }

    p {
      font-weight: 500;
      font-size: 24px;
      line-height: 29px;
      width: 371.3px;
      color: #ffffff;
      margin-bottom: 52px;
    }

    form {
      width: 100%;
      height: 69.67px;
      position: relative;
      cursor: pointer;

      input {
        width: 100%;
        height: 100%;
        background: #ffffff;
        border-radius: 59px;
        padding-left: 28.6px;
        font-size: 18px;
        font-weight: 500;
        font-size: 18px;
        line-height: 22px;
        cursor: pointer;
      }

      span {
        position: absolute;
        height: 100%;
        top: 0;
        right: 28.6px;
        width: 28.6px;
        display: flex;
        align-items: center;
        color: #291507;
      }

      .options {
        position: absolute;
        top: calc(100% + 17px);
        color: white;
        width: 394.62px;
        height: 219.72px;
        left: 0;
        background: #ffffff;
        border-radius: 24px;
        padding: 15px 0 15px 25px;

        #some {
          position: relative;
          color: black;
          top: 0;
          left: 0;
          overflow-y: scroll;
          overflow-x: hidden;
          width: 100%;
          height: 100%;

          .catsBreedsNames {
            width: 100%;
            height: 50px;
          }

          &::-webkit-scrollbar {
            -webkit-appearance: none;
          }

          &::-webkit-scrollbar:vertical {
            width: 10px;
          }

          &::-webkit-scrollbar-button:increment,
          &::-webkit-scrollbar-button {
            display: none;
          }

          &::-webkit-scrollbar:horizontal {
            height: 10px;
          }

          &::-webkit-scrollbar-thumb {
            background-color: #797979;
            border-radius: 20px;
            border: 2px solid #797979;
          }

          &::-webkit-scrollbar-track {
            border-radius: 10px;
          }
        }
      }
    }
  }
`;
