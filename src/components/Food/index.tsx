import { FiEdit3, FiTrash } from 'react-icons/fi';
import { useFood } from '../../context/FoodContext';

import { ToggleSwitch } from '../ToggleSwitch';

import { Container } from './styles';

interface FoodProps {
    image: string;
    id: number;
    name: string;
    price: string;
    description: string;
    available: boolean;
}

export function Food({ id, image, name, price, description, available }: FoodProps) {

    const { editAvailableFood, deleteFood, setSelectedFood, setIsOpenModal, setImage, setName, setPrice, setDescription } = useFood();

    function handleUpdate() {
        setIsOpenModal(true)

        setImage(image)
        setName(name)
        setPrice(price)
        setDescription(description);

        setSelectedFood(id)
    }

    function handleDelete() {
        deleteFood(id)
    }

    function handleEditAvailable() {
        editAvailableFood(available)
        setSelectedFood(id)
    }

    return (
        <Container available={available}>
            <header>
                <img width={270} height={160} src={image} alt={name} />
            </header>

            <section className='body'>
                <h2>{name}</h2>
                <p>{description}</p>
                <p className='price'>R$ <span>{price}</span></p>
            </section>

            <footer>
                <div className='icon-container'>
                    <button onClick={handleUpdate}><FiEdit3 size={20} /></button>
                    <button onClick={handleDelete}><FiTrash size={20} /></button>
                </div>
                <div className='availability-container'>
                    <p>{available ? 'Disponível' : 'Indisponível'}</p>
                    <span className='toggleswitch' onClick={handleEditAvailable}><ToggleSwitch availability={available} /></span>
                </div>
            </footer>
        </Container>
    )
};