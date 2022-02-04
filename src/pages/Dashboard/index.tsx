import { Header } from '../../components/Header';
import { Food } from '../../components/Food';

import { useFood } from '../../context/FoodContext';

import { FoodContainer } from './styles';

export function Dashboard() {

    const { foods } = useFood();

    return (
        <>
            <Header />

            <FoodContainer>
                {foods.map(food => (
                    <Food
                        key={food.id}
                        id={food.id}
                        image={food.image}
                        name={food.name}
                        price={food.price}
                        description={food.description}
                        available={food.available}
                    />
                ))}
            </FoodContainer>
        </>
    )
};