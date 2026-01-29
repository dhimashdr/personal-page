'use client'

import { useSearchParams, usePathname, useRouter } from "next/navigation";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

interface BookPaginationInfo{
  currentPage: number,
  totalPages: number
}

export default function BookPagination({currentPage, totalPages} : BookPaginationInfo){
  const pageParams = useSearchParams()
  const pathName = usePathname()
  const { replace } = useRouter()
  
  const handlePage = (page : number) => {
      const params = new URLSearchParams(pageParams)
      if (page > 1 && page <= totalPages) {
          params.set('p', page.toString())
      } else {
          params.delete('p')
      }
      replace(`${pathName}?${params.toString()}`)
  }

  return <div className="mt-10 mb-10">
            <Pagination>
                <PaginationContent>
                    <button>
                        <PaginationPrevious 
                            onClick={(e) => currentPage > 1 ? handlePage(currentPage - 1) : "#"} 
                            className={currentPage <= 1 ? "pointer-events-none opacity-50" : ""}
                        />
                    </button>
                    {currentPage > 2 && <><button className="sm:inline-block">
                            <PaginationLink 
                                onClick={(e) => handlePage(1)}
                            >
                                1
                        </PaginationLink>
                    </button></>}
                    {currentPage > 3 && <PaginationEllipsis/>}

                    {currentPage > 1 && <><button className="sm:inline-block">
                            <PaginationLink 
                                onClick={(e) => handlePage(currentPage - 1)} 
                            >
                                {currentPage - 1}
                        </PaginationLink>
                    </button></>}
                    <button className="sm:inline-block">
                            <PaginationLink 
                                onClick={(e) => handlePage(currentPage)} 
                                isActive={currentPage === currentPage}
                            >
                                {currentPage}
                        </PaginationLink>
                    </button>
                    {(currentPage < totalPages) && <><button className="sm:inline-block">
                            <PaginationLink 
                                onClick={(e) => handlePage(currentPage + 1)} 
                            >
                                {currentPage + 1}
                        </PaginationLink>
                    </button></>}
                    {(totalPages === 3 && currentPage === 1) && <><button className="sm:inline-block">
                            <PaginationLink 
                                onClick={(e) => handlePage(3)} 
                            >
                                3
                        </PaginationLink>
                    </button>
                    </>}
                    {(currentPage <= totalPages - 2 && totalPages > 3) && <PaginationEllipsis/>}
                    {(totalPages > 3 && currentPage < totalPages - 1) && <><button className="sm:inline-block">
                            <PaginationLink 
                                onClick={(e) => handlePage(totalPages)} 
                            >
                                {totalPages}
                        </PaginationLink>
                    </button></>}
                    <button>
                        <PaginationNext 
                            onClick={(e) => currentPage < totalPages ? handlePage(currentPage + 1) : "#"} 
                            className={currentPage >= totalPages ? "pointer-events-none opacity-50" : ""}
                        />
                    </button>
                </PaginationContent>
            </Pagination>
        </div>
}