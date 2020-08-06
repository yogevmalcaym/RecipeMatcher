import axios from 'axios';

export const getAvailableIngredients = async () => {
    try {
        const res = await axios.get("http://193.106.55.98:80/getAvailableIngredients");
        return res.data.ingredients.reduce((acc, ingredient) =>
                ({...acc, [ingredient._id]: ingredient})
            , {});
    } catch (error) {
        console.error(error);
    }

}
