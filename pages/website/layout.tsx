

export default function WebsiteLayout({
                                    children,
                                  }: {
  children: React.ReactNode
}) {
  return (
    <div className="bg-white">{children}
      <div className="flex h-screen flex-col">
        <div className="flex-1 bg-white"></div>
      </div>
    </div>
  )
}
