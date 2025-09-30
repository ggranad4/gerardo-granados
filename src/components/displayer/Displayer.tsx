import type { JSX } from 'react';

type DisplayerProps = {
  title: string;
  children: JSX.Element;
};
export default function Displayer(props: DisplayerProps) {
  const { children, title } = props;

  return (
    <div className='container bg-black rounded-lg h-125 w-300 mx-auto overflow-auto mt-2  '>
      <h1 className='text-4xl text-center text-white capitalize sticky top-0  '>{title}</h1>
      <hr className='h-1 bg-gradient-to-r from-green-400 to-blue-500 border-0 rounded w-[95%] mx-auto sticky top-12' />
      <div className='mt-15'> {children}</div>
    </div>
  );
}
