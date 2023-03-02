import { useContext } from "react"
import { useForm } from "react-hook-form"
import { RiCloseFill } from "react-icons/ri"
import { ModalsContext } from "../../../contexts/Modals"
import BaseModal from "../../BaseModal"
import Input from "../../Input/input"
import { FormBase } from "../LoginModal/style"

const EditAddressModal = () => {

  const { handleCloseModalEditAddress } = useContext(ModalsContext)
  const { control } = useForm()

  return (
    <BaseModal padding="18px 16px">
      <button className="close-modal" onClick={() => handleCloseModalEditAddress()}>
        <RiCloseFill />
      </button>
      <h3>Editar Endereço</h3>
      <span className="title-form">Informações de endereço</span>
      <FormBase>
        <Input label="CEP " name="cep" type="text" placeholder="00.000-000" control={control} />
        <div className="form-base-duo-column">
          <Input label="Estado " name="state" type="text" placeholder="Paraná" control={control} />
          <Input label="Cidade " name="city" type="text" placeholder="Curitiba" control={control} />
        </div>
        <Input label="Rua " name="street" type="text" placeholder="Rua A" control={control} />
        <div className="form-base-duo-column">
          <Input label="Número " name="number" type="text" placeholder="1070" control={control} />
          <Input label="Complemento " name="complement" type="text" placeholder="Apto 1" control={control} />
        </div>
      </FormBase>
    </BaseModal>
  )
}

export default EditAddressModal