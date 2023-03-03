import styled from "styled-components";

const colors = [
    '--random-1',
    '--random-2',
    '--random-3',
    '--random-4',
    '--random-5',
    '--random-6',
    '--random-7',
    '--random-8',
    '--random-9',
    '--random-10',
    '--random-11',
    '--random-12'
  ];
  
  // selecione um número aleatório de 0 a 11 para escolher a cor
  const randomIndex = Math.floor(Math.random() * colors.length);
  
  // selecione a cor correspondente com base no índice aleatório
  const color = `var(${colors[randomIndex]})`;

export const Container = styled.div`
    width: 100%;
    height: 100%;
`;

export const TestDiv = styled.div`
    background-color: var(--color-brand-2);
    height: 270px;
    width: 100%;

    .main,
    .coments {
        padding: 1.563rem 0.75rem;
    }
    @media screen and (min-width: 768px) {
        height: 380px;
        .main {
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            justify-content: space-around;
            
        }
        .leftContent {
            max-width: 720px;
            .imageMain {
                height: 300px;

                img {
                    width: auto;
                }
            }
        }
    }
`;

export const ProductPage = styled.div`
    /* background-color: red; */
    width: 100vw;

    /* height: 100vh; */

    .imageMain {
        /* width: 280.97px; */
        height: 200.96px;
        /* background-color: yellow; */
        display: flex;
        justify-content: center;
        align-items: center;
        /* margin-bottom: 15px; */

        img {
            width: 90%;
            height: 70%;
        }
    }
    .mainImg {
        width: 293.97px;
        height: 252.96px;
    }
    .leftContent {
        > div {
            margin-bottom: 20px;
            /* background-color: var(--grey-10); */
            /* background-color: yellow; */
            background-color: var(--grey-10);
            border-radius: 4px;
        }
    }
    .info {
        padding: 1.563rem 0.75rem;

        .priceYear {
            margin-bottom: 15px;
            > div,
            h3,
            button {
                margin-top: 15px;
            }
            h3 {
                font: var(--heading-7-500);
                color: var(--grey-1);
            }
        }

        .carName {
            font: var(--heading-6-600);
            color: var(--grey-1);
        }
        .kmYear {
            width: 90px;
            display: flex;
            justify-content: flex-start;
            flex-direction: row;
            > p {
                /* background-color: var(--color-brand-2); */
                font: var(--body-2-500);
                color: var(--color-brand-1);
                margin-left: 10px;
            }
        }
    }

    .description {
        padding: 1.563rem 0.75rem;
        h2 {
            font: var(--heading-6-600);
            color: var(--grey-1);
            margin-bottom: 15px;
        }
        p {
            font: var(--body-1-400);
            color: var(--grey-2);
        }
    }
    @media screen and (min-width: 768px) {
        .main {
        }
    }
`;

export const RightContent = styled.div`
    > div {
        /* background-color: yellow; */
        background-color: var(--grey-10);

        padding: 1.563rem 0.75rem;
        border-radius: 4px;
        margin-bottom: 15px;
    }
    .allPics {
        h2 {
            font: var(--heading-6-600);
            color: var(--grey-1);
            /* margin-bottom: 15px; */
        }
    }
    ul {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        margin-top: 15px;
    }

    li {
        height: 90px;
        width: 90px;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
            height: 40px;
            width: 80px;
        }
    }

    .advertiser {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        h3 {
            margin-top: 15px;
            font: var(--heading-6-600);
            color: var(--grey-1);
        }
        p {
            font: var(--body-1-400);
            margin-top: 15px;
            padding-left: 20px;
            padding-right: 10px;
            margin-bottom: 15px;
        }
    }
    .profileImage {
        height: 104px;
        width: 104px;
        background-color: var(--color-brand-1);
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;

        h2 {
            font-family: "Inter";
            color: var(--white-fixed);
            font-size: 36px;
        }
    }
    @media screen and (min-width: 768px) {
        max-width: 440px;
        li{
            height: 108px;
            width: 108px;
        }
    }
`;

export const Comments = styled.div`
    padding: 0rem 0.75rem 1.5rem;

    > div {
        /* background-color: yellow; */
        background-color: var(--grey-10);

        padding: 1.563rem 1.5rem;
    }
    .commentsList {
        border-radius: 4px;

        h2 {
            font: var(--heading-6-600);
            color: var(--grey-1);
        }
        ul {
            li {
                /* display: flex; */
                /* flex-direction: row; */
                /* align-items: center; */
                margin-top: 15px;
                p {
                    margin-top: 15px;
                    text-align: justify;
                }
                .commentsInfo {
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    > h3,
                    img,
                    span {
                        margin-left: 8px;
                    }
                    span {
                        font-size: 12px;
                        font-family: "Inter";
                        color: var(--grey-2);
                    }
                    img {
                        height: 6px;
                        width: 6px;
                    }
                    h3 {
                        width: 50%;
                        font: var(--body-2-500);
                        white-space: nowrap;
                        overflow: hidden;
                        font-weight: bold;
                        text-overflow: ellipsis;
                    }
                }
            }
        }
    }
    .commentsPost {
        margin-top: 15px;
        border-radius: 4px;

        .commentsPostInfo {
            display: flex;
            flex-direction: row;
            align-items: center;
            > div {
                height: 35px;
                width: 35px;
                background-color: var(--color-brand-1);
                border-radius: 50%;
                display: flex;
                justify-content: center;
                align-items: center;

                h2 {
                    font-family: "Inter";
                    color: var(--white-fixed);
                    font-size: 14px;
                }
            }

            > h3,
            img {
                margin-left: 8px;
            }
            img {
                height: 6px;
                width: 6px;
            }
            h3 {
                width: 50%;
                font: var(--body-2-500);
                white-space: nowrap;
                overflow: hidden;
                font-weight: bold;
                text-overflow: ellipsis;
            }
        }
    }
    @media screen and (min-width: 768px) {
        display: flex;
        justify-content: space-around;
        .blank {
            width: 440px;
        }
        .commentsAll {
            max-width: 720px;
            min-width: 720px;
        }
    }
`;

export const Form = styled.form`
    margin-top: 15px;
    textarea {
        padding: 10px;
        height: 128px;
        width: 100%;
        margin-bottom: 15px;
        border: none;
    }
`;
