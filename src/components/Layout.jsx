import {TopNav} from './Nav/TopNav';

export const Layout = ({children}) => {
  return (
    <>
      <TopNav />
      {children}
    </>
  );
};
