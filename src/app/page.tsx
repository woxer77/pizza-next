import TopBar from '@/components/elements/top-bar';
import FiltersAside from '@/components/elements/filters-aside';
import ProductCard from '@/components/elements/product-card';
import ProductsGroup from '@/components/elements/products-group';

export default function Home() {
  return (
    <>
      <div className='mt-10 mb-5 container'>
        <h1 className='text-4xl font-bold'>All pizzas</h1>
      </div>
      <TopBar />
      <div className='container mt-8 flex gap-[60px]'>
        <FiltersAside />
        <main>
          <ProductsGroup title="Pizzas" >
            {Array.from({ length: 10 }).map((_, idx) => (
              <ProductCard
                key={idx}
                imgSrc="/pizza.png"
                title="Cheesy chicken"
                description="Chicken, mozzarella, cheddar and parmesan cheeses, cheese sauce, tomatoes, alfredo sauce, garlic"
                price={20}
              />
            ))}
          </ProductsGroup>
          <ProductsGroup title="Other">
            {Array.from({ length: 10 }).map((_, idx) => (
              <ProductCard
                key={idx}
                imgSrc="/pizza.png"
                title="Cheesy chicken"
                description="Chicken, mozzarella, cheddar and parmesan cheeses, cheese sauce, tomatoes, alfredo sauce, garlic"
                price={20}
              />
            ))}
          </ProductsGroup>
        </main>
      </div>
    </>
  );
}
