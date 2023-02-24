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

const ProductsPage = () => {
    return (
        <Container>
            <Header />
            <ProductPage>
                <TestDiv>
                    <div className="main">
                        <div className="leftContent">
                            <div className="imageMain">
                                <img
                                    src="https://cdn.discordapp.com/attachments/674032411092320324/1078080333397893181/image.png"
                                    alt="Imagem do exemplo"
                                    className="mainImg"
                                />
                            </div>

                            <div className="info">
                                <h2 className="carName">
                                    Mercedes Benz A 200 CGI ADVANCE SEDAN
                                    Mercedes Benz A 200
                                </h2>
                                <div>
                                    <div className="priceYear">
                                        <div className="kmYear">
                                            <p>2014</p>
                                            <p>0km</p>
                                        </div>
                                        <h3>R$ 20.000,00</h3>
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
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy
                                    text ever since the 1500s, when an unknown
                                    printer took a galley of type and scrambled
                                    it to make a type specimen book.
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
                                    <li>
                                        <div className="commentsInfo">
                                            <div className="commentImage">
                                                <h2>FA</h2>
                                            </div>
                                            <h3>Flávio Augusto</h3>
                                            <img src={ellipse3} alt="" />
                                            <span>há 3 dias</span>
                                        </div>
                                        <p>
                                            Lorem Ipsum is simply dummy text of
                                            the printing and typesetting
                                            industry. Lorem Ipsum has been the
                                            industry's standard dummy text ever
                                            since the 1500s, when an unknown
                                            printer took a galley of type and
                                            scrambled it to make a type specimen
                                            book.
                                        </p>
                                    </li>
                                    <li>
                                        <div className="commentsInfo">
                                            <div className="commentImage">
                                                <h2>FH</h2>
                                            </div>
                                            <h3>Fernando Henrique</h3>
                                            <img src={ellipse3} alt="" />
                                            <span>há 3 dias</span>
                                        </div>
                                        <p>
                                            Lorem Ipsum is simply dummy text of
                                            the printing and typesetting
                                            industry. Lorem Ipsum has been the
                                            industry's standard dummy text ever
                                            since the 1500s, when an unknown
                                            printer took a galley of type and
                                            scrambled it to make a type specimen
                                            book.
                                        </p>
                                    </li>
                                    <li>
                                        <div className="commentsInfo">
                                            <div className="commentImage">
                                                <h2>JL</h2>
                                            </div>
                                            <h3>Julia Lima</h3>
                                            <img src={ellipse3} alt="" />
                                            <span>há 3 dias</span>
                                        </div>
                                        <p>
                                            Lorem Ipsum is simply dummy text of
                                            the printing and typesetting
                                            industry. Lorem Ipsum has been the
                                            industry's standard dummy text ever
                                            since the 1500s, when an unknown
                                            printer took a galley of type and
                                            scrambled it to make a type specimen
                                            book.
                                        </p>
                                    </li>
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
                        <div className="blank">
                            
                        </div>
                    </Comments>

                    <Footer />
                </TestDiv>
            </ProductPage>
        </Container>
    );
};
export default ProductsPage;
