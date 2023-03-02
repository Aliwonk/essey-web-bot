import { Header } from "./header";
import { BottomNavigate } from "./navigate";

export default function Layout(props) {
  const { children, header = true } = props;
  return (
    <>
      {header && (
        <Header />
      )}
      {children}
      <BottomNavigate />
    </>
  )
}