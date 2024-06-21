'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { ChangeEvent } from 'react';

export default function PerPageSelect() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  const currentPerPage = Number(searchParams.get('perPage')) || 10;

  const handleChangePerPage = (e: ChangeEvent<HTMLSelectElement>) => {
    const perPage = e.target.value;
    router.push(`${pathname}?page=1&perPage=${perPage}`);
  };

  return (
    <select
      defaultValue='10'
      value={currentPerPage}
      onChange={handleChangePerPage}
      className='focus:outline-none px-2'
    >
      <option value='10'>10</option>
      <option value='25'>25</option>
      <option value='50'>50</option>
      <option value='100'>100</option>
    </select>
  );
}
