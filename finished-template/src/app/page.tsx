import Image from 'next/image';
import avatarHome from '@/assets/avatar-home.jpg';

export default function Home() {
  return (
    <section>
      <h1>Hello I&apos;m Mantrilogix. I&apos;m a web enthusiast and developer</h1>
      <Image src={avatarHome} alt='Avatar home' />
    </section>
  );
}
