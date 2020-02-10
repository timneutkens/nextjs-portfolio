import Layout from "../components/Layout";
import Project from "../components/Project";
import Link from "next/link";
import Trail from "../components/animations/TrailAnimation";

function Work() {
  const PostLink = props => (
    <ul>
      <li>
        <Link href="/p/[id]" as={`/p/${props.id}`}>
          <a>{props.id}</a>
        </Link>
      </li>
      <style jsx>
        {`
          ul {
            list-style-type: none;
          }
          a {
            text-decoration: none;
            width: max-content;
            justify-self: center;
            background: #777;
            padding: 1vmax 2vmax;
            color: #f7fafc;
            font-size: 1.2em;
            font-weight: 600;
            border: none;
            cursor: pointer;
          }
        `}
      </style>
    </ul>
  );

  return (
    <Layout>
      <h1>
        <Trail str="Check out my work." />
      </h1>
      <div className="projects">
        <div className="project-list">
          <Project>
            {/* <h2>Flight App</h2> */}
            <PostLink id="Flight App" />
          </Project>

          <Project>
            {/* <h2>Bible App</h2> */}
            <PostLink id="Bible App" />
          </Project>

          <Project>
            {/* <h2>Chat App</h2> */}
            <PostLink id="Chat App" />
          </Project>

          <Project>
            {/* <h2>Weather App</h2> */}
            <PostLink id="Weather App" />
          </Project>
        </div>
      </div>
      <style jsx>{`
        .projects {
          max-width: 1000px;
          margin: 0 auto;
        }

        .project-list {
          padding: 0 30px;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
        }
      `}</style>
    </Layout>
  );
}

export default Work;
