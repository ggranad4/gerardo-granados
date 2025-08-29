import { About } from '../about';
import ExperiencePresenter, { type ExperienceNode } from '../experience/ExperiencePresenter';
import { Navbar } from '../nav';

export default function Home() {
  const listOfExperience: ExperienceNode[] = [
    { imageSrc: 'hello', title: 'Infosys', description: 'Descritpion' },
    { imageSrc: 'hello', title: 'Infosys', description: 'Descritpion' },
    { imageSrc: 'hello', title: 'Infosys', description: 'Descritpion' },
  ];
  return (
    <div className='h-screen'>
      <Navbar />
      <About />
      <ExperiencePresenter listOfExperience={listOfExperience} />
    </div>
  );
}
