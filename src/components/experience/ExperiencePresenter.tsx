import { descriptionPresentor } from './ExperienceUtils';

export interface ExperienceNode {
  imageSrc: string;
  title: string;
  description: string;
}
type ExperiencePresenterProps = {
  listOfExperience: ExperienceNode[];
};
export default function ExperiencePresenter(props: ExperiencePresenterProps) {
  const { listOfExperience } = props;
  return (
    <div className='mt-10 '>
      {listOfExperience.map((experienceNode, index) => {
        const { title, description, imageSrc } = experienceNode;

        return (
          <div key={index} className='flex flex-col bg-black rounded w-[90%] h-[25%] mx-auto mt-5'>
            <img src={imageSrc} width={250} height={250} className='mx-auto mt-4' />
            <div className='flex flex-col text-white'>
              <h1 className='text-4xl ml-2 text-center mb-2'>{title}</h1>
              <p className='ml-5'>{descriptionPresentor(description)}</p>
            </div>
            <hr className='border-0 bg-white h-1 mt-10'></hr>
          </div>
        );
      })}
    </div>
  );
}
