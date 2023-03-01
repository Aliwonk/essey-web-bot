import { Header } from "./header";
import { BottomNavigate } from "./navigate";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <BottomNavigate />
    </>
  )
}