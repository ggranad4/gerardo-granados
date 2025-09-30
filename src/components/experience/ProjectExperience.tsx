import { descriptionPresentor } from './ExperienceUtils';

export type ProjectExperienceNode = {
  description: string;
  imgSrc?: string;
  title: string;
  additionalLogo?: string;
  imageWidth?: number;
};
type ProjectExperienceProps = {
  listOfExperience: ProjectExperienceNode[];
};
export default function ProjectExperience(props: ProjectExperienceProps) {
  const { listOfExperience } = props;
  return (
    <div className='mt-10 '>
      {listOfExperience.map((experienceNode, index) => {
        const { title, description, imgSrc, additionalLogo, imageWidth } = experienceNode;

        return (
          <div key={index} className='flex flex-col bg-black rounded w-[90%] h-[25%] mx-auto mt-20'>
            <div className='flex flex-row mx-auto gap-6 mb-5'>
              <h1 className='text-4xl text-white text-center '>{title}</h1>
              <img src={additionalLogo} width={imageWidth ?? 25} height={25} />'
            </div>
            <p className='ml-5 text-white'>{descriptionPresentor(description)}</p>
            {imgSrc && <img src={imgSrc} width={250} height={250} />}
            <hr className='border-0 h-1 bg-white mt-5'></hr>
          </div>
        );
      })}
    </div>
  );
}
