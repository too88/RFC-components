/**
 * API Root
 */
export const BASE_API = "https://db-mock.onrender.com";

/**
 * Client paths
 */
export const PATH = {
    "MP-001-01": "marketplace",
    "H-001-01": "/home",
    "AU-001-01": "/about-us",
    "OT-001-01": "/our-team",
    "MP-001-02": "/marketplace",
    "RM-001-01": "/road-map",
    "WP-001-01": "/white-paper",
    "PL-001": "/products",
} as const;

/**
 * Pagination
 */
export const PAGE = 1;
export const LIMIT = 20;
export const PAGINATION_PLUS_1 = 1;

/**
 * Auto refresh data
 */
export const AUTO_REFRESH_AFTER_ONE_MINUTE = 60000;

/**
 * Get linear gradient
 */
export const ONLINE_GRADIENT = ["#49dd81", "#22b4c6"];
export const OFFLINE_GRADIENT = ["#fe5a5a", "#f163d2"];
export const BUSY_GRADIENT = ["#d0c0c0", "#604040"];
export const IDLE_GRADIENT = ["#dd69dc", "#fcb045"];

/**
 * Navigation menu
 */
export const HOME_NAME = "Home";
export const ABOUT_US_NAME = "About Us";
export const OUR_TEAM_NAME = "Our Team";
export const MARKETPLACE_NAME = "MarketPlace";
export const ROADMAP_NAME = "Roadmap";
export const WHITE_PAPER_NAME = "WhitePaper";

export const PRICE_RANGE = [0, 200]