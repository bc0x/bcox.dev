import Link from "next/link";
import Meta from "../components/Meta";

const Layout = ({ children }) => {
  return (
    <div className="container">
      <Meta />
      <header className="logo">
        <Link prefetch href="/">
          <a>bcox.dev</a>
        </Link>
      </header>
      {children}
      <footer>
        ({" "}
        <a target="_blank" href="https://twitter.com/bcox_dev">
          SRC
        </a>{" "}
        )
      </footer>
      <style jsx>{`
        .container {
          height: 100%;
          display: flex;
          flex-direction: column;
        }
        .logo {
          font-size: 1.3rem;
        }
        header,
        footer {
          flex: 0;
          padding: 25px 50px;
        }
        footer {
          display: flex;
          justify-content: flex-end;
        }
      `}</style>
    </div>
  );
};

export default Layout;
