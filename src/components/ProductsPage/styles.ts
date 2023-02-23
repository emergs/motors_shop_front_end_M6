import styled from "styled-components";

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
            background-color: yellow;
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
            justify-content: space-evenly;

            > p {
                /* background-color: var(--color-brand-2); */
                font: var(--body-2-500);
                color: var(--color-brand-1);
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
`;

export const RightContent = styled.div`
    > div {
        background-color: yellow;
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
`;

export const Comments = styled.div`
    padding: 0rem 0.75rem 1.5rem;

    > div {
        background-color: yellow;
        padding: 1.563rem 0.75rem;
    }
    .commentsList {
        h2 {
            font: var(--heading-6-600);
            color: var(--grey-1);
        }
        ul {
            li {
                display: flex;
                flex-direction: row;
                align-items: center;

                .commentImage {
                    height: 30px;
                    width: 30px;
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
            }
        }
    }
`;
