import * as yup from "yup";

export const schema = yup.object().shape({
  title: yup.string().required("Campo Obrigatório"),
  year: yup
    .number()
    .required("Campo Obrigatório")
    .typeError("Campo deve conter um número"),
  km: yup
    .number()
    .required("Campo Obrigatório")
    .typeError("Campo deve conter um número"),
  price: yup
    .number()
    .required("Campo Obrigatório")
    .typeError("Campo deve conter um número"),
  description: yup.string().required("Campo Obrigatório"),
  imgCap: yup
    .string()
    .url()
    .required("Campo obrigatório")
    .typeError("Insira uma URL válida"),
});
