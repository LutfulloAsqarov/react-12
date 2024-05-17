import Products from "../../components/products/Products";
import useFetch from "../../hooks/useFetch";

const Home = () => {
    let { data, loading, error } = useFetch("/products");

    return (
        <div className="home">
            <Products data={data} />
        </div>
    );
};

export default Home;
