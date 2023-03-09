import { useContext, useEffect, useRef } from "react";
import { MdClose } from "react-icons/md";
import { SellerContext } from "../../contexts/Seller";
import { ModalImage } from "./styles";

interface IImage {
    urlImage: string;
}

const ImageModal = (urlImage: IImage) => {
    const modalRef = useRef<HTMLDivElement>(null);
    const { isImageOpen, setIsImageOpen, imageLink } =
        useContext(SellerContext);
    
    useEffect(() => {
        function handleOutClick(event: MouseEvent) {
            if (!modalRef.current?.contains(event.target as Node)) {
                setIsImageOpen(false);
            }
        }

        document.addEventListener("mousedown", handleOutClick);

        return () => {
            document.removeEventListener("mousedown", handleOutClick);
        };
    }, []);
    return (
        <ModalImage>
            <div className="overlay">
                <div className="content" ref={modalRef}>
                    <button className="closeClick" onClick={()=> setIsImageOpen(false)}>
                        <MdClose size={30} />
                    </button>
                    <h3>Imagem do Veiculo</h3>
                    <figure>
                        <img src={imageLink} alt="" />
                    </figure>
                </div>
            </div>
        </ModalImage>
    );
};
export default ImageModal;
