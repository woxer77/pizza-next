import TopBar from '@/components/elements/top-bar';
import FiltersAside from '@/components/elements/filters-aside';
import ProductCard from '@/components/elements/product-card';

export default function Home() {
  return (
    <>
      <div className='mt-10 mb-5 container'>
        <h1 className='text-4xl font-bold'>All pizzas</h1>
      </div>
      <TopBar />
      <div className='container mt-8 flex gap-[60px]'>
        <FiltersAside />
        <div className='flex flex-wrap gap-12'>
          {Array.from({ length: 100 }).map((_, idx) => (<ProductCard key={idx} />))}
        </div>
      </div>
    </>
  );
}
