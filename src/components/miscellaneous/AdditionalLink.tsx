export type AdditionalLinkNode = {
  logo: string;
  title: string;
  linkToSite: string;
};
type AdditionalLinkProps = {
  additionalLink: AdditionalLinkNode;
};
export default function AdditionalLink(props: AdditionalLinkProps) {
  const { additionalLink } = props;
  return (
    <div className='flex flex-row'>
      <img src={additionalLink.logo} width={50} height={50} />
      <div className='flex flex-col ml-1'>
        <h3 className='text-large'>{additionalLink.title}</h3>
        <a href={additionalLink.linkToSite} className='text-blue-600 hover:underline' target='_'>
          Click Here to Visit!
        </a>
      </div>
    </div>
  );
}
