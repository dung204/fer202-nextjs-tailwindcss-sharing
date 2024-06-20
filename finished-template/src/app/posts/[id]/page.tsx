import Image from 'next/image';
import Post from '@/types/Post';

type PostDetailsParams = {
  id: string;
};

export default async function PostDetails({ params }: { params: PostDetailsParams }) {
  const post = await getPost(params.id);

  return (
    <section>
      <Image src={post.coverImageUrl} alt={post.title} width={640} height={480} />
      <h1>{post.title}</h1>
      <p>Posted on {new Date(post.created).toLocaleDateString('en-US', { dateStyle: 'full' })}</p>
      <p>{post.content}</p>
    </section>
  );
}

async function getPost(id: string) {
  const res = await fetch(`http://127.0.0.1:8090/api/collections/posts/records/${id}`);
  const post = await res.json();
  return post as Post;
}
