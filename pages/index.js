import Layout from "../layouts/main";

const Index = () => {
  return (
    <Layout>
      <div className="main">
        <section className="title">
          <h1>Brandon Cox</h1>
          <nav>
            <a target="_blank" href="https://github.com/bc0x">
              GITHUB
            </a>
            <a target="_blank" href="https://twitter.com/bcox_dev">
              TWITTER
            </a>
            <a href="mailto:brandon.cox@pm.me">EMAIL</a>
          </nav>
        </section>
      </div>
      <style jsx>{`
        h1 {
          font-size: 3rem;
        }
        nav {
          margin-top: 20px;
        }
        a {
          display: inline-block;
          margin: 0 15px;
          text-decoration: none;
        }
        .main {
          flex: 1;
          display: flex;
          justify-content: space-evenly;
          align-items: center;
        }
      `}</style>
    </Layout>
  );
};

export default Index;