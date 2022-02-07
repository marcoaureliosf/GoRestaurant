import { FormEvent } from 'react';
import { FiCheckSquare } from 'react-icons/fi';
import Modal from 'react-modal';

import { useFood } from '../../context/FoodContext';

import { Container } from "./styles";

export function FoodModal() {

    const { isOpenModal, setIsOpenModal, selectedFood, createFood, updateFood, image, setImage, name, setName, price, setPrice, description, setDescription, setSelectedFood } = useFood();

    function handleClose() {
        setImage('') 
        setName('') 
        setPrice('') 
        setDescription('');
        setSelectedFood(-1);
        setIsOpenModal(false);
    }

    function handleSubmit(e: FormEvent) {
        e.preventDefault();

        if (selectedFood !== -1) {
            updateFood();
        } else {
            createFood();
        }

        handleClose()
    }

    return (
        <Modal
            isOpen={isOpenModal}
            onRequestClose={handleClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <Container onSubmit={handleSubmit}>
                <h1>Novo Prato</h1>

                <input
                    type="text"
                    name="image"
                    placeholder='Link da Imagem'
                    onChange={event => setImage(event.target.value)}
                    value={image}
                />

                <input
                    type="text"
                    name="name"
                    placeholder='Nome do Prato'
                    onChange={event => setName(event.target.value)}
                    value={name}
                />
                <input
                    type="string"
                    name="price"
                    placeholder='Preço'
                    onChange={event => setPrice(event.target.value)}
                    value={price}
                />
                <input
                    type="text"
                    name="description"
                    placeholder='Descrição'
                    onChange={event => setDescription(event.target.value)}
                    value={description}
                />

                <div>
                    <button type='submit'>
                        <div className='text'>Adicionar Prato</div>
                        <div className='icon'><FiCheckSquare size={24} /></div>
                    </button>
                </div>
            </Container>
        </Modal>
    )
}