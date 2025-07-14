import Heading from "@components/ui/Heading";
import Paragraph from "@components/ui/Paragraph";
import { BLOGS } from "@components/Blogs/BlogsData";
import BlogCard from "@components/Blogs/BlogCard";

interface BlogsProps {
  blogs?: typeof BLOGS;
  showHeader?: boolean;
}

export default function Blogs({
  blogs = BLOGS,
  showHeader = true,
}: BlogsProps) {
  return (
    <div className="container py-20">
      {showHeader && (
        <>
          <Heading className="text-center">Our Latest Blogs</Heading>
          <Paragraph className="text-center mb-12">
            There are many variations of passages of Lorem Ipsum available but
            the majority have suffered alteration in some form.
          </Paragraph>
        </>
      )}
      <div className="container gap-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center">
        {blogs.slice(0, 3).map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
}
