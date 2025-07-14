"use client";
import { useParams } from "next/navigation";
import { BLOGS } from "@/components/Blogs/BlogsData";
import RouteHeader from "@/components/ui/RouteHeader";
import Heading from "@/components/ui/Heading";
import Paragraph from "@/components/ui/Paragraph";
import ContainedLink from "@/components/ui/ContainedLink";
import Image from "next/image";

export default function BlogDetails() {
  const params = useParams();
  const blogId = parseInt(params.id as string);
  const blog = BLOGS.find(b => b.id === blogId);

  if (!blog) {
    return (
      <div>
        <RouteHeader route="blog" heading="Blog Not Found" />
        <section className="bg-background dark:bg-backgroundDark py-24">
          <div className="container text-center">
            <Heading className="!text-2xl !mb-4">Blog Post Not Found</Heading>
            <Paragraph className="!mb-8">The blog post you&apos;re looking for doesn&apos;t exist.</Paragraph>
            <ContainedLink href="/blog">← Back to Blog</ContainedLink>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div>
      <RouteHeader route="blog" heading="Blog Details" />
      <section className="bg-background dark:bg-backgroundDark py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto bg-secondaryBackground dark:bg-dropMenuDark rounded-lg p-8 md:p-12">
            {/* Article Header */}
            <div className="mb-8">
              <div className="flex items-center gap-4 mb-4">
                <span className="bg-foreground text-white px-3 py-1 rounded-full text-sm">
                  {blog.category}
                </span>
                <span className="text-gray-500 dark:text-gray-400 text-sm">
                  {blog.date}
                </span>
              </div>
              <Heading className="!text-2xl md:!text-3xl !mb-4 !mx-0">
                {blog.title}
              </Heading>
              <Paragraph className="!text-sm !text-gray-600 dark:!text-gray-300 !mb-6 !mx-0">
                {blog.desc}
              </Paragraph>

              {/* Author Info */}
              <div className="flex items-center gap-4 mb-8">
                <Image
                  src={blog.authorImgUrl}
                  alt={blog.author}
                  width={48}
                  height={48}
                  className="rounded-full size-12 object-cover"
                />
                <div>
                  <h4 className="font-medium text-sm text-gray-700 dark:text-gray-200">
                    {blog.author}
                  </h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {blog.authorTitle}
                  </p>
                </div>
              </div>
            </div>

            {/* Featured Image */}
            <div className="mb-8">
              <Image
                src={blog.blogImgUrl}
                alt={blog.title}
                width={800}
                height={400}
                className="w-full h-[400px] object-cover rounded-lg"
              />
            </div>

            {/* Article Content */}
            <div className="prose max-w-none dark:prose-invert">
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>

              <h2 className="text-lg font-semibold text-text dark:text-textDark mb-3">
                What makes a great UI component?
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>

              <blockquote className="border-l-4 border-foreground pl-4 italic text-sm text-gray-600 dark:text-gray-400 my-6">
                &ldquo;Design is not just what it looks like and feels like. Design is
                how it works.&rdquo;
                <br />
                <cite>- Steve Jobs</cite>
              </blockquote>

              <h3 className="text-base font-semibold text-text dark:text-textDark mb-3">
                Best practices for modern web development
              </h3>
              <ul className="list-disc ml-6 space-y-1 text-sm text-gray-600 dark:text-gray-300 mb-4">
                <li>Focus on user experience and accessibility</li>
                <li>Write clean, maintainable code</li>
                <li>Use modern frameworks and tools</li>
                <li>Optimize for performance</li>
                <li>Test thoroughly across devices</li>
              </ul>

              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo.
              </p>

              <h3 className="text-base font-semibold text-text dark:text-textDark mb-3">
                Conclusion
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
                ipsum quia dolor sit amet.
              </p>
            </div>

            {/* Tags */}
            <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
              <h4 className="font-medium text-text dark:text-textDark mb-4">
                Tags:
              </h4>
              <div className="flex flex-wrap gap-2">
                {[blog.category, "Web Development", "Programming", "Tutorial"].map(
                  (tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-sm rounded-full text-text dark:text-textDark hover:bg-foreground hover:text-white transition cursor-pointer"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </div>

            {/* Share Buttons */}
            <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
              <h4 className="font-medium text-text dark:text-textDark mb-4">
                Share this article:
              </h4>
              <div className="flex gap-4">
                <button
                  onClick={() => {
                    const url = window.location.href;
                    const text = `Check out this article: ${blog.title}`;
                    window.open(
                      `https://twitter.com/intent/tweet?text=${encodeURIComponent(
                        text
                      )}&url=${encodeURIComponent(url)}`,
                      "_blank"
                    );
                  }}
                  className="bg-blue-400 text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition"
                >
                  Twitter
                </button>
                <button
                  onClick={() => {
                    const url = window.location.href;
                    window.open(
                      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                        url
                      )}`,
                      "_blank"
                    );
                  }}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  Facebook
                </button>
                <button
                  onClick={() => {
                    const url = window.location.href;
                    const title = blog.title;
                    window.open(
                      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                        url
                      )}&title=${encodeURIComponent(title)}`,
                      "_blank"
                    );
                  }}
                  className="bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition"
                >
                  LinkedIn
                </button>
              </div>
            </div>

            {/* Navigation */}
            <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
              <div className="flex justify-between items-center flex-wrap gap-4">
                <ContainedLink
                  href="/blog"
                  className="bg-transparent border-2 border-foreground text-foreground hover:bg-foreground hover:text-white"
                >
                  ← Back to Blog
                </ContainedLink>
                <div className="flex gap-2">
                  {blogId > 1 && (
                    <ContainedLink 
                      href={`/blog/details/${blogId - 1}`}
                      className="bg-transparent border-2 border-gray-400 text-gray-600 dark:text-gray-300 hover:bg-gray-400 hover:text-white text-sm px-4 py-2"
                    >
                      ← Previous
                    </ContainedLink>
                  )}
                  {blogId < BLOGS.length && (
                    <ContainedLink 
                      href={`/blog/details/${blogId + 1}`}
                      className="bg-transparent border-2 border-gray-400 text-gray-600 dark:text-gray-300 hover:bg-gray-400 hover:text-white text-sm px-4 py-2"
                    >
                      Next →
                    </ContainedLink>
                  )}
                </div>
                <ContainedLink href="/blog/sidebar">
                  View More Articles →
                </ContainedLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
