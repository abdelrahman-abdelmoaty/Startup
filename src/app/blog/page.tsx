"use client";
import { useState } from "react";
import { BLOGS } from "@/components/Blogs/BlogsData";
import Blogs from "@/components/Blogs/Blogs";
import RouteHeader from "@/components/ui/RouteHeader";

export default function Blog() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;
  const totalPages = Math.ceil(BLOGS.length / itemsPerPage);
  
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentBlogs = BLOGS.slice(startIndex, endIndex);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePageClick = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <RouteHeader route="blog" heading="Blog Grid" />
      <section className="bg-background dark:bg-backgroundDark py-24">
        <Blogs blogs={currentBlogs} showHeader={true} />
        <div className="container">
          <div className="flex items-center justify-center gap-3 mt-10">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className={`px-4 py-2 bg-gray-100 dark:bg-dropMenuDark rounded-md text-gray-600 dark:text-gray-200 text-sm transition ${
              currentPage === 1 
                ? 'cursor-not-allowed opacity-50' 
                : 'hover:bg-foreground hover:text-white cursor-pointer'
            }`}
          >
            Prev
          </button>
          
          {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
            let pageNumber;
            if (totalPages <= 5) {
              pageNumber = i + 1;
            } else if (currentPage <= 3) {
              pageNumber = i + 1;
            } else if (currentPage >= totalPages - 2) {
              pageNumber = totalPages - 4 + i;
            } else {
              pageNumber = currentPage - 2 + i;
            }
            return pageNumber;
          }).map((page) => (
            <button
              key={page}
              onClick={() => handlePageClick(page)}
              className={`px-4 py-2 rounded-md text-sm transition cursor-pointer ${
                currentPage === page
                  ? 'bg-foreground text-white'
                  : 'bg-gray-100 dark:bg-dropMenuDark text-gray-600 dark:text-gray-200 hover:bg-foreground hover:text-white'
              }`}
            >
              {page}
            </button>
          ))}
          
          {totalPages > 5 && currentPage < totalPages - 2 && (
            <>
              <div className="px-4 py-2 bg-gray-100 dark:bg-dropMenuDark rounded-md text-gray-600 dark:text-gray-200 text-sm cursor-not-allowed">
                ...
              </div>
              <button
                onClick={() => handlePageClick(totalPages)}
                className={`px-4 py-2 rounded-md text-sm transition cursor-pointer ${
                  currentPage === totalPages
                    ? 'bg-foreground text-white'
                    : 'bg-gray-100 dark:bg-dropMenuDark text-gray-600 dark:text-gray-200 hover:bg-foreground hover:text-white'
                }`}
              >
                {totalPages}
              </button>
            </>
          )}
          
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 bg-gray-100 dark:bg-dropMenuDark rounded-md text-gray-600 dark:text-gray-200 text-sm transition ${
              currentPage === totalPages 
                ? 'cursor-not-allowed opacity-50' 
                : 'hover:bg-foreground hover:text-white cursor-pointer'
            }`}
          >
            Next
          </button>
          </div>
        </div>
      </section>
    </div>
  );
}
