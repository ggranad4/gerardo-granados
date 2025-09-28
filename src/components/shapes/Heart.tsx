type HeartProps = {
  className?: string;
};
export default function Heart(props: HeartProps) {
  const { className } = props;
  return (
    <div className={`relative w-20 h-20 bg-red-500 rotate-45 ${className}`}>
      <div className='absolute w-20 h-20 bg-red-500 rounded-full -left-1/2'></div>
      <div className='absolute w-20 h-20 bg-red-500 rounded-full -top-1/2'></div>
    </div>
  );
}
