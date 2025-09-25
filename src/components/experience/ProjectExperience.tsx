import { descriptionPresentor } from './ExperienceUtils';

export type ProjectExperienceNode = {
  description: string;
  imgSrc?: string;
  title: string;
};
type ProjectExperienceProps = {
  listOfExperience: ProjectExperienceNode[];
};
export default function ProjectExperience(props: ProjectExperienceProps) {
  const { listOfExperience } = props;
  return (
    <div className='mt-10 '>
      {listOfExperience.map((experienceNode, index) => {
        const { title, description, imgSrc } = experienceNode;

        return (
          <div key={index} className='container w-1/2 h-1/2 bg-blue-300 rounded-lg mb-3 mx-auto'>
            <h1 className='text-4xl ml-2'>{title}</h1>
            <p className='ml-5'>{descriptionPresentor(description)}</p>
            {imgSrc && <img src={imgSrc} width={250} height={250} />}
          </div>
        );
      })}
    </div>
  );
}
