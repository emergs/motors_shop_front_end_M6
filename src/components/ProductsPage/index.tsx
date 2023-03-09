import moment from "moment";
import "moment/locale/pt-br";
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
import { useForm } from "react-hook-form";
import MyDiv from "../NoImageColor";
import { useParams } from "react-router-dom";
import { Key, useContext, useEffect, useState } from "react";
import api from "../../services/api";
import { ICommentProps, IPhoto, IVehicleProps } from "./interfaces";
import { FiDelete } from "react-icons/fi";
import KebabMenu from "../kebbabMenu";
import { SellerContext } from "../../contexts/Seller";
import EditModal from "../EditCommentModal";

export interface FormCommentValues {
    comment: string;
}

const ProductsPage = () => {
    const { productId } = useParams();
    const {
        loading,
        setLoading,
        vehicle,
        setVehicle,
        nameSplited,
        setNameSplited,
        comments,
        setComments,
        userLoggedId,
        setUserLoggedId,
        isOpenEdit,
        setIsOpenEdit,
        setVehicleGalery,
        vehicleGalery,
    } = useContext(SellerContext);

    useEffect(() => {
        const fetchData = async () => {
            const result = await api.get(`/vehicle/${productId}`);
            const idLogado = localStorage.getItem("@MotorShopUSERID");
            if (idLogado) {
                setUserLoggedId(idLogado);
            }
            moment.locale("pt-br");
            // console.log(result.data.imageGalery.photos[0].urlImage)
            setVehicle(result.data);
            setComments(result.data.comments);
            setVehicleGalery(result.data.imageGalery.photos);
            let nome = result.data.users.name.split(" ");
            let iniciais = "";
            for (let i = 0; i < nome.length && i < 2; i++) {
                iniciais += nome[i][0];
            }
            setNameSplited(iniciais);
            setLoading(false);
        };

        fetchData();
    }, [setComments, setLoading]);

    function timePost(time: string) {
        // moment.locale("pt-br");
        // const updatedTime = moment(time).fromNow();

        // return updatedTime;
        const updatedTime = new Date(time);
        const now = new Date();
        const diff = now.getTime() - updatedTime.getTime();
        const seconds = Math.floor(diff / 1000);

        if (seconds < 60) {
            if (seconds === 1) {
                return `há ${seconds} segundo`;
            }
            return `há ${seconds} segundos`;
        }

        const minutes = Math.floor(seconds / 60);

        if (minutes < 60) {
            if (minutes === 1) {
                return `há ${minutes} minuto`;
            }
            return `há ${minutes} minutos`;
        }

        const hours = Math.floor(minutes / 60);

        if (hours < 24) {
            if (hours === 1) {
                return `há ${hours} hora`;
            }
            return `há ${hours} horas`;
        }

        const days = Math.floor(hours / 24);

        if (days < 30) {
            if (days === 1) {
                return `há ${days} dia`;
            }
            return `há ${days} dias`;
        }

        const months = Math.floor(days / 30);

        if (months < 12) {
            if (months === 1) {
                return `há ${months} mes`;
            }
            return `há ${months} meses`;
        }

        const years = Math.floor(months / 12);
        if (years === 1) {
            return `há ${years} ano`;
        }
        return `há ${years} anos`;
    }

    const { register, handleSubmit, reset } = useForm<FormCommentValues>();

    function onHandleSubmit(data: FormCommentValues) {
        const token = localStorage.getItem("@MotorShopTOKEN");

        api.post(`/vehicle/comment/${productId}`, data, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
            .then((response) => {
                const fetchData = async () => {
                    const result = await api.get(`/vehicle/${productId}`);
                    setVehicle(result.data);
                    setComments(result.data.comments);
                    setVehicle;
                    let nome = result.data.users.name.split(" ");
                    let iniciais = "";
                    for (let i = 0; i < nome.length && i < 2; i++) {
                        iniciais += nome[i][0];
                    }

                    // setNameSplited(iniciais);
                };
                fetchData();
            })
            .catch((error) => {
                console.log(error);
            });
        reset();
    }

    // let myArr = [
    //     { id: "0", name: "Fernando Henrique Sousa", abre: "FH", image: null },
    //     { id: "1", name: "João Vitor", abre: "JV", image: null },
    //     { id: "2", name: "Fabio Augusto", abre: "FA", image: null },
    // ];

    // let nome = vehicle?.users.name;

    function localeString(value: any) {
        let stringToNumber = Number(value);
        let newBValue = stringToNumber.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
        });

        return newBValue;
    }

    if (loading) {
        return <div>Carregando...</div>;
    }

    return (
        <Container>
            <Header />
            <ProductPage>
                <TestDiv>
                    <div className="main">
                        <div className="leftContent">
                            <div className="imageMain">
                                <img
                                    src={
                                        vehicle?.imageGalery.photos[0].urlImage
                                    }
                                    alt={vehicle?.title}
                                    className="mainImg"
                                />
                            </div>

                            <div className="info">
                                <h2 className="carName">{vehicle?.title}</h2>
                                <div>
                                    <div className="priceYear">
                                        <div className="kmYear">
                                            <p>{vehicle?.year}</p>
                                            <p>{`${vehicle?.km}km`}</p>
                                        </div>
                                        <h3>
                                            {Number(
                                                vehicle?.value
                                            ).toLocaleString("pt-br", {
                                                style: "currency",
                                                currency: "BRL",
                                            })}
                                        </h3>
                                        {/* <h3>{localeString(vehicle?.value)}</h3> */}
                                    </div>
                                    <Button
                                        width="80px"
                                        height="30px"
                                        backgroundColor="var(--color-brand-1)"
                                        color="var(--white-fixed)"
                                        // onClick={handleRedirect}
                                        onClick={() =>
                                            window.open(
                                                `https://wa.me/+55${vehicle.users.phone}`,
                                                "_blank"
                                            )
                                        }
                                    >
                                        Comprar
                                    </Button>
                                </div>
                            </div>

                            <div className="description">
                                <h2>Descrição</h2>
                                <p>{vehicle?.description}</p>
                            </div>
                        </div>
                        <RightContent>
                            <div className="allPics">
                                <h2>Fotos</h2>
                                <ul>
                                    {vehicleGalery.length > 0 ? (
                                        vehicleGalery.map((e: IPhoto) => {
                                            return (
                                                <li key={e.id}>
                                                    <img
                                                        src={e.urlImage}
                                                        alt={e.id}
                                                    />
                                                </li>
                                            );
                                        })
                                    ) : (
                                        <></>
                                    )}
                                    
                                </ul>
                            </div>
                            <div className="advertiser">
                                <div className="profileImage">
                                    <h2>{nameSplited}</h2>
                                </div>
                                <h3>{vehicle?.users.name}</h3>
                                <p>{vehicle?.users.description}</p>
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
                                    {comments ? (
                                        comments.map((e: ICommentProps) => {
                                            return (
                                                <li key={e.id}>
                                                    <div className="commentsInfo">
                                                        {e.users.profileImage !=
                                                        null ? (
                                                            <></>
                                                        ) : (
                                                            <MyDiv
                                                                name={
                                                                    e.users.name
                                                                }
                                                            />
                                                        )}

                                                        <h3>{e.users.name}</h3>
                                                        <img
                                                            src={ellipse3}
                                                            alt=""
                                                        />
                                                        <span>
                                                            {timePost(
                                                                e.updatedAt
                                                            )}
                                                        </span>
                                                        {e.users.id ==
                                                        userLoggedId ? (
                                                            <KebabMenu
                                                                productId={
                                                                    productId
                                                                }
                                                                commentId={e.id}
                                                            />
                                                        ) : (
                                                            <></>
                                                        )}
                                                    </div>
                                                    <p>{e.comment}</p>
                                                </li>
                                            );
                                        })
                                    ) : (
                                        <></>
                                    )}
                                </ul>
                            </div>
                            <div className="commentsPost">
                                <div className="commentsPostInfo">
                                    <div className="commentPostImage">
                                        <h2>{nameSplited}</h2>
                                    </div>
                                    <h3>{vehicle?.users.name}</h3>
                                </div>
                                <Form onSubmit={handleSubmit(onHandleSubmit)}>
                                    <label htmlFor="comment"></label>
                                    <textarea
                                        id="comment"
                                        {...register("comment")}
                                        placeholder="Carro muito confortável, foi uma ótima experiência de compra..."
                                    ></textarea>
                                    <Button
                                        type="submit"
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
                    {isOpenEdit && <EditModal />}

                    <Footer />
                </TestDiv>
            </ProductPage>
        </Container>
    );
};
export default ProductsPage;
