import Menu from "./Menu";
import Logo from "./Logo";

export default function Header() {
  return (
    <header>
      <Logo />
      <Menu />

      <style jsx>
        {`
          header{
            display: flex;
            padding: 30px;
            justify-content: space-between;
            align-items: center;
          } 

          @media(max-width: 600px){
            header {
              display: block;
              text-align: center;
            }
          }
          `}
      </style>
    </header>
  );
}
