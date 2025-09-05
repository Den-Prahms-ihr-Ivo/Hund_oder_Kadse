import { Link } from "react-router-dom";

interface Props {
  children: React.ReactNode;
  to: string;
}

function LinkWrapper({ to, children }: Props) {
  return (
    <Link to={to} style={{ color: "inherit", textDecoration: "inherit" }}>
      {children}
    </Link>
  );
}

export default LinkWrapper;
