import Heart from '../shapes/Heart';
import kratos from '../../images/kratos.jpeg';

export default function KratosPresentor() {
  return (
    <>
      <h1 className='text-4xl pb-5 flex justify-center mt-2'>My code reviewer, Kratos</h1>
      <div className='flex justify-center '>
        <Heart className='animate-pulse mt-30 mr-5 ' />
        <img
          src={kratos}
          alt='Photo of kratos my dog'
          width={250}
          height={250}
          className='rounded-lg'
        />
        <Heart className='rotate-90 animate-pulse mt-30 ml-5' />
      </div>
    </>
  );
}
