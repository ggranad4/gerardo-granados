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
          <div key={index} className='container w-1/2 h-1/2 bg-blue-300 rounded-lg mb-3 mx-auto'>
            <h1 className='text-4xl ml-2'>{title}</h1>
            <p className='ml-5'>{descriptionPresentor(description)}</p>
            <img src={imageSrc} width={250} height={250} />
          </div>
        );
      })}
    </div>
  );
}
