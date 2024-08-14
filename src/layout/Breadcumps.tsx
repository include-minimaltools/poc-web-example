import { Link } from "react-router-dom";
import { useBreadcumps } from "../hooks";

const Breadcumps = () => {
  const { items } = useBreadcumps();

  if (!items.length) return null;

  return (
    <div className='breadcrumbs text-sm'>
      <ul>
        {items.map(({ to, title }) =>
          to ? (
            <li>
              <Link to={to}>{title}</Link>
            </li>
          ) : (
            <li>{title}</li>
          )
        )}
      </ul>
    </div>
  );
};

export default Breadcumps;
