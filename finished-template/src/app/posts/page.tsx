import Pagination from '@/components/Pagination';
import PerPageSelect from '@/components/PerPageSelect';
import PaginatedResponse from '@/types/PaginatedResponse';
import PaginationSearchParams from '@/types/PaginationSearchParams';
import Post from '@/types/Post';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Posts',
  description: 'Posts page',
};

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
      <div className='flex md:flex-row flex-col gap-5 items-center justify-between text-base mb-10'>
        <div>
          Show <PerPageSelect /> posts per page
        </div>
        <Pagination perPage={perPage} totalPages={totalPages} />
      </div>
      <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-10'>
        {posts.map(post => (
          <Link key={post.id} href={`/posts/${post.id}`}>
            <article className='shadow-xl rounded-2xl overflow-hidden h-full transition-all hover:-translate-y-3 hover:shadow-2xl'>
              {post.coverImageUrl && (
                <Image
                  loading='lazy'
                  src={post.coverImageUrl}
                  alt={post.title}
                  width={640}
                  height={480}
                />
              )}
              <div className='p-3'>
                <h2 className='line-clamp-3 text-lg font-bold h-[4.6em]'>{post.title}</h2>
                <p className='line-clamp-3'>{post.content}</p>
              </div>
            </article>
          </Link>
        ))}
      </div>
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
