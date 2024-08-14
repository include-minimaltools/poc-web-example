import { FC, PropsWithChildren } from "react";

const Title: FC<PropsWithChildren> = ({ children }) => {
  return <h1 className='text-3xl font-bold text-green-600'>{children}</h1>;
};

export default Title;
