import { useContext, useEffect, useRef, useState } from "react";
import { SellerContext } from "../../contexts/Seller";
import { Form, ModalEdit } from "./styles";
import { MdClose } from "react-icons/md";
import { useForm } from "react-hook-form";
import { FormCommentValues } from "../ProductsPage";
import Button from "../Button";
import api from "../../services/api";

const EditModal = () => {
    const { isOpenEdit, setIsOpenEdit, commentId, productId, setVehicle, setComments } =
        useContext(SellerContext);
    const { register, handleSubmit, reset } = useForm<FormCommentValues>();
    const modalRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        function handleOutClick(event: MouseEvent) {
            if (!modalRef.current?.contains(event.target as Node)) {
                setIsOpenEdit(false);
            }
        }

        document.addEventListener("mousedown", handleOutClick);

        return () => {
            document.removeEventListener("mousedown", handleOutClick);
        };
    }, []);

    function handleCloseClick() {
        // console.log(productId)
        // console.log(commentId)
        setIsOpenEdit(false);
    }
    function onHandleSubmit(data: FormCommentValues) {
        // console.log(data);
        // console.log("comentario",commentId);
        // console.log("produto",productId);
        const token = localStorage.getItem("@MotorShopTOKEN");
        // console.log(token)
        api.patch(`/comments/${commentId}`, data, {
            headers: { Authorization: `Bearer ${token}` },
        }).then(()=>{
            const fetchData = async () => {
                const result = await api.get(`/vehicle/${productId}`);

                setVehicle(result.data);
                setComments(result.data.comments);
                let nome = result.data.users.name.split(" ");
                let iniciais = "";
                for (let i = 0; i < nome.length && i < 2; i++) {
                    iniciais += nome[i][0];
                }
            };
            fetchData();
            console.log("Deletado com sucesso")
        })

        setIsOpenEdit(false);
    }

    return (
        <ModalEdit>
            <div className="overlay">
                <div className="content" ref={modalRef}>
                    <button className="closeClick" onClick={handleCloseClick}>
                        <MdClose size={20} />
                    </button>
                    <div className="commentEdit">
                        <h3>Editar comentário</h3>
                        <Form onSubmit={handleSubmit(onHandleSubmit)}>
                            <label htmlFor="comment"></label>
                            <textarea
                                id="comment"
                                {...register("comment")}
                                placeholder="Carro muito confortável, foi uma ótima experiência de compra..."
                            />
                            <Button
                                type="submit"
                                width="100%"
                                height="38px"
                                backgroundColor="var(--color-brand-1)"
                                color="var(--white-fixed)"
                            >
                                Editar
                            </Button>
                        </Form>
                    </div>
                </div>
            </div>
        </ModalEdit>
    );
};

export default EditModal;
