import styled from "styled-components";

export const InforContainer = styled.div`

  display: flex;
  flex-wrap: wrap;
  max-width: 900px;
  margin: 0 auto;
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);

  h2 {
    word-wrap: break-word;
  }

  .image {
    display: flex;
    justify-content: center;
    width: 100vw;
    height: 15vh;
    
    @media (min-width: 600px) {
      height: 30vh;
    }
    
    @media (min-width: 900px){
      padding: 1rem 0;
      
    }

    img {
      
      width: 100%;
      object-fit: cover;
      
      @media (min-width: 900px){
        border-radius: 10px;
        box-shadow: 0 0 1px hsl(0deg 0% 0% / 0.075),0 0 2px hsl(0deg 0% 0% / 0.075),0 0 4px hsl(0deg 0% 0% / 0.075),0 0 8px hsl(0deg 0% 0% / 0.075),0 0 16px hsl(0deg 0% 0% / 0.075);
      }
    }

  }
  
`;

export const RestaurantInfos = styled.div`
  
  display: flex;
  flex-wrap: wrap;
  max-width: 900px;
  margin: 0 auto;
  padding: 1rem;
  color: var(--gray);
  position: sticky;
  top: 0;
  background-color: var(--white);
  z-index: 3;

  @media (min-width: 900px){
    padding: .5rem;
  }

  h2 {
    color: var(--dark-gray);
    letter-spacing: 1.5px;
  }
  
  p {
    color: var(--gray);
    font-size: 1.2rem;
  }

  h3 {
    font-size: 1.4rem;
    font-weight: 500;
    color: var(--dark-blue);
  }

  .tags__box {
    display: flex;
    flex-wrap: wrap;
    gap: .5rem;
    margin-top: 5px;

    li {
      border: 1px solid var(--dark-blue);
      padding: .5rem;
      border-radius: 15px;
      font-weight: bold;
      color: var(--dark-blue);
    }

  }

  .restaurant-info {
    width: calc(100% - 60px);
    @media (min-width: 900px){
      padding-left: .5rem;
    }
  }
  
  .restaurant-logo{
    @media (min-width: 900px){
      padding-top: .4rem;
    }
  }

  .restaurant-logo > img {
    width: 60px;
    height: 60px;
    border-radius: 10%;
    box-shadow: 0 0 1px hsl(0deg 0% 0% / 0.075), 0 0 2px hsl(0deg 0% 0% / 0.075), 0 0 4px hsl(0deg 0% 0% / 0.075), 0 0 8px hsl(0deg 0% 0% / 0.075), 0 0 16px hsl(0deg 0% 0% / 0.075);
  }
  
`
