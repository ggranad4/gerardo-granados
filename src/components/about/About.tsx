export default function About() {
  return (
    <div className=''>
      <h1 className='text-4xl flex justify-center'>Checking title sizing </h1>
      <div className='container mx-auto bg-[#4699B9] text-white p-6 rounded-lg'>
        <img src={'/images/Gerardo.png'} alt='Photo of me' className='w-full h-auto rounded-sm' />

        <h1 className='text-4xl pb-5'>About me</h1>

        <p className=''>
          Hello everyone, welcome! Hope you having a wonderful day. My name is gerardo and i made
          this site to present to you the different expereinces ive had, education and projects
        </p>
      </div>
    </div>
  );
}
