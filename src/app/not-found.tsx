import ContainedLink from "@/components/ui/ContainedLink";
import Heading from "@/components/ui/Heading";
import Paragraph from "@/components/ui/Paragraph";

export default function NotFound() {
  return (
    <section className="bg-background dark:bg-backgroundDark py-24 min-h-screen flex items-center justify-center">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center bg-secondaryBackground dark:bg-dropMenuDark rounded-lg p-8 md:p-12">
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold text-foreground mb-6">404</h1>
            <Heading className="!text-2xl md:!text-3xl !mb-4 !mx-0">
              Page Not Found
            </Heading>
            <Paragraph className="!text-sm !text-gray-600 dark:!text-gray-300 !mb-8 !mx-0">
              The page you are looking for doesn't exist or has been moved.
            </Paragraph>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ContainedLink href="/" className="text-center px-8 py-3">
              Go to Homepage
            </ContainedLink>
            <ContainedLink href="/blog" className="text-center px-8 py-3 bg-transparent border-2 border-foreground text-foreground hover:bg-foreground hover:text-white">
              Browse Blog
            </ContainedLink>
          </div>
        </div>
      </div>
    </section>
  );
}