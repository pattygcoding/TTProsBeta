import React from "react";
import { Route, Routes} from "react-router-dom";
import withRouter from "../hooks/withRouter"
import { Home } from "../pages/home";
import { RequestPackage } from "../pages/request-package";
import { About } from "../pages/about";
import { Gallery } from "../pages/gallery";
import { SocialIcons } from "../components/social-icons";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const AnimatedRoutes = withRouter(({ location }) => (
  <TransitionGroup>
    <CSSTransition
      key={location.key}
      timeout={{
        enter: 400,
        exit: 400,
      }}
      classNames="page"
      unmountOnExit
    >
      <Routes location={location}>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/request-package" element={<RequestPackage />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </CSSTransition>
  </TransitionGroup>
));

function AppRoutes() {
  return (
    <div className="s_c">
      <AnimatedRoutes />
      <SocialIcons />
    </div>
  );
}

export default AppRoutes;
