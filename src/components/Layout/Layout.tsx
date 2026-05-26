import { Outlet } from "react-router"
import Header from "./Header/Header"
import Footer from "./Footer/Footer"
import { useScrollReveal } from "../ui/ScrollReveal"

export default function Layout() {
  useScrollReveal()
  return (
    <>
    <Header />
      <main>
        <Outlet />
      </main>
    <Footer />
    </>
  )
}
