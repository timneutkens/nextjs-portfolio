import Layout from "../../components/Layout";
import Trail from "../../components/animations/TrailAnimation";
import {content} from '../../content'

export async function unstable_getStaticPaths() {
  return {
    paths: Object.keys(content).map(slug => {
      return {
        params: {
          id: slug
        }
      }
    })
  }
}

export async function unstable_getStaticProps({params}) {
  return {
    props: {
      project: content[params.id]
    }
  }
}
 
export default function Project({ project }) {
  console.log(project)
  return (
    <Layout>
      <h1>
        <Trail str={project.title} />
      </h1>

      <p>{project.content}</p>
      
      <a href={project.repository} target="_blank">View Code</a>
      <a href={project.demo} target="_blank">View Project</a>
      <style jsx>{`
        p {
          color: #777;
          text-align: center;
          max-width: 800px;
          margin: 0 auto 100px;
          padding: 20px;
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

        a:first-of-type {
          margin-right: 0.5em;
        }

        a:last-of-type {
          margin-left: 0.5em;
        }
      `}</style>
    </Layout>
  );
}
