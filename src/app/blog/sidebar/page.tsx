"use client";
import { useState } from "react";
import Image from "next/image";
import BlogCard from "@/components/Blogs/BlogCard";
import { BLOGS } from "@/components/Blogs/BlogsData";
import RouteHeader from "@/components/ui/RouteHeader";
import Heading from "@/components/ui/Heading";
import Paragraph from "@/components/ui/Paragraph";

export default function BlogSidebar() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const itemsPerPage = 6;

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

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1); // Reset to first page when searching
  };

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(selectedCategory === category ? "" : category);
    setCurrentPage(1); // Reset to first page when filtering
  };


  const filteredBlogs = BLOGS.filter(blog => {
    const matchesSearch = blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         blog.desc.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = !selectedCategory || blog.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const totalPages = Math.ceil(filteredBlogs.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentBlogs = filteredBlogs.slice(startIndex, endIndex);
  return (
    <div>
      <RouteHeader route="blog" heading="Blog Sidebar" />
      <section className="bg-background dark:bg-backgroundDark py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {currentBlogs.length > 0 ? (
                  currentBlogs.map((blog, index) => (
                    <BlogCard key={index} blog={blog} />
                  ))
                ) : (
                  <div className="col-span-2 text-center py-12">
                    <p className="text-gray-500 dark:text-gray-400">No blog posts found matching your criteria.</p>
                  </div>
                )}
              </div>
              
              {/* Pagination */}
              {filteredBlogs.length > itemsPerPage && (
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
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Search */}
              <div className="bg-secondaryBackground dark:bg-dropMenuDark rounded-lg p-6">
                <Heading className="!text-xl !mb-4 !mx-0">Search</Heading>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchQuery}
                    onChange={handleSearch}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-background dark:bg-backgroundDark text-text dark:text-textDark focus:outline-none focus:ring-2 focus:ring-foreground"
                  />
                  <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-foreground">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Categories */}
              <div className="bg-secondaryBackground dark:bg-dropMenuDark rounded-lg p-6">
                <Heading className="!text-xl !mb-4 !mx-0">Categories</Heading>
                <ul className="space-y-3">
                  {['Design', 'Development', 'Creative', 'Technology'].map((category) => (
                    <li key={category}>
                      <button
                        onClick={() => handleCategoryClick(category)}
                        className={`text-sm hover:text-foreground transition ${
                          selectedCategory === category
                            ? 'text-foreground font-medium'
                            : 'text-gray-600 dark:text-gray-300'
                        }`}
                      >
                        {category} ({BLOGS.filter(blog => blog.category === category).length})
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Recent Posts */}
              <div className="bg-secondaryBackground dark:bg-dropMenuDark rounded-lg p-6">
                <Heading className="!text-xl !mb-4 !mx-0">Recent Posts</Heading>
                <div className="space-y-4">
                  {BLOGS.slice(0, 3).map((blog, index) => (
                    <div key={index} className="flex gap-3">
                      <Image
                        src={blog.blogImgUrl}
                        alt={blog.title}
                        width={64}
                        height={64}
                        className="w-16 h-16 rounded-lg object-cover"
                      />
                      <div>
                        <h4 className="text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-foreground transition cursor-pointer line-clamp-2">
                          {blog.title}
                        </h4>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{blog.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div className="bg-secondaryBackground dark:bg-dropMenuDark rounded-lg p-6">
                <Heading className="!text-xl !mb-4 !mx-0">Tags</Heading>
                <div className="flex flex-wrap gap-2">
                  {['Design', 'Development', 'Creative', 'UI/UX', 'Web', 'Mobile', 'Tech', 'Startup'].map((tag, index) => (
                    <span key={index} className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-sm rounded-full text-gray-600 dark:text-gray-300 hover:bg-foreground hover:text-white transition cursor-pointer">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}