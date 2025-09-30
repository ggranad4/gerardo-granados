import { About } from '../about';
import { Navbar } from '../nav';
import infosys from '../../images/infosysLogo.webp';
import rebuild from '../../images/rebuildLogo.webp';
import ProjectExperience, { type ProjectExperienceNode } from '../experience/ProjectExperience';
import ExperiencePresenter, { type ExperienceNode } from '../experience/ExperiencePresenter';
import AdditionalLink, { type AdditionalLinkNode } from '../miscellaneous/AdditionalLink';
import github from '../../images/githubLogo.webp';
import linkedIn from '../../images/linkedin.webp';
import flutter from '../../images/flutter.webp';
import Displayer from '../displayer/Displayer';
import androidStudio from '../../images/andriodStudio.webp';
import KratosPresentor from '../miscellaneous/KratosPresentor';
import react from '../../images/react.webp';
export default function Home() {
  const githubLink: AdditionalLinkNode = {
    linkToSite: 'https://github.com/ggranad4',
    logo: github,
    title: 'Github',
  };
  const linkedInLink: AdditionalLinkNode = {
    linkToSite: 'https://www.linkedin.com/in/gerardo-granados-a755bab8/',
    logo: linkedIn,
    title: 'LinkedIn',
  };
  const workExperience: ExperienceNode[] = [
    {
      imageSrc: infosys,
      title: 'Software Engineer at Infosys',
      description:
        'Client AT&T: Developed ad configuration tools and automated tracking using Charles Proxy and Python,' +
        'Created scheduled web scrapers to collect and upload data to ElasticSearch.' +
        ',Client Warner Music Group: Maintained Java and PL/SQL systems and automated jobs using AppWorx.',
    },
    {
      imageSrc: rebuild,
      title: 'Software Engineer at Re:Build Manufacturing',
      description:
        'Develop and maintain React C# (Hot Chocolate to use GraphQL on AWS lambda) web applications tailored for internal manufacturing companies.,' +
        'Built internal tools (quoting automation web apps, process automation web app) that automated repetitive tasks and saved teams up to 6 hours of daily manual work.,' +
        'Worked with manufacturing teams to replace paper-based processes with React and AWS tools,' +
        'improving productivity and accuracy.,' +
        'Created a web application that uses threeJS to automate the creation of carbon fiber parts.,' +
        'Lead for researching log metric methods on apps.',
    },
  ];
  const projectExperience: ProjectExperienceNode[] = [
    {
      title: 'Receiptify Android App',
      description:
        'Developed an Android app that digitizes receipts using Firebase ML Kit enabling users to scan. Then store and analyze their purchase',
      additionalLogo: androidStudio,
      imageWidth: 45,
    },
    {
      title: 'Fostlings iOS App',
      description:
        'Flutter app for Ford Focus ST owners to share car builds and troubleshoot repairs together.',
      additionalLogo: flutter,
    },
    {
      additionalLogo: react,
      imageWidth: 45,
      title: 'Plan Your Way Planners',
      description:
        'Fully deployed and managed by me. I started this website to help a small business eliminate the need for manual pdf order forms and help customers order their own planner on this e-commerce-like site.',
    },
  ];

  return (
    <div className='min-h-screen w-screen bg-gradient-to-r from-blue-500 to-white-300'>
      <Navbar />
      <br></br>
      <About />
      <Displayer title='Work Experience'>
        <ExperiencePresenter listOfExperience={workExperience} />
      </Displayer>
      <Displayer title='Related Projects'>
        <ProjectExperience listOfExperience={projectExperience} />
      </Displayer>
      <KratosPresentor />
      <h1 className='text-4xl flex justify-center mt-10'>Additional Links</h1>
      <div className='flex justify-center gap-4 '>
        <AdditionalLink additionalLink={githubLink} />
        <AdditionalLink additionalLink={linkedInLink} />
      </div>
    </div>
  );
}
