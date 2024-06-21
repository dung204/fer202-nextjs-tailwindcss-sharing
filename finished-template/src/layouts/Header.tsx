import Button from '@/components/Button';
import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <nav className='flex md:flex-row flex-col items-center justify-center md:gap-16 gap-5 py-5 mb-10'>
        <Link className='font-semibold text-md' href='/'>
          Home
        </Link>
        <Link className='font-semibold text-md' href='/posts'>
          Posts
        </Link>
        <Link className='font-semibold text-md' href='/create'>
          <Button>Create post</Button>
        </Link>
      </nav>
    </header>
  );
}
