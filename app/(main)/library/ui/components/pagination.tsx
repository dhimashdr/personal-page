'use client'

import { useSearchParams, usePathname, useRouter } from "next/navigation";

interface BookPaginationInfo{
  currentPage: number,
  totalPages: number
}

export default function BookPagination({currentPage, totalPages} : BookPaginationInfo){
  const pageParams = useSearchParams()
  const pathName = usePathname()
  const router = useRouter()
  
  const handlePage = (page : number) => {
      const params = new URLSearchParams(pageParams)
      if (page > 1 && page <= totalPages) {
          params.set('p', page.toString())
      } else {
          params.delete('p')
      }
      router.replace(`${pathName}?${params.toString()}`)
  }

  return (
    <div className="flex gap-4 mt-8">
      <button
        disabled={currentPage <= 1}
        onClick={() => handlePage(currentPage - 1)}
      >
        Previous
      </button>

      <span>Halaman {currentPage} dari {totalPages}</span>

      <button
        disabled={currentPage >= totalPages}
        onClick={() => handlePage(currentPage + 1)}
      >
        Next
      </button>
    </div>
  );
}