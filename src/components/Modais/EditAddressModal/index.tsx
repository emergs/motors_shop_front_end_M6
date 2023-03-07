import { useContext } from "react"
import { useForm } from "react-hook-form"
import { RiCloseFill } from "react-icons/ri"
import { ModalsContext } from "../../../contexts/Modals"
import { SellerContext } from "../../../contexts/Seller"
import BaseModal from "../../BaseModal"
import Button from "../../Button"
import Input from "../../Input/input"
import { FormBase } from "../LoginModal/style"

const EditAddressModal = () => {

  const { handleCloseModalEditAddress } = useContext(ModalsContext)
  const { editAddress, user } = useContext(SellerContext)
  const { control, handleSubmit } = useForm()

  return (
    <BaseModal padding="18px 16px">
      <button className="close-modal" onClick={() => handleCloseModalEditAddress()}>
        <RiCloseFill />
      </button>
      <h3>Editar Endereço</h3>
      <span className="title-form">Informações de endereço</span>
      <FormBase onSubmit={handleSubmit(editAddress)}>
        <Input label="CEP " name="cep" type="text" placeholder="00.000-000" control={control} defaultValue={user.cep} />
        <div className="form-base-duo-column">
          <Input label="Estado " name="state" type="text" placeholder="Paraná" control={control} defaultValue={user.state} />
          <Input label="Cidade " name="city" type="text" placeholder="Curitiba" control={control} defaultValue={user.city} />
        </div>
        <Input label="Rua " name="street" type="text" placeholder="Rua A" control={control} defaultValue={user.street} />
        <div className="form-base-duo-column">
          <Input label="Número " name="number" type="text" placeholder="1070" control={control} defaultValue={user.number} />
          <Input label="Complemento " name="complement" type="text" placeholder="Apto 1" control={control} defaultValue={user.complement} />
        </div>
        <Button>Salvar</Button>
      </FormBase>
    </BaseModal>
  )
}

export default EditAddressModal