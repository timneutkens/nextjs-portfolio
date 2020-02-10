export default function Footer() {
  return (
    <footer>
      <small className="copyright">
        {new Date().getFullYear()} Brian Bawuah.
      </small>
      <style jsx>{`
        footer {
            text-align: center;
            margin-top: 80px;
            padding: 80px 30px;
        }

        .copyright{
            margin-bottom: 20px;
        }
      `}</style>
    </footer>
  );
}
