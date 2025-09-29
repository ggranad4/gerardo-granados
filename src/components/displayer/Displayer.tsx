import type { JSX } from 'react';

type DisplayerProps = {
  title: string;
  children: JSX.Element;
};
export default function Displayer(props: DisplayerProps) {
  const { children, title } = props;

  return (
    <div className='container bg-black rounded-lg h-100 w-300 mx-auto mt-5 overflow-auto'>
      <h1 className='text-4xl text-center text-white capitalize'>{title}</h1>
      <hr className='h-1 bg-gradient-to-r from-green-400 to-blue-500 border-0 rounded w-[95%] mx-auto' />
      <div className='bg-white rounded w-[90%] h-[80%] mx-auto mt-5'> {children}</div>
    </div>
  );
}
