import * as yup from "yup";

export const schema = yup.object().shape({
  title: yup.string().required("Campo Obrigatório"),
  adType: yup.string().notRequired(),
  type: yup.string().notRequired(),
  year: yup
    .string()
    .required("Campo Obrigatório")
    .typeError("Campo deve conter um número"),
  km: yup
    .string()
    .required("Campo Obrigatório")
    .typeError("Campo deve conter um número"),
  value: yup
    .string()
    .required("Campo Obrigatório")
    .typeError("Campo deve conter um número"),
  description: yup.string().required("Campo Obrigatório"),
  imageGalery: yup
    .array()
    .of(yup.string().url())
    .notRequired()
    .typeError("Insira uma imagem válida"),
  // imageGalery: yup
  //   .mixed()
  //   .test("fileType", "Invalid file type", (value: any) => {
  //     // if (!value.length) return true; // empty file is valid
  //     return ["image/jpeg", "image/png", "image/gif"].includes(value.type);
  //   })
  //   .notRequired(),
});
