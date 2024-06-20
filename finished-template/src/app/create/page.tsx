import { redirect } from 'next/navigation';

export default function CreatePost() {
  return (
    <section>
      <form action={addPost}>
        <label htmlFor='title'>Title:</label>
        <input type='text' name='title' id='title' required />
        <br />
        <label htmlFor='content'>Content</label>
        <textarea name='content' id='content' required></textarea>
        <br />
        <button type='submit'>Submit</button>
      </form>
    </section>
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
