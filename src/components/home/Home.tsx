import { About } from '../about';
import ExperiencePresenter, { type ExperienceNode } from '../experience/ExperiencePresenter';
import { Navbar } from '../nav';
import infosys from '../../images/infosysLogo.webp';
import rebuild from '../../images/rebuildLogo.webp';
import ProjectExperience, { type ProjectExperienceNode } from '../experience/ProjectExperience';

export default function Home() {
  const workExperience: ExperienceNode[] = [
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
  const projectExperience: ProjectExperienceNode[] = [
    {
      title: 'Receiptify Android App',
      description:
        'Developed an Android app that digitizes receipts using Firebase ML Kit, enabling users to scan, store, and analyze their purchase',
    },
    {
      title: 'Fostlings iOS App',
      description:
        'Flutter app for Ford Focus ST owners to share car builds and troubleshoot repairs together.,',
    },
    {
      title: 'Plan Your Way Planners',
      description:
        'Fully deployed and managed by me. I started this website to help a small business eliminate the need for manual pdf order forms and help customers order their own planner on this e-commerce-like site.',
    },
  ];

  return (
    <div className='h-screen'>
      <Navbar />
      <About />
      <h1 className=' text-4xl flex justify-center mt-2'>Work Experience</h1>
      <ExperiencePresenter listOfExperience={workExperience} />
      <h1 className='text-4xl flex justify-center mt-2'>Projects</h1>
      <ProjectExperience listOfExperience={projectExperience} />
    </div>
  );
}
