'use client'

import { useSearchParams, usePathname, useRouter } from "next/navigation";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
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
  
  const handlePage = (page : number) => {
      const params = new URLSearchParams(pageParams)
      if (page > 1 && page <= totalPages) {
          params.set('p', page.toString())
      } else {
          params.delete('p')
      }

      return `${pathName}?${params.toString()}`
  }

  return <div className="mt-10 mb-10">
            <Pagination>
                <PaginationContent>
                    <PaginationItem>
                        <PaginationPrevious 
                            href={currentPage > 1 ? handlePage(currentPage - 1) : "#"} 
                            className={currentPage <= 1 ? "pointer-events-none opacity-50" : ""}
                        />
                    </PaginationItem>
                    {currentPage > 2 && <><PaginationItem className="sm:inline-block">
                            <PaginationLink 
                                href={handlePage(1)} 
                            >
                                1
                        </PaginationLink>
                    </PaginationItem></>}
                    {currentPage > 3 && <PaginationEllipsis/>}

                    {currentPage > 1 && <><PaginationItem className="sm:inline-block">
                            <PaginationLink 
                                href={handlePage(currentPage - 1)} 
                            >
                                {currentPage - 1}
                        </PaginationLink>
                    </PaginationItem></>}
                    <PaginationItem className="sm:inline-block">
                            <PaginationLink 
                                href={handlePage(currentPage)} 
                                isActive={currentPage === currentPage}
                            >
                                {currentPage}
                        </PaginationLink>
                    </PaginationItem>
                    {(currentPage < totalPages) && <><PaginationItem className="sm:inline-block">
                            <PaginationLink 
                                href={handlePage(currentPage + 1)} 
                            >
                                {currentPage + 1}
                        </PaginationLink>
                    </PaginationItem></>}
                    {(totalPages === 3 && currentPage === 1) && <><PaginationItem className="sm:inline-block">
                            <PaginationLink 
                                href={handlePage(3)} 
                            >
                                3
                        </PaginationLink>
                    </PaginationItem>
                    </>}
                    {(currentPage <= totalPages - 2 && totalPages > 3) && <PaginationEllipsis/>}
                    {(totalPages > 3 && currentPage < totalPages - 1) && <><PaginationItem className="sm:inline-block">
                            <PaginationLink 
                                href={handlePage(totalPages)} 
                            >
                                {totalPages}
                        </PaginationLink>
                    </PaginationItem></>}
                    <PaginationItem>
                        <PaginationNext 
                            href={currentPage < totalPages ? handlePage(currentPage + 1) : "#"} 
                            className={currentPage >= totalPages ? "pointer-events-none opacity-50" : ""}
                        />
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        </div>
}