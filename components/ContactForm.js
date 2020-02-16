import { useForm } from "react-hook-form";

export default function ContactForm() {
  const {register, handleSubmit, reset} = useForm();

  const onSubmit = (data) => {
    
    
    
    console.log(data)
  
  }


  return (
    <div>
      <form action="/api/email" onSubmit={handleSubmit(onSubmit)}>
        <label >Name:</label>
        <input name="name" ref={register} type="text" id="name" required/>

        <label htmlFor="email">Email:</label>
        <input name="email" ref={register} type="email" id="email" required />

        <label htmlFor="subject">Subject:</label>
        <input name="subject" ref={register} type="text" id="subject" />

        <label htmlFor="text">Text:</label>
        <textarea name="text" ref={register} id="text" required name="text" />

        <button type="submit" className="work-btn" onClick={reset}>
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
            transition: 0.3s cubic-bezier(0.66, 0.21, 0.27, 0.73);
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
            transition: 0.3s cubic-bezier(0.66, 0.21, 0.27, 0.73);
          }

          textarea:focus {
            height: 8em;
          }

          input:focus,
          textarea:focus {
            background: #cbd5e0;
            outline: none;
          }
        `}
      </style>
    </div>
  );
}
