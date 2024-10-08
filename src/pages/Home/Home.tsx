import { Carousel } from "../../components/Carousel/Carousel"
import { useGetProductsQuery } from "../../services/productsApi"

export const Home = () => {
    const {data: products} = useGetProductsQuery()

    return (
        <section>
            <Carousel items={products ?? []}/>
        </section>
    )
}