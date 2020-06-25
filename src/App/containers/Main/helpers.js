const MOCK = [
    {
        name: "עגבניה",
        measurementUnit: "יחידות"
    },
    {
        name: "שמן",
        measurementUnit: "ml"
    }
]
export const getAvailableIngredients = () =>
    new Promise(r => {
        setTimeout(() => {
            r(MOCK.reduce((acc, ing) => ({
                ...acc,
                [ing.name]: ing.measurementUnit
            }), {}))
        }, 1000)
    })
