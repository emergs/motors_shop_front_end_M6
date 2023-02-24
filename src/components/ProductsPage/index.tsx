import Button from "../Button";
import Footer from "../Footer";
import Header from "../Header";
import {
    Comments,
    Container,
    Form,
    ProductPage,
    RightContent,
    TestDiv,
} from "./styles";
import ellipse3 from "../../assets/images/ellipse3.png";
import Input from "../Input/input";
import { CommentImage } from "../NoImageColor/styles";
import MyDiv from "../NoImageColor";
import { useParams } from "react-router-dom";
import { vehicles } from "../../database";

const ProductsPage = () => {
    
    const { productId } = useParams()
    console.log(productId)

    // const [ car, setCar] = useState({})

    let atualCar = vehicles.find((car)=> car.id == productId)
    console.log(atualCar)
    
    let myArr = [
        { id: "0", name: "Fernando Henrique Sousa", abre: "FH", image: null },
        { id: "1", name: "João Vitor", abre: "JV", image: null },
        { id: "2", name: "Fabio Augusto", abre: "FA",image: null },
    ];

    return (
        <Container>
            <Header />
            <ProductPage>
                <TestDiv>
                    <div className="main">
                        <div className="leftContent">
                            <div className="imageMain">
                                <img
                                    src={atualCar?.img[0]}
                                    alt="Imagem do exemplo"
                                    className="mainImg"
                                />
                            </div>

                            <div className="info">
                                <h2 className="carName">
                                    {atualCar?.name}
                                </h2>
                                <div>
                                    <div className="priceYear">
                                        <div className="kmYear">
                                            <p>{atualCar?.year}</p>
                                            <p>{`${atualCar?.km}km`}</p>
                                        </div>
                                        <h3>{`R$ ${atualCar?.price}`}</h3>
                                    </div>
                                    <Button
                                        width="80px"
                                        height="30px"
                                        backgroundColor="var(--color-brand-1)"
                                        color="var(--white-fixed)"
                                    >
                                        Comprar
                                    </Button>
                                </div>
                            </div>

                            <div className="description">
                                <h2>Descrição</h2>
                                <p>
                                    {atualCar?.info}
                                </p>
                            </div>
                        </div>
                        <RightContent>
                            <div className="allPics">
                                <h2>Fotos</h2>
                                <ul>
                                    <li>
                                        <img
                                            src="https://cdn.discordapp.com/attachments/674032411092320324/1078080333397893181/image.png"
                                            alt=""
                                        />
                                    </li>
                                    <li>
                                        <img
                                            src="https://cdn.discordapp.com/attachments/674032411092320324/1078080333397893181/image.png"
                                            alt=""
                                        />
                                    </li>
                                    <li>
                                        <img
                                            src="https://cdn.discordapp.com/attachments/674032411092320324/1078080333397893181/image.png"
                                            alt=""
                                        />
                                    </li>
                                    <li>
                                        <img
                                            src="https://cdn.discordapp.com/attachments/674032411092320324/1078080333397893181/image.png"
                                            alt=""
                                        />
                                    </li>
                                    <li>
                                        <img
                                            src="https://cdn.discordapp.com/attachments/674032411092320324/1078080333397893181/image.png"
                                            alt=""
                                        />
                                    </li>
                                    <li>
                                        <img
                                            src="https://cdn.discordapp.com/attachments/674032411092320324/1078080333397893181/image.png"
                                            alt=""
                                        />
                                    </li>
                                    <li>
                                        <img
                                            src="https://cdn.discordapp.com/attachments/674032411092320324/1078080333397893181/image.png"
                                            alt=""
                                        />
                                    </li>
                                </ul>
                            </div>
                            <div className="advertiser">
                                <div className="profileImage">
                                    <h2>SL</h2>
                                </div>
                                <h3>Samuel Leão</h3>
                                <p>
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry. Lorem
                                    Ipsum has been the industry's
                                </p>
                                <Button
                                    color="var(--white-fixed)"
                                    backgroundColor="var(--grey-0)"
                                    width="206px"
                                    height="35px"
                                >
                                    Ver todos anuncios
                                </Button>
                            </div>
                        </RightContent>
                    </div>
                    <Comments>
                        <div className="commentsAll">
                            <div className="commentsList">
                                <h2>Comentários</h2>
                                <ul>
                                    {myArr.map((e) => {
                                        return (
                                            <li key={e.id}>
                                                <div className="commentsInfo">
                                                    {e.image ? <></> : <MyDiv name={e.name} />}
                                                    
                                                    <h3>{e.name}</h3>
                                                    <img
                                                        src={ellipse3}
                                                        alt=""
                                                    />
                                                    <span>há 3 dias</span>
                                                </div>
                                                <p>
                                                    Lorem Ipsum is simply dummy
                                                    text of the printing and
                                                    typesetting industry. Lorem
                                                    Ipsum has been the
                                                    industry's standard dummy
                                                    text ever since the 1500s,
                                                    when an unknown printer took
                                                    a galley of type and
                                                    scrambled it to make a type
                                                    specimen book.
                                                </p>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                            <div className="commentsPost">
                                <div className="commentsPostInfo">
                                    <div className="commentPostImage">
                                        <h2>SL</h2>
                                    </div>
                                    <h3>Samuel Leão</h3>
                                </div>
                                <Form>
                                    <textarea
                                        name=""
                                        id=""
                                        placeholder="Carro muito confortável, foi uma ótima experiência de compra..."
                                    ></textarea>
                                    <Button
                                        width="108px"
                                        height="38px"
                                        backgroundColor="var(--color-brand-1)"
                                        color="var(--white-fixed)"
                                    >
                                        Comentar
                                    </Button>
                                </Form>
                            </div>
                        </div>
                        <div className="blank"></div>
                    </Comments>

                    <Footer />
                </TestDiv>
            </ProductPage>
        </Container>
    );
};
export default ProductsPage;
