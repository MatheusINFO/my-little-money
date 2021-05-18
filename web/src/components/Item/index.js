import React from 'react'
import { toast } from 'react-toastify'
import TrashIcon from '../../assets/trash.png'
import api from '../../services/api'
import history from '../../services/history'
import { Container } from './styles'

const Item = ({ name, description, value, id }) => {
    const handleSubmit = () => {
        api.delete(`/item/${id}`, )
        .then(function (response){
          toast("Item deletado com sucesso :]")
          history.push('/')
        })
        .catch(function (error){
          toast("Erro ao deletar item, tente novamente mais tarde :[")
        })
    }

    return (
        <Container>
            <div>
                <strong>{name}</strong>
                <small>{description}</small>
                <strong>R$ {value}</strong>
            </div>
            <button title="Remover" onClick={handleSubmit}>
                <img src={TrashIcon} alt="trash"/>
            </button>
        </Container>
    )
}

export default Item