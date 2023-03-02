import { useContext } from "react"
import { useForm } from "react-hook-form"
import { RiCloseFill } from "react-icons/ri"
import { ModalsContext } from "../../../contexts/Modals"
import BaseModal from "../../BaseModal"
import Input from "../../Input/input"
import Textarea from "../../Textarea/textarea"
import { FormBase } from "../LoginModal/style"


const EditProfileModal = () => {

  const { handleCloseModalEditProfile } = useContext(ModalsContext)

  const { control } = useForm()

  return (
    <BaseModal>
      <button className="close-modal" onClick={() => handleCloseModalEditProfile()}>
        <RiCloseFill />
      </button>
      <h3>Editar Perfil</h3>
      <span className="title-form">Informações pessoais</span>
      <FormBase>
        <Input label="Nome " name="name" type="text" placeholder="Digite seu Nome" control={control} />
        <Input label="Email " name="email" type="email" placeholder="seuemail@mail.com" control={control} />
        <Input label="CPF " name="cpf" type="text" placeholder="000.000.000-00" control={control} />
        <Input label="Telefone " name="phone" type="text" placeholder="(00)00000-0000" control={control} />
        <Input label="Data de nascimento " name="birthdate" type="date" placeholder="00/00/0000" control={control} />
        <Textarea label="Descrição " name="description" placeholder="Digite algo que julgar útil" control={control} />
      </FormBase>
    </BaseModal>
  )
}

export default EditProfileModal