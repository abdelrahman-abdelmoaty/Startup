import Blogs from "@/components/Blogs/Blogs";
import RouteHeader from "@/components/ui/RouteHeader";

export default function Blog() {
  return (
    <div>
      <RouteHeader route="blog" heading="Blog Grid" />
      <section className="bg-background dark:bg-backgroundDark py-24">
        <Blogs />
        <div className="flex items-center justify-center gap-3 mt-10">
          <div className="px-4 py-2 bg-gray-100 dark:bg-dropMenuDark rounded-md text-gray-400 text-sm hover:bg-foreground transition hover:text-white cursor-pointer">Prev</div>
          <div className="px-4 py-2 bg-gray-100 dark:bg-dropMenuDark rounded-md text-gray-400 text-sm hover:bg-foreground transition hover:text-white cursor-pointer">1</div>
          <div className="px-4 py-2 bg-gray-100 dark:bg-dropMenuDark rounded-md text-gray-400 text-sm hover:bg-foreground transition hover:text-white cursor-pointer">2</div>
          <div className="px-4 py-2 bg-gray-100 dark:bg-dropMenuDark rounded-md text-gray-400 text-sm hover:bg-foreground transition hover:text-white cursor-pointer">3</div>
          <div className="px-4 py-2 bg-gray-100 dark:bg-dropMenuDark rounded-md text-gray-400 text-sm cursor-not-allowed">...</div>
          <div className="px-4 py-2 bg-gray-100 dark:bg-dropMenuDark rounded-md text-gray-400 text-sm hover:bg-foreground transition hover:text-white cursor-pointer">12</div>
          <div className="px-4 py-2 bg-gray-100 dark:bg-dropMenuDark rounded-md text-gray-400 text-sm hover:bg-foreground transition hover:text-white cursor-pointer">Next</div>
        </div>
      </section>
    </div>
  );
}
