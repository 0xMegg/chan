import { useRouter } from "next/router";
import Navbar from "./NavBar";
import Seo from "./Seo";

export default function Layout({ children }) {
  const { pathname } = useRouter();

  const getTitle = (pathname) => {
    if (pathname === "/") {
      return "Home";
    }
    return pathname.split("/")[1];
  };
  return (
    <>
      <Seo title={getTitle(pathname)} />
      <Navbar />
      <div>{children}</div>
    </>
  );
}
