export type MiscellaneousPresentorNode = {
  description: string;
  imgSrc: string;
  title: string;
};
type MiscellaneousPresentorProps = {
  miscList: MiscellaneousPresentorNode[];
};
export default function MiscellaneousPresentor(props: MiscellaneousPresentorProps) {
  const { miscList } = props;
  const miscComponent = () => {
    <>
      <div>
        {miscList.map(({ description, title }, index) => (
          <div key={index}>
            <h1 className='text-4xl'>{title}</h1>
            <p>{description}</p>
          </div>
        ))}
      </div>
    </>;
  };
  return miscComponent;
}
