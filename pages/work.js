import Layout from "../components/Layout";
import Project from "../components/Project";
import Link from "next/link";
import Trail from "../components/animations/TrailAnimation";
import {projectsList, content} from '../content'

export async function unstable_getStaticProps() {
  const projectLinks = projectsList.map((slug) => {
    const {title} = content[slug]
    return {
      title,
      slug
    }
  })
  return {
    props: {
      projectLinks
    }
  }
}

const PostLink = ({ title, slug }) => (
  <li>
    <Link href="/p/[id]" as={`/p/${slug}`}>
      <a>{title}</a>
    </Link>

  <style jsx>
    {`
      
      a {
        text-decoration: none;
        width: 100%;
        justify-self: center;
        background: #777;
        padding: 1vmax 2vmax;
        color: #f7fafc;
        font-size: 1.2em;
        font-weight: 600;
        border: none;
        cursor: pointer;
      }

      li:first-of-type, li:nth-of-type(2){

        margin-right: 1em;
      }

      li:nth-of-type(3), li:last-of-type{
        margin-left: 1em;
      }

      @media only screen and (max-width: 890px){
        li:first-of-type, li:nth-of-type(2),  
         li:nth-of-type(3), li:last-of-type{
           margin: 1em 0;
         }

      }
    `}
  </style>
</li>
);

function Work({projectLinks}) {
  return (
    <Layout>
      <h1>
        <Trail str="Check out my work." />
      </h1>
      <div className="projects">
        <div className="project-list">
          <ul>

          {projectLinks.map(({title, slug}) => {
            return <Project>
              <PostLink title={title} slug={slug} />
            </Project>
          })}
          </ul>
        </div>
      </div>
      <style jsx>{`
        .projects {
          max-width: 1000px;
          margin: 0 auto;
        }

        ul {
          list-style-type: none;
          display:flex;
          flex-wrap: wrap;
          justify-content: center;
          padding-inline-start: 0px;
        }

        @media only screen and (max-width: 890px){
          ul{
            flex-direction: column;
          }
        }
        .project-list {
          padding: 0 30px;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
        }
      `}</style>
    </Layout>
  );
}

export default Work;
