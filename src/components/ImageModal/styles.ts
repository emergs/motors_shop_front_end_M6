import styled from "styled-components";

export const ModalImage = styled.div`
    position: fixed;
    inset: 0;
    width: 100%;
    height: 100vh;
    z-index: 101;

    .overlay {
        display: flex;
        align-items: center;
        justify-content: center;

        background-color: rgb(60, 60, 60, 0.7);

        width: 100%;
        height: 100vh;
        overflow-y: auto;
    }

    .content {
        position: relative;
        height: 400px;
        width: 600px;
        background-color: var(--grey-10);
        padding: 20px;

        .closeClick {
            position: absolute;
            border: none;
            background: transparent;
            top: 10px;
            right: 10px;
            opacity: 0.5;
            transition: 1s;

            &:hover {
                opacity: 1;
            }
        }

        h3 {
            margin-top: 20px;
            text-align: center;
            margin-bottom: 15px;
        }
        figure {
            display: flex;
            height: 80%;
            justify-content: center;
            align-items: center;
        }
        img {
            height: 100%;
            width: 100%;
        }
        /* .commentEdit{
            margin-top: 15px;
            
        } */
    }
`;
