import Image from 'next/image';
import AppButton from './AppButton';
const AppProject = ({ project }) => (
  <div className="bg-white border border-light-gray rounded-lg px-4 pt-6 text-center overflow-hidden">
    <div className="mb-3">
      <a href={project.url} target="_blank" rel="noopener noreferrer">
        <h3 className="text-black text-base lg:text-xl font-semibold transition duration-300 hover:text-primary">
          {project.name}
        </h3>
      </a>
      <p className="text-gray text-xs">{project.stack}</p>
    </div>
    <div className="shadow-xl">
      <Image
        src={project.image}
        alt={project.name}
        layout="responsive"
        width={100}
        height={60}
        quality={10}
        placeholder="blur"
        blurDataURL={project.image}
        className="transition duration-300 transform translate-y-5 hover:translate-y-0 "
      />
    </div>

      <div className='pt-4 text-center justiy-center '>
       <div className='flex p-2' ><div className='text-sm px-4 item-center justify-between '>{project.name}</div><AppButton className="border-2 border-red-300" title="Live" href={project.url} /></div>
       {project.name==="Urstyle" &&
       <div className='flex'><div className='text-sm'>Doc Track</div><AppButton title="Tracker" /></div>
      }</div>
     
  </div>
);
export default AppProject;
