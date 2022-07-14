import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;

  margin: 0 auto;
  width: 100vw;
`;

export const UlContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  max-width: 1600px;
  margin: 0 auto;
  gap: 0.45rem;
  padding: 0 1rem 50px;

  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }

  ::-webkit-scrollbar-thumb {
    background: var(--blue);
  }

  h1 {
    font-size: clamp(2.5rem, 2.75vw, 3vw);
    text-shadow: 0 0 2px rgba(150, 150, 150, 0.45);

    color: #202225;

    padding: 0.5rem;
  }

  .title--container {
    margin: 0 auto;
    width: 100%;
  }

  .cardContainer {
    
    display: flex;
    flex-wrap: wrap;
    width: 100%;

    gap: 0.75rem;
    margin-bottom: 1rem;

    @media (min-width: 600px) {
      gap: 2rem;
    }
    
  }

  .card {
    cursor: pointer;

    display: flex;

    width: 100%;
    gap: 0.75em;

    border-radius: 10px;
    box-shadow: 0 0 1px hsl(0deg 0% 0% / 0.075), 0 0 2px hsl(0deg 0% 0% / 0.075),
    0 0 4px hsl(0deg 0% 0% / 0.075), 0 0 8px hsl(0deg 0% 0% / 0.075),
    0 0 16px hsl(0deg 0% 0% / 0.075);
    overflow: hidden;
    
    &:hover{
      transform: scale(1.025);
      transition: all .3s cubic-bezier(0,0,.5,1);
    }

    .cardInfo {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      width: calc(100% - 90px);

      h2 {
        font-size: clamp(1.6rem, 2vw, 2rem);
        font-weight: 700;

        color: var(--dark-gray);
      }

      p {
        font-size: clamp(1rem, 3vw, 1.5rem);
        font-weight: 600;

        color: var(--gray);
      }

      ul {
        display: flex;
        flex-wrap: wrap;

        font-size: 1rem;
        font-weight: bold;

        color: var(--blue);

        gap: 0.5rem;
        width: 100%;

        li > svg {
          width: 2rem;
          height: auto;
          object-fit: cover;
          color: var(--dark-blue);
        }
      }
    }

    @media (min-width: 500px) {
      flex-wrap: wrap;

      width: calc((100% - 4rem) / 2);

      img {
        width: 100%;
        height: 150px;
        object-fit: cover;
        border-radius: 10px 10px 0 0;
      }

      .cardInfo {
        width: 100%;
        padding: 1rem 1rem 2rem;
        gap: 0.85rem;
      }

      @media (min-width: 800px) {
        width: calc((100% - 6rem) / 3);
      }

      @media (min-width: 1200px) {
        width: calc((100% - 10rem) / 5);
      }
    }
  }

  img {
    width: 90px;
    height: 90px;

    border-radius: 10px 0 0 10px;
  }
`;
