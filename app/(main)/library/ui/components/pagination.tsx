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
    <div className="flex gap-4 mt-8 mx-auto w-fit text-xs md:text-sm items-center">
      <button
        className={`font-light border-2 border-white/10 px-2 py-1 rounded-sm ${currentPage <= 1 ? "bg-neutral-800/50 text-neutral-500" : "bg-neutral-400/50 text-neutral-100 active:bg-neutral-500/50 hover:bg-neutral-500/90"}`}
        disabled={currentPage <= 1}
        onClick={() => handlePage(currentPage - 1)}
      >
        &lt; prev
      </button>

      <span>page {currentPage} of {totalPages}</span>

      <button
      className={`font-light border-2 border-white/10 px-2 py-1 rounded-sm ${currentPage >= totalPages ? "bg-neutral-800/50 text-neutral-500" : "bg-neutral-400/50 text-neutral-100 active:bg-neutral-500/50 hover:bg-neutral-500/90"}`}
        disabled={currentPage >= totalPages}
        onClick={() => handlePage(currentPage + 1)}
      >
        next &gt;
      </button>
    </div>
  );
}