import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { Food } from '../components/Food';
import { FoodModal } from '../components/FoodModal';

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
    selectedUser: number;
    setSelectedUser: (newState: number) => void;
    foods: Food[];
    setFoods: (newState: Food[]) => void;
    createFood: () => void;
    updateFood: () => void;
    deleteFood: (id: number) => void;
    editAvailableFood: (id: number) => void;
    image: string;
    setImage: (newState: string) => void;
    name: string;
    setName: (newState: string) => void;
    price: string;
    setPrice: (newState: string) => void;
    description: string
    setDescription: (newState: string) => void;
    available: boolean;
    setAvailable: (newState: boolean) => void;
}

const FoodContext = createContext<FoodContextType>({} as FoodContextType);

export function FoodProvider({ children }: FoodProviderProps): JSX.Element {
    const [foods, setFoods] = useState<Food[]>([]);

    const [isOpenModal, setIsOpenModal] = useState(false);
    const [selectedUser, setSelectedUser] = useState(-1);

    const [image, setImage] = useState('')
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    const [available, setAvailable] = useState(true)

    useEffect(() => {
        async function loadFoods() {

            const foodList = {
                "foods": [
                    { id: 1, image: 'image', name: 'name', price: 'price', description: 'description', available: true }
                ]
            }

            setFoods(foodList.foods)
        }

        loadFoods()
    }, [])

    function createFood() {
        try {

            const data = {
                id: foods.length + 1,
                image: image,
                name: name,
                price: price,
                description: description,
                available: available,
            }

            setFoods([...foods, data])

            setImage('')
            setName('')
            setPrice('')
            setDescription('')
        } catch (error) {
            console.log(error)
        }
    }

    function updateFood() {
        try {

            const data = {
                image: image,
                name: name,
                price: price,
                description: description,
            }

            const newFoodList = foods.map(currentFood => {
                if (currentFood.id !== selectedUser) {
                    return currentFood;
                }
                return {
                    ...data,
                    id: currentFood.id,
                    available: currentFood.available
                }
            })

            setSelectedUser(-1)
            setFoods(newFoodList)

        } catch (error) {
            console.log(error)
        }
    }

    function deleteFood(id: number) {
        try {
            const newFoodList = foods.filter((item) => item.id !== id);
            setFoods(newFoodList)

        } catch (error) {
            console.log(error)
        }
    }

    function editAvailableFood(id: number) {
        try {
            const newFoodList = foods.map(currentFood => {
                if (currentFood.id !== id) {
                    return currentFood;
                }
                return {
                    ...currentFood,
                    available: !available
                }
            })
            setFoods(newFoodList);
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <FoodContext.Provider
            value={{
                isOpenModal,
                setIsOpenModal,
                selectedUser,
                setSelectedUser,
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
                available,
                setAvailable,
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