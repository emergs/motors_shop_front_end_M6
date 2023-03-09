import styled from "styled-components";

export const ModalEdit = styled.div`
    position: fixed;
    inset: 0;
    width: 100%;
    height: 100vh;
    z-index: 101;

    .overlay{
        display: flex;
        align-items: center;
        justify-content: center;
        
        background-color: rgb(60, 60, 60, .7);
        
        width: 100%;
        height: 100vh;
        overflow-y: auto;

        
    }

    .content{
        position: relative;

        background-color: var(--grey-10);
        padding: 20px;

        .closeClick{
            position: absolute;
            border: none;
            background: transparent;
            top: 10px;
            right: 10px;
            opacity: .5;
            transition: 1s;

            &:hover{
                opacity: 1;
            }
        }
        .commentEdit{
            margin-top: 15px;
            
        }
        
    }
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    textarea{
        width: 220px;
        margin-top: 15px;
        height: 120px;
        margin-bottom: 15px;
    }
`
