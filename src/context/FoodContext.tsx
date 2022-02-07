import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { Food } from '../components/Food';
import { FoodModal } from '../components/FoodModal';
import { api } from '../services/api';

interface Food {
    id: number;
    image: string;
    name: string;
    price: string;
    description: string;
    available: boolean;
}

interface FoodProviderProps {
    children: ReactNode;
}

interface FoodContextType {
    isOpenModal: boolean;
    setIsOpenModal: (newState: boolean) => void;
    selectedFood: number;
    setSelectedFood: (newState: number) => void;
    foods: Food[];
    setFoods: (newState: Food[]) => void;
    createFood: () => Promise<void>;
    updateFood: () => Promise<void>;
    deleteFood: (id: number) => Promise<void>;
    editAvailableFood: (available: boolean) => Promise<void>;
    image: string;
    setImage: (newState: string) => void;
    name: string;
    setName: (newState: string) => void;
    price: string;
    setPrice: (newState: string) => void;
    description: string
    setDescription: (newState: string) => void;
}

const FoodContext = createContext<FoodContextType>({} as FoodContextType);

export function FoodProvider({ children }: FoodProviderProps): JSX.Element {
    const [foods, setFoods] = useState<Food[]>([]);

    const [isOpenModal, setIsOpenModal] = useState(false);
    const [selectedFood, setSelectedFood] = useState(-1);

    const [image, setImage] = useState('')
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')

    useEffect(() => {
        async function loadFoods(): Promise<void> {
            const foodList = await api.get<Food[]>('/foods');


            setFoods(foodList.data)
        }

        loadFoods()
    }, [])

    async function createFood() {
        try {

            const data = {
                id: foods.length + 1,
                image: image,
                name: name,
                price: price,
                description: description,
                available: true,
            }

            await api.post('/foods', data)
            setFoods([...foods, data])

            setImage('')
            setName('')
            setPrice('')
            setDescription('')
        } catch (error) {
            console.log(error)
        }
    }

    async function updateFood() {
        try {

            const data = {
                image: image,
                name: name,
                price: price,
                description: description,
            }

            const newFoodList = foods.map(currentFood => {
                if (currentFood.id !== selectedFood) {
                    return currentFood;
                }
                return {
                    ...data,
                    id: currentFood.id,
                    available: currentFood.available
                }
            })

            const foodSelected = newFoodList.filter(currentFood => currentFood.id === selectedFood)
            await api.put(`/foods/${selectedFood}`, foodSelected[0])

            setFoods(newFoodList)

            setSelectedFood(-1)
        } catch (error) {
            console.log(error)
        }
    }

    async function deleteFood(id: number) {
        try {
            const newFoodList = foods.filter((item) => item.id !== id);

            await api.delete(`/foods/${id}`)
            setFoods(newFoodList)

        } catch (error) {
            console.log(error)
        }
    }

    async function editAvailableFood(available: boolean) {
        try {
            if (selectedFood !== -1) {
                const newFoodList = foods.map(currentFood => {
                    if (currentFood.id !== selectedFood) {
                        return currentFood;
                    }
                    return {
                        ...currentFood,
                        available: !available
                    }
                })

                const foodSelected = newFoodList.filter(currentFood => currentFood.id === selectedFood)

                await api.put(`/foods/${selectedFood}`, foodSelected[0])
                setFoods(newFoodList);
                setSelectedFood(-1)
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <FoodContext.Provider
            value={{
                isOpenModal,
                setIsOpenModal,
                selectedFood,
                setSelectedFood,
                foods,
                setFoods,
                createFood,
                updateFood,
                deleteFood,
                editAvailableFood,
                image,
                setImage,
                name,
                setName,
                price,
                setPrice,
                description,
                setDescription,
            }}
        >
            {children}
            {isOpenModal && <FoodModal />}
        </FoodContext.Provider>
    );
}

export function useFood(): FoodContextType {
    const context = useContext(FoodContext)

    return context;
}