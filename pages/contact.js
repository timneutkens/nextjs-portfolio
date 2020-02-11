import Layout from "../components/Layout";
import Trail from "../components/animations/TrailAnimation";

function Contact() {

  return (
    <Layout>
      <h1>
        <Trail str="Let's get in contact!" />
      </h1>
      <form action="/contact" method="POST">
        <label>Name:</label>
        <input type="text" id="name" required/>

        <label>Email:</label>
        <input type="email" id="email" required/>

        <label>Subject:</label>
        <input type="text" id="subject" />

        <label>Text:</label>
        <textarea id="text" required/>

        <button type="submit" className="work-btn">
          Send
        </button>
      </form>
      <style jsx>
        {`
          form {
            display: grid;
            grid-gap: 1em;
            margin: 0 auto;
            max-width: 90%;
            justify-content: center;
            flex-direction: column;
          }

          label {
            justify-self: start;
            font-size: 1.2em;
            font-weight: bolder;
            color: #718096;
          }

          input {
            border: none;
            background: #e2e8f0;
            justify-self: end;
            width: 50vw;
            color: #4a5568;
            font-size: 1em;
            font-weight: bolder;
            height: 2em;
            padding: 0.5em;
            transition: 0.3s cubic-bezier(.66,.21,.27,.73);
          }

          button {
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

          textarea {
            border: none;
            background: #e2e8f0;
            height: 5em;
            font-size: 1em;
            transition: 0.3s cubic-bezier(.66,.21,.27,.73);
            
          }

          textarea:focus{
            height: 8em;
          }

          input:focus, textarea:focus {
            background: #CBD5E0;
            outline: none;
          }
        `}
      </style>
    </Layout>
  );
}

export default Contact;
