export default function Wrapper({ children }: { children: React.ReactNode }) {
  return <div className="container mx-auto relative px-8">{children}</div>;
}
