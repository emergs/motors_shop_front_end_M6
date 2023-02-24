import { HTMLAttributes, ReactNode } from "react";
import styled from "styled-components";

export const MyList = styled.li``;

export interface INoImageProps{
    children: ReactNode;
    width?: string;
    height?: string;
    color?: string;
}



export const CommentImage = styled.div<INoImageProps>`
    height: ${(props) => props.height ? props.height : "35px"};
    width: ${(props) => props.width ? props.width : "35px"};
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
