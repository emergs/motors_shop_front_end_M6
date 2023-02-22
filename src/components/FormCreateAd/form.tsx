import { StyledFormEditAd } from "./style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import Input from "../Input/input";
import { FormValues } from "./interface";
import { schema } from "./validator";
import Textarea from "../Textarea/textarea";

const FormCreateAd = () => {
  const [activeAd, setActiveAd] = useState<boolean>(true);
  const [activeVehicle, setActiveVehicle] = useState<boolean>(true);
  const [typeAd, setTypeAd] = useState<string>("sale");
  const [typeVehicle, setTypeVehicle] = useState<string>("car");
  const [cont, setCont] = useState<number[]>([1]);
  const { control, handleSubmit, reset } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormValues) => {
    const imgs: string[] = [];
    data.ad = typeAd;
    data.vehicle = typeVehicle;

    Object.entries(data).map(item => {
      item[0].includes("imgGalery") && imgs.push(item[1]);
    });

    data.imgGalery = imgs;
    const { description, imgCap, imgGalery, km, price, title, ad, vehicle } =
      data;
    const infoRequest = {
      description,
      imgCap,
      imgGalery,
      km,
      price,
      title,
      ad,
      vehicle,
    };
    console.log(infoRequest);
    reset();
  };

  return (
    <StyledFormEditAd onSubmit={handleSubmit(onSubmit)}>
      <div className='form-title'>
        <h4>Criar anúncio</h4>
        <AiOutlineClose size={20} />
      </div>
      <div className='ad-type'>
        <h5>Tipo de anúncio</h5>
        <div>
          <input
            name='sale'
            type='button'
            defaultValue='Venda'
            className={activeAd ? "button-color" : "null"}
            onClick={e => {
              e.preventDefault();
              setActiveAd(true);
              setTypeAd("sale");
            }}
          />
          <input
            name='auction'
            type='button'
            defaultValue='Leilão'
            className={activeAd ? "null" : "button-color"}
            onClick={e => {
              e.preventDefault();
              setActiveAd(false);
              setTypeAd("auction");
            }}
          />
        </div>
      </div>
      <h5>Informações do veículo</h5>
      <Input
        label='Título'
        type='text'
        name='title'
        control={control}
        width='100%'
        height='48px'
        placeholder='Digitar título'
      />
      <div className='form-data-number'>
        <Input
          label='Ano'
          type='text'
          name='year'
          control={control}
          width='148px'
          height='48px'
          placeholder='Digitar ano'
          inputMode='numeric'
        />
        <Input
          label='Quilometragem'
          type='text'
          name='km'
          control={control}
          width='148px'
          height='48px'
          placeholder='0'
          inputMode='numeric'
        />
        <Input
          className='input-data-price'
          label='Preço'
          type='text'
          name='price'
          control={control}
          width='148px'
          height='48px'
          placeholder='Digitar preço'
          inputMode='numeric'
        />
      </div>
      <Textarea
        label='Descrição'
        name='description'
        control={control}
        width='100%'
        height='80px'
        placeholder='Digitar descrição'
      />
      <div className='ad-type'>
        <h5>Tipo de Veículo</h5>
        <div>
          <input
            name='car'
            type='button'
            defaultValue='Carro'
            className={activeVehicle ? "button-color" : "null"}
            onClick={e => {
              e.preventDefault();
              setActiveVehicle(true);
              setTypeVehicle("car");
            }}
          />
          <input
            name='moto'
            type='button'
            defaultValue='Moto'
            className={activeVehicle ? "null" : "button-color"}
            onClick={e => {
              e.preventDefault();
              setActiveVehicle(false);
              setTypeVehicle("moto");
            }}
          />
        </div>
      </div>
      <Input
        label='Imagem da capa'
        type='url'
        name='imgCap'
        control={control}
        width='100%'
        height='48px'
        placeholder='Inserir URL da imagem'
      />
      <>
        {cont.map(item => {
          return (
            <Input
              key={`img${item}`}
              label={`${item}ª imagem da galeria`}
              type='url'
              name={`imgGalery${item}`}
              control={control}
              width='100%'
              height='48px'
              placeholder='Inserir URL da imagem'
            />
          );
        })}
      </>
      {cont.length < 6 && (
        <button
          type='button'
          className='add-field'
          onClick={() => setCont(array => [...array, cont.length + 1])}
        >
          Adicionar campo para imagem da galeria
        </button>
      )}

      <div className='div-submit'>
        <button className='button-cancel' type='button'>
          Cancelar
        </button>
        <button className='button-submit' type='submit'>
          Criar anúncio
        </button>
      </div>
    </StyledFormEditAd>
  );
};

export default FormCreateAd;
