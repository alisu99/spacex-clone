export default function Footer() {
  return (
    <footer className="bg-black py-6 px-6 text-center">
      <div className="max-w-4xl mx-auto">
        <p className="pb-2"><small>SPACEX &copy; {new Date().getFullYear()}</small></p>
        <nav className="flex gap-3 justify-center">
          <p className="text-xs">PRIVACY POLICY</p>
          <a href="" className="text-xs">SUPPLIERS</a>
        </nav>
      </div>
    </footer>
  )
}
