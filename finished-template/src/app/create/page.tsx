import Button from '@/components/Button';
import TextArea from '@/components/TextArea';
import { Metadata } from 'next';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Create Post',
  description: 'Create post page',
};

export default function CreatePost() {
  return (
    <form action={addPost}>
      <section className='max-w-5xl m-auto rounded-2xl shadow-2xl overflow-hidden p-10'>
        <TextArea
          name='title'
          id='title'
          className='text-3xl font-extrabold mb-10'
          placeholder='Post title here...'
          required
        />
        <TextArea
          name='content'
          id='content'
          className='text-base'
          placeholder='Post content here...'
          required
        />
      </section>
      <div className='max-w-5xl mx-auto mt-10'>
        <Button type='submit'>Publish</Button>
      </div>
    </form>
  );
}

async function addPost(formData: FormData) {
  'use server';

  const post = {
    title: formData.get('title'),
    content: formData.get('content'),
  };

  await fetch('http://127.0.0.1:8090/api/collections/posts/records/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(post),
  });

  redirect('/posts');
}
