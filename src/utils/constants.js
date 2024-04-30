import { API_AUTHORIZATION } from "./ApiAccessDetails.js";

export const LOGO =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const USER_AVATAR =
  "https://th.bing.com/th/id/OIP.cxcqa9RvhGnRd8x3N2oBdgAAAA?w=189&h=194&c=7&r=0&o=5&dpr=1.5&pid=1.7";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: API_AUTHORIZATION,
  },
};

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w300"

export const BG_URL = "https://assets.nflxext.com/ffe/siteui/vlv3/9f46b569-aff7-4975-9b8e-3212e4637f16/453ba2a1-6138-4e3c-9a06-b66f9a2832e4/IN-en-20240415-popsignuptwoweeks-perspective_alpha_website_small.jpg"
;
export const SUPPORTED_LANGUAGES = [
  {identifier: "en", name : "English"},
  {identifier: "hindi", name : "Hindi"},
  {identifier: "Spanish", name : "Spanish"},
  {identifier: "Korean", name : "Korean"},
  {identifier: "German", name : "German"},
  {identifier:  "Arabic", name :  "Arabic"},
  {identifier: "Russian", name : "Russian"},
];