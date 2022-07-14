import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 2rem;
  //height: 100vh;
  //padding: 1rem;
  //background-color: var(--white-gray);
`;

export const Header = styled.header`
  width: 100%;

  border-bottom: 1px solid rgba(0, 0, 0, 0.25);
  //box-shadow: 0 0 5px 0em var(--gray);
  justify-content: center;
  display: flex;

  > div:first-child {
    max-width: 1300px;
    display: flex;
    width: 100%;

    justify-content: space-between;
    align-items: center;
    padding: 0.5rem;
    h2 {
      font-size: 2rem;
      font-style: normal;
      font-weight: 700;
      text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.25);
    }

    button {
      font-size: 1.2rem;
      padding: 1rem;
      font-weight: 500;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  //gap: 1rem;
  max-width: 1300px;
  width: 100%;

  //padding: 1rem;

  @media (max-width: 950px) {
    flex-direction: column;
    transition: 1s;
  }
`;

export const Box = styled.div`
  width: calc(100% / 3);
  //margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;

  @media (max-width: 950px) {
    flex-direction: row;
    width: 100%;
    transition: 1s;
  }

  > div:first-child {
    width: 270px;
    height: 250px;
    border: 1px;
    border-radius: 100%;
    &:hover {
      transform: scale(1.03);
      transition: all 0.75s ease;
      box-shadow: 0px 0px 15px -3px;
      overflow: hidden;
    }
    @media (max-width: 950px) {
      width: 220px;
      height: 200px;
      transition: 1s;
    }

    @media (max-width: 435px) {
      transition: 1s;
      width: 140px;
      height: 120px;
    }
    > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 100%;
    }
  }

  > div:nth-child(2) {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
    align-items: center;

    > p {
      font-size: clamp(1rem, 1.3rem, 1.5rem);
      font-style: normal;
      font-weight: 600;
      color: var(--dark-blue);
    }

    /*  > svg {
      size: ;
    } */

    > span:nth-child(2) {
      font-size: 1.2rem;
      font-style: normal;
      font-weight: 700;
      color: var(--gray);
    }

    > span:nth-child(3) {
      font-size: 1.2rem;
      font-style: normal;
      font-weight: 500;
      color: var(--dark-blue);
      display: flex;
      align-items: center;

      > a {
        color: var(--dark-blue);

        &:hover {
          color: var(--blue);
        }
      }
    }
  }
`;
