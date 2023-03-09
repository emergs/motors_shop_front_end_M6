import styled from "styled-components";

const AuctionStyled = styled.section`
  padding: 2.375rem 0.75rem;

  @media(min-width: 768px){
    padding: 100px 60px 0px 60px;
  }


  h2{
    font: var(--heading-5-600);
    margin-bottom: 2.313rem;
  }

  ul{
    display: flex;
    gap:0.5rem;
    overflow-y: hidden;
    overflow-x: scroll;
    margin-bottom: 67px;
  }

  ul::-webkit-scrollbar{
    scrollbar-width: none;
    color: red;
  }

  .card{
    height: 100%;
    width: 328px;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.29) 0%, #000000 100%);
    display: flex;
    flex-direction: column;
    position: relative;
    cursor: pointer;
  }


  .card:hover{
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.71) 0%, #000000 100%);
  }

  .card-info{
    padding: 33px 22px;
    width: 328px;
  }

  .card-time{
    width: 123px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-radius: 32px;
    background-color: var(--white-fixed);
  } 

  .card-time span:first-child{
    width: 20px;
    height: 20px;
    color: var(--color-brand-1);
  }

  .card-time span:first-child svg{
    width: 100%;
    height: 100%;
  }

  .card-time span:last-child{
    font: var(--heading-7-500);
    color: var(--grey-1);
  }

  .card h3{
    font: var(--heading-6-600);
    color: var(--grey-10);
    margin-top: 35px;
    min-height: 50px;
  }

  .card img{
    position: absolute;
    top: 116px;
    width: 87.5%;
    height: 155px;
    z-index: -1;
  }

  .card p{
    font: var(--body-1-400);
    color: var(--grey-5);
    line-height: 28px;
    margin-top: 20px;
    max-height: 84px;
    overflow: hidden; 
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }

  .card-info-owner{
    height: 32px;
    margin-top: 20px;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .card-info-owner span:first-child{
    width: 32px;
    height: 100%;
    background-color: var(--color-brand-1);
    border-radius: 50%;
    color: var(--white-fixed);
    font: var(--body-2-500);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .card-info-owner span:last-child{
    font: var(--body-2-500);
    color: var(--white-fixed);
  }

  .card-year-km{
    margin-top: 20px;
    display: flex;
    gap: 12px;
    color: var(--color-brand-1);
    font: var(--body-2-500);
  }

  .card-year-km span{
    width: 50px;
    height: 32px;
    background-color: var(--color-brand-4);
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .card-price{
    margin-top: 20px;
    color: var(--white-fixed);
    font: var(--heading-7-500);
    height: 20px;
  }

  .card-auction{
    height: 3.813rem;
    background-color: var(--color-brand-1);
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  .card-auction span:first-child{
    font: var(--button-big-text);
    color: var(--white-fixed);
  }

  .card-auction span:last-child{
    color: var(--white-fixed);
    width: 26px;
    height: 14px;
  }

  @media(min-width: 768px) {
    ul{
      margin-bottom: 200px;
      height: 388px;
    }
    .card{
      width: 735px;
      height: 388px;
      position: relative;
    }
    .card-info{
      width: 735px;
      padding: 24px 41px 20px 36px;
    }
    .card-time{
      
    }
    .card-info h3{
      margin-top: 69px;
      min-height: 0;
    }
    .card img{
      position: absolute;
      top: 6.65px;
      left: 52.36px;
      width: 79.18%;
      height: 315px;
      z-index: -1;
    }
    .card-info p{
      margin-top: 16px;
      -webkit-line-clamp: 1;
    }
    .card-info-owner{
      margin-top: 20px;
    }
    .card-year-km-price{
      display: flex;
      justify-content: space-between;
      margin-top: 24px;
    }
    .card-year-km{
      margin-top: 0;
    }
    .card-price{
      margin-top: 0;
    }
    .card-auction{
      width: 735px;
      display: flex;
      justify-content: space-between;
      padding:0 36px;
    }

  }
`

export { AuctionStyled }