import Image from 'next/image';
import avatarHome from '@/assets/avatar-home.jpg';
import { Metadata } from 'next';

export const metadata: Metadata = {
  description: 'Next.js blog demo home page.',
};

export default function Home() {
  return (
    <section className='grid md:grid-cols-2 gap-10 place-items-center'>
      <div>
        <h1 className='text-3xl font-extrabold md:text-left text-center'>
          Hello I&apos;m Mantrilogix. I&apos;m a web enthusiast and developer
        </h1>
        <div className='flex flex-wrap md:justify-start justify-center mt-6 items-center gap-6'>
          <Image src='/html.svg' alt='HTML' width={50} height={50} title='HTML' />
          <Image src='/css.svg' alt='CSS' width={50} height={50} title='CSS' />
          <Image src='/tailwind.svg' alt='Tailwind' width={50} height={50} title='TailwindCSS' />
          <Image src='/javascript.svg' alt='JavaScript' width={50} height={50} title='JavaScript' />
          <Image src='/react.svg' alt='ReactJS' width={50} height={50} title='React.JS' />
          <Image src='/next.svg' alt='NextJS' width={50} height={50} title='Next.JS' />
          <Image src='/expressjs.svg' alt='ExpressJS' width={50} height={50} title='Express' />
          <Image src='/nestjs.svg' alt='NestJS' width={50} height={50} title='Nest.JS' />
          <Image src='/java.svg' alt='Java' width={50} height={50} title='Java' />
        </div>
      </div>
      <Image src={avatarHome} alt='Avatar home' className='rounded-full' />
    </section>
  );
}
