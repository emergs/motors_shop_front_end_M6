import React from "react";
import { useForm } from "react-hook-form";
import Input from "./input";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { StyledFormExample } from "./style";

interface FormValues {
  firstName: string;
  lastName: string;
}

const schema = yup.object().shape({
  firstName: yup.string().required("Campo Obrigatório"),
  lastName: yup.string(),
});

const FormExample: React.FC = () => {
  const { control, handleSubmit, reset } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormValues) => {
    console.log(data);
    reset();
  };

  return (
    <StyledFormExample onSubmit={handleSubmit(onSubmit)}>
      <Input
        label='Nome'
        name='firstName'
        type='text'
        placeholder='Digite seu nome'
        control={control}
        height='40px'
        width='50%'
      />
      <Input
        label='Sobre Nome'
        name='lastName'
        type='text'
        placeholder='Digite seu sobrenome'
        control={control}
        height='40px'
        width='50%'
      />
      <button type='submit'> Submit </button>
    </StyledFormExample>
  );
};

export default FormExample;
