import { faker } from '@faker-js/faker';

interface SuccessResponse<TItem> {
  page: number;
  perPage: number;
  totalItems: number;
  totalPages: number;
  items: TItem[];
}

(async () => {
  const idResponse = await fetch(
    'http://127.0.0.1:8090/api/collections/posts/records?perPage=100&fields=id',
  );
  const idData = (await idResponse.json()) as SuccessResponse<{ id: string }>;
  const ids = idData.items.map(({ id }) => id);

  await Promise.all(
    ids.map(id =>
      fetch(`http://127.0.0.1:8090/api/collections/posts/records/${id}`, {
        method: 'DELETE',
      }),
    ),
  );

  await Promise.all(
    Array.from({ length: 100 }).map(_ =>
      fetch('http://127.0.0.1:8090/api/collections/posts/records', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: faker.lorem.sentence(),
          content: faker.lorem.sentences({ min: 10, max: 100 }),
          coverImageUrl: faker.image.urlPicsumPhotos(),
        }),
      }),
    ),
  );
})();
