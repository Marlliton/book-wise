export default function AuthLayout({children}: {children: React.ReactNode}) {
  return (
    <div>
      <h1 
        className="text-3xl font-bold text-purple-800">
        Auth Layout
      </h1>
      {children}
    </div>
  )
}