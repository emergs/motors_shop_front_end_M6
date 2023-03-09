import { useState, useEffect, useRef, useContext } from "react";
import { SellerContext } from "../../contexts/Seller";
import api from "../../services/api";
import { KebabMenuProps } from "./interfaces";
import { Container, KebabIcon, Menu, MenuItem } from "./styles";

const KebabMenu: React.FC<KebabMenuProps> = ({ commentId, productId }) => {
    const [menuOpen, setMenuOpen] = useState<Boolean>(false);
    const menuRef = useRef<HTMLDivElement>(null);

    const { setVehicle, setComments, isOpenEdit, setIsOpenEdit, setCommentId, setProductId } = useContext(SellerContext);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (
                menuRef.current &&
                !menuRef.current.contains(event.target as Node)
            ) {
                setMenuOpen(false);
            }
        }
        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, [menuRef, setMenuOpen]);

    function handleClickDelete() {
        const token = localStorage.getItem("@MotorShopTOKEN");

        const headers = {
            Authorization: `Bearer ${token}`,
        };

        api.delete(`/comments/${commentId}`, { headers })
            .then(() => {
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
                console.log("Deletado com sucesso");
            })
            .catch((err) => {
                console.log("Algo deu errado", err);
            });
    }

    function handleEditClick(){
        setIsOpenEdit(true)
        setCommentId(commentId)
        setProductId(productId)
    }
    

    return (
        <Container  ref={menuRef}>
            <KebabIcon onClick={() => setMenuOpen(!menuOpen)} />
            {menuOpen && (
                <Menu>
                    <MenuItem onClick={handleEditClick}>Editar</MenuItem>
                    <MenuItem onClick={handleClickDelete}>Excluir</MenuItem>
                </Menu>
            )}
        </Container>
    );
};

export default KebabMenu;
