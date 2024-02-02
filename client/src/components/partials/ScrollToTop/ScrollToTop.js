// import React, { useEffect, Fragment } from 'react';
// import { withRouter } from 'react-router-dom';

// function ScrollToTop({ navigate, children }) {
//   useEffect(() => {
//     const unlisten = navigate.listen(() => {
//       window.scrollTo(0, 0);
//     });
//     return () => {
//       unlisten();
//     }
//   }, []);

//   return <Fragment>{children}</Fragment>;
// }

// export default withRouter(ScrollToTop);

// import React, { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

// function ScrollToTop({navigate1, children }) {
//   const navigate = useNavigate();

//   useEffect(() => {
//     const unlisten = navigate1.listen(() => {
//       window.scrollTo(0, 0);
//     });
//     return () => {
//       unlisten();
//     };
//   }, [navigate]);

//   return <>{children}</>;
// }

// export default ScrollToTop;
// 

import React, { useEffect, Fragment } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop({ children }) {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <Fragment>{children}</Fragment>;
}

export default ScrollToTop;

