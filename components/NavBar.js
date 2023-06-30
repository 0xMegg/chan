import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();
  console.log(router);
  return (
    <nav>
      <Link href="/">
        <span>Home</span>
      </Link>
      <Link href="/about">
        <span>About</span>
      </Link>
      <style jsx>{`
        /* nav {
          background-color: tomato;
        } */
        span {
          text-decoration: none;
          background-color: tomato;
        }
      `}</style>
    </nav>
  );
}
