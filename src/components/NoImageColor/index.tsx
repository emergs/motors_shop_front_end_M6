import { CommentImage } from "./styles";

export interface IProp {
    name: string;
    children?: React.ReactNode;
}

const MyDiv = ({ name }: IProp) => {
    const colors = [
        "--random-1",
        "--random-2",
        "--random-3",
        "--random-4",
        "--random-5",
        "--random-6",
        "--random-7",
        "--random-8",
        "--random-9",
        "--random-10",
        "--random-11",
        "--random-12",
    ];

    const randomIndex = Math.floor(Math.random() * colors.length);

    const color = `var(${colors[randomIndex]})`;


    let nomes = name.split(" ");
    let iniciais = "";

    for (let i = 0; i < nomes.length && i < 2; i++) {
        iniciais += nomes[i][0];
    }

    return (
        <CommentImage color={color}>
            <h4>{iniciais}</h4>
        </CommentImage>
    );
};

export default MyDiv;