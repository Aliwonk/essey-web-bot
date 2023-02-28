import { Header } from "./header";
import { BottomNavigate } from "./navigate";

export default function Layout({ children }) {
    return (
      <>
        <Header />
        <main>{children}</main>
        <BottomNavigate />
      </>
    )
  }