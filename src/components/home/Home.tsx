import { About } from '../about';
import ExperiencePresenter, { type ExperienceNode } from '../experience/ExperiencePresenter';
import { Navbar } from '../nav';
import infosys from '../../images/infosysLogo.webp';
import rebuild from '../../images/rebuildLogo.webp';

export default function Home() {
  const listOfExperience: ExperienceNode[] = [
    {
      imageSrc: infosys,
      title: 'Infosys',
      description:
        'Client AT&T: Developed ad configuration tools and automated tracking using Charles Proxy and Python,' +
        'Created scheduled web scrapers to collect and upload data to ElasticSearch.' +
        ',Client Warner Music Group: Maintained Java and PL/SQL systems and automated jobs using AppWorx.',
    },
    {
      imageSrc: rebuild,
      title: 'Re:Build Manufacturing',
      description:
        'Develop and maintain React, C# (Hot Chocolate to use GraphQL on AWS lambda) web applications tailored for internal manufacturing companies.,' +
        'Built internal tools (quoting automation web apps, process automation web app) that automated repetitive tasks and saved teams up to 6 hours of daily manual work.,' +
        'Worked with manufacturing teams to replace paper-based processes with React and AWS tools,' +
        'improving productivity and accuracy.,' +
        'Created a web application that uses threeJS to automate the creation of carbon fiber parts.,' +
        'Lead for researching log metric methods on apps.,',
    },
  ];
  return (
    <div className='h-screen'>
      <Navbar />
      <About />
      <h1>Work Experience</h1>
      <ExperiencePresenter listOfExperience={listOfExperience} />
    </div>
  );
}
