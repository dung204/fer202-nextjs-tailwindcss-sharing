'use client';

import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

interface NavigationProps {
  perPage: number;
  totalPages: number;
}

export default function Pagination({ perPage, totalPages }: NavigationProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get('page'));
  let startIndex;
  let endIndex;

  if (currentPage - 3 <= 0) {
    startIndex = 0;
    endIndex = 5;
  }

  if (currentPage + 3 > totalPages) {
    startIndex = totalPages - 5;
    endIndex = totalPages;
  }

  if (currentPage - 3 > 0 && currentPage + 3 <= totalPages) {
    startIndex = currentPage - 3;
    endIndex = currentPage + 2;
  }

  if (totalPages < 1) throw new Error('Total pages must be greater than 0');

  useEffect(() => {
    console.log('Hello world');
  }, []);

  return (
    <div className='flex flex-col items-center justify-center'>
      <div className='flex gap-2'>
        <Link
          href={`${pathname}?page=1&perPage=${perPage}`}
          className={`pagination-item ${
            currentPage !== 1 ? 'hover:pagination-item-selected' : 'pointer-events-none'
          }`}
          title='First page'
        >
          <button>≪</button>
        </Link>
        <Link
          href={`${pathname}?page=${currentPage - 1}&perPage=${perPage}`}
          className={`pagination-item ${
            currentPage !== 1 ? 'hover:pagination-item-selected' : 'pointer-events-none'
          }`}
          title='Previous page'
        >
          <button disabled={currentPage === 1}>&lt;</button>
        </Link>
        {Array.from({ length: totalPages })
          .map((_, index) => (
            <Link
              key={index}
              href={`${pathname}?page=${index + 1}&perPage=${perPage}`}
              className={`pagination-item hover:pagination-item-selected ${
                index + 1 === currentPage ? 'pagination-item-selected' : ''
              }`}
            >
              <button>{index + 1}</button>
            </Link>
          ))
          .slice(startIndex, endIndex)}
        <Link
          href={`${pathname}?page=${currentPage + 1}&perPage=${perPage}`}
          className={`pagination-item ${
            currentPage !== totalPages ? 'hover:pagination-item-selected' : 'pointer-events-none'
          }`}
          title='Next page'
        >
          <button disabled={currentPage === totalPages}>&gt;</button>
        </Link>
        <Link
          href={`${pathname}?page=${totalPages}&perPage=${perPage}`}
          className={`pagination-item ${
            currentPage !== totalPages ? 'hover:pagination-item-selected' : 'pointer-events-none'
          }`}
          title='Last page'
        >
          <button>≫</button>
        </Link>
      </div>
    </div>
  );
}
