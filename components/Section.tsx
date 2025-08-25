export default function Section({ title, children }: { title: string, children: React.ReactNode }) {
  return (
    <section className="section">
      <div className="container space-y-6">
        <h2 className="h2">{title}</h2>
        {children}
      </div>
    </section>
  )
}
