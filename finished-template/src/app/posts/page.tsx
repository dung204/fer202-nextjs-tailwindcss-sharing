import PaginatedResponse from '@/types/PaginatedResponse';
import PaginationSearchParams from '@/types/PaginationSearchParams';
import Post from '@/types/Post';
import Image from 'next/image';
import Link from 'next/link';
import { redirect } from 'next/navigation';

const DEFAULT_PAGE = 1;
const DEFAULT_PER_PAGE = 10;

export default async function Posts({ searchParams }: { searchParams: PaginationSearchParams }) {
  if (!searchParams.page || !searchParams.perPage) {
    redirect(`/posts?page=${DEFAULT_PAGE}&perPage=${DEFAULT_PER_PAGE}`);
  }

  const {
    items: posts,
    perPage,
    totalPages,
  } = await getPosts(searchParams.page, searchParams.perPage);

  return (
    <section>
      <h1>Posts page</h1>
      <div>
        {posts.map(post => (
          <Link key={post.id} href={`/posts/${post.id}`}>
            <article>
              {post.coverImageUrl && (
                <Image
                  loading='lazy'
                  src={post.coverImageUrl}
                  alt={post.title}
                  width={640}
                  height={480}
                />
              )}
              <h2>{post.title}</h2>
              <p>{post.content}</p>
            </article>
          </Link>
        ))}
      </div>
      {Array.from({ length: totalPages }).map((_, index) => (
        <Link key={index} href={`/posts?page=${index + 1}&perPage=${perPage}`}>
          <button>{index + 1}</button>
        </Link>
      ))}
    </section>
  );
}

async function getPosts(page: number = DEFAULT_PAGE, perPage: number = DEFAULT_PER_PAGE) {
  const res = await fetch(
    `http://127.0.0.1:8090/api/collections/posts/records?page=${page}&perPage=${perPage}`,
    { cache: 'no-store' },
  );
  const data = (await res.json()) as PaginatedResponse<Post>;
  return data;
}
