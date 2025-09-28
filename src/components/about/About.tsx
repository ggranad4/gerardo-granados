import gerardoPhoto from '../../images/headshot.JPEG';
export default function About() {
  return (
    <div className='  bg-[#4699B9] text-white p-6 '>
      <div className='flex flex-row gap-3'>
        <img src={gerardoPhoto} alt='Photo of me' width={150} height={150} className='rounded-lg' />
        <div className='flex flex-col'>
          <h1 className='text-4xl '>Gerardo Granados - Software Engineer 3+ yrs</h1>
          <h1 className='text-2xl ml-5'>Current Stack: Vite + React + TypeScript</h1>
          <h1 className='text-2xl ml-5'>Current Game Playing: Silent Hill 2</h1>
        </div>
      </div>
    </div>
  );
}
