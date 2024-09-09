import TopBar from '@/components/elements/top-bar';
import Filters from '@/components/elements/filters';
import PizzaCard from '@/components/elements/pizza-card';

export default function Home() {
  return (
    <>
      <div className='mt-10 mb-5 container'>
        <h1 className='text-4xl font-bold'>All pizzas</h1>
      </div>
      <TopBar />
      <div className='container mt-8 flex gap-[60px]'>
        <Filters />
        <div className='flex flex-wrap gap-12'>
          {Array.from({ length: 100 }).map((_, idx) => (<PizzaCard key={idx} />))}
        </div>
      </div>
    </>
  );
}
