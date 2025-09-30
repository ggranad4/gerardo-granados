import gerardoPhoto from '../../images/headshot.jpg';
export default function About() {
  return (
    <div className='text-white ml-2'>
      <div className='flex flex-row gap-3'>
        <img src={gerardoPhoto} alt='Photo of me' width={150} height={150} className='rounded-lg' />
        <div className='flex flex-col'>
          <h1 className='text-4xl '>Gerardo Granados - Software Engineer 3+ yrs</h1>
          <h1 className='text-2xl ml-5'>Current Stack: Vite + React + TypeScript</h1>
          <h1 className='text-2xl ml-5'>Current Game Playing: Silent Hill 2</h1>
          <a
            href='../../public/Gerardo_resume.pdf'
            download='Gerardo_resume.pdf'
            className='px-4 py-2 mt-2 ml-4 animate-bounce bg-black text-white rounded-lg w-50'
          >
            Download my resume
          </a>
        </div>
      </div>
    </div>
  );
}
