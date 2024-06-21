import Image from 'next/image';
import Post from '@/types/Post';
import { Metadata } from 'next';

type PostDetailsParams = {
  id: string;
};

export async function generateMetadata({
  params,
}: {
  params: PostDetailsParams;
}): Promise<Metadata> {
  const post = await getPost(params.id);

  return {
    title: post.title,
  };
}

export default async function PostDetails({ params }: { params: PostDetailsParams }) {
  const post = await getPost(params.id);

  return (
    <section className='max-w-5xl m-auto rounded-2xl shadow-2xl overflow-hidden'>
      {post.coverImageUrl && (
        <div className='min-h-80 relative'>
          <Image src={post.coverImageUrl} alt={post.title} fill className='object-cover' />
        </div>
      )}
      <div className='p-10'>
        <h1 className='text-3xl font-extrabold'>{post.title}</h1>
        <p className='text-sm text-slate-500'>
          Posted on {new Date(post.created).toLocaleDateString('en-US', { dateStyle: 'full' })}
        </p>
        <p className='mt-10'>{post.content}</p>
      </div>
    </section>
  );
}

async function getPost(id: string) {
  const res = await fetch(`http://127.0.0.1:8090/api/collections/posts/records/${id}`, {
    next: { revalidate: 10 },
  });
  const post = await res.json();
  return post as Post;
}
