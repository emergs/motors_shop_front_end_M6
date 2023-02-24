import styled from "styled-components";

export const MyList = styled.li``;

export const CommentImage = styled.div`
    height: 35px;
    width: 35px;
    border-radius: 50%;
    background-color: ${(props) => props.color};
    display: flex;
    justify-content: center;
    align-items: center;

    > h4 {
        font-family: "Inter";
        color: var(--white-fixed);
        font-size: 14px;
    }
`;
