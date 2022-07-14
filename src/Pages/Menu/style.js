import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100vh;
  padding: 1rem;
`;

export const Content = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  max-width: 1100px;
  width: 100%;
  padding: 1rem;

  > div:first-child {
    display: flex;
    justify-content: space-between;
    align-items: center;

    > img {
      width: 55%;

      cursor: pointer;
    }

    > button {
      font-size: 1.2rem;

      padding: 0.5rem;
    }
  }

  > div:nth-child(2) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    h2 {
      font-size: 1.5rem;
      font-style: normal;
      font-weight: 700;
      text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.25);
    }
    button {
      font-size: 1.2rem;
      padding: 0.8rem;
    }
  }

  ul {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 2rem;

    li {
      /* max-width: 200px;
      width: 100%; */
      width: calc((100% - 8em) / 5);
      display: flex;
      flex-direction: column;
      //align-items: center;
      gap: 0.3rem;
      border-radius: 10px;

      > img {
        width: 100%;
        height: 200px;
        border-radius: 10px;
        box-shadow: 0 0 5px 0em rgb(158, 157, 157);
        object-fit: cover;
      }

      .boxInfos {
        display: flex;
        flex-direction: column;
        width: 100%;

        > div {
          display: flex;
          width: 100%;
          justify-content: space-between;

          > div {
            display: flex;
            flex-direction: column;
            gap: 0.3rem;

            p {
              font-style: normal;
              font-weight: 700;
              font-size: 1.2rem;
              line-height: 1.5rem;

              color: var(--dark-blue);
            }
            span {
              font-style: normal;
              font-weight: 700;
              font-size: 1.2rem;
              line-height: 1.5rem;

              color: var(--dark-gray);
            }
          }
        }

        button {
          width: 100%;
          display: inline-flex;
          gap: 2rem;
          padding: 1px;

          font-style: normal;
          font-weight: 700;
          font-size: 1.1rem;
          line-height: 1.5rem;

          border-color: var(--blue);
          color: var(--dark-blue);

          &:hover {
            box-shadow: 0px 0px 0.2em 1px var(--dark-blue);
            color: var(--dark-gray);
          }

          > img {
            width: 10%;
          }
        }
      }
    }

    @media (max-width: 950px) {
      li {
        width: calc((100% - 6em) / 4);
      }
    }

    @media (max-width: 750px) {
      li {
        width: calc((100% - 4em) / 3);
      }
    }

    @media (max-width:570px){
      li{
        width: calc((100% - 2em) / 2);
      }
    }
    @media (max-width: 380px) {
     
      li {
        width: 100%;
        flex-direction: row;
        gap: 1rem;
        justify-content: space-evenly;
        box-shadow: none;

        > img {
          width: 120px;
          height: 120px;
          border-radius: 10px;
        }

        .boxInfos {
          display: flex;
          flex-direction: column;
          width: 100%;
          justify-content: space-evenly;

          
            button {
              width: 130px;
          
        }
      }
    }
  }
`;
