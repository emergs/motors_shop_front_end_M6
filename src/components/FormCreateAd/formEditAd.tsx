import { StyledForm, ImageContainer } from "./style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { AiOutlineClose } from "react-icons/ai";
import { useContext, useState } from "react";
import { EditFormValues, FormValues } from "./interface";
import { schema } from "./validator";
import api from "../../services/api";
import { ModalsContext } from "../../contexts/Modals";
import Button from "../Button";
import { RxDoubleArrowLeft, RxDoubleArrowRight } from "react-icons/rx";
import Card from "../Card";
import { IVehicle } from "../../pages/ProfileViewAdm/interfaces";

const FormCreateAd = () => {
  const { showModalCreateAdd, handleModalCreateAdd } =
    useContext(ModalsContext);
  const [activeAd, setActiveAd] = useState<boolean>(true);
  const [adType, setAdType] = useState<string>("sale");
  const [vehicleType, setVehicleType] = useState<string>("car");
  const { register, handleSubmit, reset } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

  const [imageURLs, setImageURLs] = useState<string[][]>([]);
  const [imageGaleryFiles, setImageGaleryFiles] = useState<File[]>([]);
  const [imageIndex, setImageIndex] = useState(0);
  const [vehicleData, setVehicleData] = useState<IVehicle>({} as IVehicle);
  const [vehicleCreated, setVehicleCreated] = useState(false);

  const onLoadImages = (files: File[]) => {
    const blob = new Blob([files[0]], {
      type: "image/jpeg" || "image/png",
    });

    const blobURL = URL.createObjectURL(blob);
    console.log(blobURL);

    setImageURLs((prevImgURL) => [...prevImgURL, [...`${blobURL}`]]);
    setImageGaleryFiles((prevImg) => [...prevImg, files[0]]);
  };

  const onSubmit = async (data: EditFormValues) => {
    data.adType = adType;
    data.type = vehicleType;

    const formData = new FormData();

    Object.entries(data).map((item) => {
      formData.append(item[0], item[1]);
    });
    const newImgGalery = imageGaleryFiles;
    data.imageGalery = [...newImgGalery];

    console.log(data);

    const token = localStorage.getItem("@MotorShopTOKEN");

    data.imageGalery.map((img) => {
      formData.append("imageGalery", img);
    });

    await api
      .patch("/vehicle", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        setVehicleData(res.data);
        setVehicleCreated(!vehicleCreated);
      })
      .catch((err) => console.error(err));

    reset();
  };

  const selected = {
    background: "var(--color-brand-1)",
    color: "var(--white-fixed)",
    border: "1px solid var(--color-brand-1)",
  };
  const notSelected = {
    background: "transparent",
    color: "var(--grey-0)",
    border: "1px solid var(--grey-7)",
  };

  return (
    <>
      {!vehicleCreated ? (
        <StyledForm
          className="form"
          onSubmit={(event) => {
            console.log(event);
            event.preventDefault();
            handleSubmit(onSubmit)();
          }}
        >
          <Button
            position="absolute"
            top="0"
            right="10px"
            onClick={() => handleModalCreateAdd()}
          >
            <AiOutlineClose size={20} />
          </Button>
          <fieldset>
            <legend>Criar Anuncio</legend>
            <span>Tipo de anúncio</span>
            <Button
              backgroundColor={
                adType === "sale" ? selected.background : notSelected.background
              }
              color={adType === "sale" ? selected.color : notSelected.color}
              border={adType === "sale" ? selected.border : notSelected.border}
              className="choice-field"
              type="button"
              value="sale"
              {...register("adType")}
              onClick={(event: any) => {
                setAdType(event.target.value);
              }}
            >
              Venda
            </Button>
            <Button
              backgroundColor={
                adType === "auction"
                  ? selected.background
                  : notSelected.background
              }
              color={adType === "auction" ? selected.color : notSelected.color}
              border={
                adType === "auction" ? selected.border : notSelected.border
              }
              className="choice-field"
              type="button"
              value="auction"
              {...register("adType")}
              onClick={(event: any) => {
                setAdType(event.target.value);
              }}
            >
              Leilão
            </Button>

            <span>Informações de veículos</span>
            <label className="common-field" htmlFor="title">
              Título
              <input
                type="text"
                {...register("title")}
                placeholder="Digitar título"
              />
            </label>

            <label className="number-field" htmlFor="year">
              Ano
              <input
                type="text"
                {...register("year")}
                placeholder="Digitar ano"
              />
            </label>

            <label className="number-field" htmlFor="km">
              km
              <input type="text" {...register("km")} placeholder="0" />
            </label>

            <label className="number-field" htmlFor="price">
              Preço
              <input
                type="text"
                {...register("value")}
                placeholder="Digitar preço"
              />
            </label>

            <label className="common-field">
              Descrição
              <textarea
                {...register("description")}
                placeholder="Digitar descrição"
              />
            </label>
            <Button
              backgroundColor={
                vehicleType === "car"
                  ? selected.background
                  : notSelected.background
              }
              color={vehicleType === "car" ? selected.color : notSelected.color}
              border={
                vehicleType === "car" ? selected.border : notSelected.border
              }
              className="choice-field"
              type="button"
              {...register("type")}
              value="car"
              onClick={(event: any) => setVehicleType(event.target.value)}
            >
              Carro
            </Button>
            <Button
              backgroundColor={
                vehicleType === "motorcycle"
                  ? selected.background
                  : notSelected.background
              }
              color={
                vehicleType === "motorcycle"
                  ? selected.color
                  : notSelected.color
              }
              border={
                vehicleType === "motorcycle"
                  ? selected.border
                  : notSelected.border
              }
              className="choice-field"
              type="button"
              {...register("type")}
              value="motorcycle"
              onClick={(event: any) => setVehicleType(event.target.value)}
            >
              Moto
            </Button>

            <label className="common-field" htmlFor="imageGalery">
              Adicionar fotos
              <input
                onChange={(event: any) => onLoadImages(event.target.files)}
                type="file"
                accept="image/*"
                name="imageGalery"
                placeholder="Inserir imagem"
                className="add-field"
              />
            </label>

            <Button className="cancel-button" type="button">
              Cancelar
            </Button>
            <Button
              className="submitButton"
              color="var(--white-fixed)"
              backgroundColor={
                vehicleData ? "var(--color-brand-1)" : "var(--color-brand-3)"
              }
              type="submit"
              disabled={vehicleData ? false : true}
            >
              Salvar
            </Button>
          </fieldset>
        </StyledForm>
      ) : (
        <div>
          <span>Anuncio criado com Sucesso</span>
          <Card width="90%" position="relative" {...vehicleData} />
        </div>
      )}
    </>
  );
};

export default FormCreateAd;
