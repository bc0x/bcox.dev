import Link from "next/link";
import Head from "next/head";

const Layout = ({ children }) => {
  return (
    <div className="container">
      <Head>
        <title>Brandon Cox</title>
        <link
          href="https://fonts.googleapis.com/css?family=IBM+Plex+Mono|IBM+Plex+Sans+Condensed&display=swap"
          rel="stylesheet"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <header className="logo">
        <Link prefetch href="/">
          <a>bcox.dev</a>
        </Link>
      </header>
      {children}
      <footer>
        ({" "}
        <a target="_blank" href="https://github.com/bc0x/bcox.dev">
          SRC
        </a>{" "}
        )
      </footer>
      <style jsx global>{`
        * {
          margin: 0;
        }
        #__next {
          height: 100%;
        }
        body {
          background-color: #e3d9ca;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 800 800'%3E%3Cg fill='none' stroke='%2395a792' stroke-width='2.6'%3E%3Cpath d='M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63'/%3E%3Cpath d='M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764'/%3E%3Cpath d='M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880'/%3E%3Cpath d='M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382'/%3E%3Cpath d='M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-261 269'/%3E%3C/g%3E%3Cg fill='%23596c68'%3E%3Ccircle cx='769' cy='229' r='8'/%3E%3Ccircle cx='539' cy='269' r='8'/%3E%3Ccircle cx='603' cy='493' r='8'/%3E%3Ccircle cx='731' cy='737' r='8'/%3E%3Ccircle cx='520' cy='660' r='8'/%3E%3Ccircle cx='309' cy='538' r='8'/%3E%3Ccircle cx='295' cy='764' r='8'/%3E%3Ccircle cx='40' cy='599' r='8'/%3E%3Ccircle cx='102' cy='382' r='8'/%3E%3Ccircle cx='127' cy='80' r='8'/%3E%3Ccircle cx='370' cy='105' r='8'/%3E%3Ccircle cx='578' cy='42' r='8'/%3E%3Ccircle cx='237' cy='261' r='8'/%3E%3Ccircle cx='390' cy='382' r='8'/%3E%3C/g%3E%3C/svg%3E");
          font-family: "IBM Plex Sans Condensed", sans-serif;
          color: #403f48;
          height: 100vh;
        }
        code {
          font-family: "IBM Plex Mono", monospace;
        }
        a {
          color: #403f48;
          text-decoration: none;
        }
        a:hover {
          color: #fff;
          background: #537791;
          text-decoration: none;
          -moz-border-radius-topleft: 3px;
          -moz-border-radius-topright: 3px;
          -moz-border-radius-bottomright: 3px;
          -moz-border-radius-bottomleft: 3px;
          -webkit-border-radius: 3px 3px 3px 3px;
          border-radius: 3px 3px 3px 3px;
        }
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
