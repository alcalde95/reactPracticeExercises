import { useContext } from "react"
import { FiltersContext } from "../context/filters"

export const useFilters = () => {
    const { filters } = useContext(FiltersContext)

    const filterProducts = (products) => {
        return products.filter(product => {
            return (
                product.price >= filters.minPrice &&
                (filters.category === 'all' ||
                    filters.category === product.category
                )
            )
        })
    }
    return {filters , filterProducts}
}
