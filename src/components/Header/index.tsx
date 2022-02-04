import { FiPlusSquare } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { useFood } from '../../context/FoodContext';

import { Container } from './styles';

export function Header() {

    const { setIsOpenModal } = useFood();
    
    function handleCreate() {
        setIsOpenModal(true);
    }
    
    return (
        <Container>
            <header>
                <img src={logoImg} alt="GoRestaurant" />
                <nav>
                    <div>
                        <button onClick={handleCreate}>
                            <div className='text'>Novo Prato</div>
                            <div className='icon'><FiPlusSquare size={24} /></div>
                        </button>
                    </div>
                </nav>
            </header>
        </Container>
    )
};