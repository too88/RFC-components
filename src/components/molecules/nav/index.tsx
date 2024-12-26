import { NavLink } from "react-router-dom";
import classNames from "classnames";

import {
  HOME_NAME,
  ABOUT_US_NAME,
  OUR_TEAM_NAME,
  MARKETPLACE_NAME,
  ROADMAP_NAME,
  WHITE_PAPER_NAME,
} from "~/libs/constants.ts";
import { pageOf } from "~/libs/pages.ts";
import navigationStyle from "./index.module.scss";

const navigationList = [
  { name: HOME_NAME, path: pageOf("H-001-01").href },
  { name: ABOUT_US_NAME, path: pageOf("AU-001-01").href },
  { name: OUR_TEAM_NAME, path: pageOf("OT-001-01").href },
  { name: MARKETPLACE_NAME, path: pageOf("MP-001-02").href },
  { name: ROADMAP_NAME, path: pageOf("RM-001-01").href },
  { name: WHITE_PAPER_NAME, path: pageOf("WP-001-01").href },
];

type NavigationListProps = {
  onClick?: () => void;
};

const NavigationList: React.FC<NavigationListProps> = ({ onClick }) => (
  <nav className={navigationStyle.navigation}>
    {navigationList.map(({ path, name }) => (
      <NavLink
        className={({ isActive }) =>
          classNames(navigationStyle["navigation-item"], {
            [navigationStyle.focus]: isActive,
          })
        }
        key={path}
        to={path}
        onClick={onClick}
      >
        {name}
      </NavLink>
    ))}
  </nav>
);

export default NavigationList;
