import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationEllipsis,
  PaginationLink,
  PaginationNext,
} from '@/components/ui/pagination';

interface Props {
  page: string | number;
  setPage: any;
  pages: number | undefined;
}

export default function Paginate({ page, setPage, pages }: Props) {
  return (
    <Pagination>
      <PaginationContent>
        {Number(page) > 1 && (
          <PaginationItem>
            <PaginationPrevious onClick={() => setPage(Number(page) - 1)} />
          </PaginationItem>
        )}

        {Number(page) > 2 && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}

        {Number(page) > 1 && (
          <PaginationItem>
            <PaginationLink onClick={() => setPage(Number(page) - 1)}>
              {Number(page) - 1}
            </PaginationLink>
          </PaginationItem>
        )}

        <PaginationItem>
          <PaginationLink isActive>{page}</PaginationLink>
        </PaginationItem>

        {Number(pages) > 2 && Number(page) !== Number(pages) && (
          <PaginationItem>
            <PaginationLink onClick={() => setPage(Number(page) + 1)}>
              {Number(page) + 1}
            </PaginationLink>
          </PaginationItem>
        )}

        {Number(page) !== Number(pages) &&
          Number(page) !== Number(pages) - 1 && (
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
          )}

        {Number(page) < Number(pages) && (
          <PaginationItem>
            <PaginationNext onClick={() => setPage(Number(page) + 1)} />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
}
