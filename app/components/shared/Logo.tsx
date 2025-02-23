import React from "react";

interface SvgProps {
  textColor?: string;
  width?: number;
  className?: string;
}

const Logo = (props: any) => (
  <svg
    viewBox="0 0 9800 2400"
    xmlSpace="preserve"
    style={{
      fillRule: "evenodd",
      clipRule: "evenodd",
      strokeLinejoin: "round",
      strokeMiterlimit: 2,
    }}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M911.654 1561.15C801.065 933.976 633.838 818.196.002 929.957 633.838 818.196 751.381 652.2 640.792 25.02 751.381 652.2 918.608 767.983 1552.44 656.222 918.608 767.983 801.065 933.976 911.654 1561.15Z"
      fill="currentColor"
      style={{
        fillRule: "nonzero",
      }}
    />
    <path
      fill="currentColor"
      style={{
        fillRule: "evenodd",
        clipRule: "evenodd",
        strokeLinejoin: "round",
        strokeMiterlimit: 2,
        fontSize: 200,
        fontFamily: "TAN-MERINGUE,'TAN - MERINGUE'",
      }}
      d="M73.6-202c-11.467 0-21.267 1-29.4 3-8 1.867-14.6 4.333-19.8 7.4-5.067 3.067-9.067 6.4-12 10-2.8 3.467-4.8 6.933-6 10.4-1.067 3.333-1.6 6.2-1.6 8.6 0 7.333 1.6 13.4 4.8 18.2 3.333 4.667 7.733 8.467 13.2 11.4 5.467 2.8 11.533 5.133 18.2 7 6.8 1.733 13.733 3.467 20.8 5.2a923.885 923.885 0 0 0 17.6 4.2c6.4 1.467 12.467 3.133 18.2 5 5.733 1.733 10.467 3.8 14.2 6.2 3.733 2.267 5.6 4.867 5.6 7.8 0 2.267-.933 3.933-2.8 5-1.733.933-3.733 1.4-6 1.4-4.667 0-9.2-.667-13.6-2a246.891 246.891 0 0 1-13.6-5c-4.667-1.867-9.733-3.467-15.2-4.8-5.333-1.467-11.333-2.2-18-2.2-9.067 0-17.267 1.4-24.6 4.2-7.2 2.8-12.933 7-17.2 12.6C2.133-82.8 0-75.733 0-67.2c0 12.8 2.533 23.6 7.6 32.4 5.067 8.8 11.933 15.933 20.6 21.4 8.667 5.333 18.533 9.267 29.6 11.8C69 .8 80.6 2 92.6 2c6.8 0 12.867-.533 18.2-1.6C116.267-.667 121.667-2.467 127-5l12-34.8c-6.8 5.733-14.267 9.333-22.4 10.8-8.133 1.333-16.4 2-24.8 2-11.2 0-22.067-.6-32.6-1.8-10.533-1.333-20-3.467-28.4-6.4C22.533-38.133 15.933-42.067 11-47c-4.933-5.067-7.4-11.267-7.4-18.6 0-5.2 2.067-9.267 6.2-12.2s10.667-4.4 19.6-4.4c6.533 0 12.8 1 18.8 3A179.04 179.04 0 0 1 66-72.6c6 2.4 12.2 4.533 18.6 6.4 6.533 1.733 13.467 2.467 20.8 2.2 4.667-.133 9-1.2 13-3.2 4.133-2.133 7.4-5 9.8-8.6 2.533-3.733 3.8-8.067 3.8-13 0-5.733-1.933-10.467-5.8-14.2-3.733-3.733-8.733-6.8-15-9.2-6.133-2.533-12.933-4.667-20.4-6.4a1080.251 1080.251 0 0 0-22.2-5.4c-7.467-1.867-14.333-4-20.6-6.4-6.133-2.4-11.133-5.333-15-8.8-3.733-3.6-5.6-8.133-5.6-13.6 0-7.067 3.267-12.333 9.8-15.8 6.667-3.467 17.267-5.2 31.8-5.2 8.533 0 16.933.733 25.2 2.2 8.4 1.333 15.933 3.133 22.6 5.4 6.8 2.267 12.133 4.8 16 7.6l8.2-30c-3.067-2.533-7.333-4.6-12.8-6.2-5.333-1.733-11.267-3.133-17.8-4.2-6.533-1.067-13-1.8-19.4-2.2-6.4-.533-12.2-.8-17.4-.8z"
      transform="translate(1066.16 2382.09) scale(6.95526)"
    />
    <path
      d="M4-200h43.6q-1 4.4-1.6 14.4-.6 10-.8 24 0 13.8.4 29.6.6 15.8 1.8 32 1.4 16.2 3.4 31t4.8 26.4q3 11.6 6.8 18.4 4 6.8 9 6.8 3.4 0 5.4-1.6 2-1.6 3.4-5.8 6.4-20 11.6-37.2 5.4-17.4 10.2-33.4 5-16.2 9.8-32.4 4.8-16.4 10-34 5.4-17.8 11.6-38.2H164q-6.2 20.4-11.6 38.2-5.2 17.6-10.2 33.8l-10 32.4Q127.4-79.4 122-62q-5.2 17.2-11.2 37.2-2 6.8-5.6 13-3.4 6.2-8.6 10Q91.4 2 84 2q-7.2 0-12.6-3.8-5.2-3.8-8.6-10-3.4-6.2-5.6-13Q51-44.8 45.8-62q-5.2-17.4-10.2-33.6-4.8-16.2-9.8-32.4-4.8-16.2-10.2-33.8Q10.2-179.6 4-200Z"
      style={{
        fillRule: "evenodd",
        clipRule: "evenodd",
        strokeLinejoin: "round",
        strokeMiterlimit: 2,
        fontSize: 200,
        fontFamily: "TAN-MERINGUE,'TAN - MERINGUE'",
      }}
      fill="currentColor"
      transform="translate(2274.98 2382.09) scale(6.95526)"
      aria-label="V"
    />
    <path
      fill="currentColor"
      style={{
        fontSize: 200,
        fontFamily: "TAN-MERINGUE,'TAN - MERINGUE'",
      }}
      d="M73.6-202c-11.467 0-21.267 1-29.4 3-8 1.867-14.6 4.333-19.8 7.4-5.067 3.067-9.067 6.4-12 10-2.8 3.467-4.8 6.933-6 10.4-1.067 3.333-1.6 6.2-1.6 8.6 0 7.333 1.6 13.4 4.8 18.2 3.333 4.667 7.733 8.467 13.2 11.4 5.467 2.8 11.533 5.133 18.2 7 6.8 1.733 13.733 3.467 20.8 5.2a923.825 923.825 0 0 0 17.6 4.2c6.4 1.467 12.467 3.133 18.2 5 5.733 1.733 10.467 3.8 14.2 6.2 3.733 2.267 5.6 4.867 5.6 7.8 0 2.267-.933 3.933-2.8 5-1.733.933-3.733 1.4-6 1.4-4.667 0-9.2-.667-13.6-2a246.891 246.891 0 0 1-13.6-5c-4.667-1.867-9.733-3.467-15.2-4.8-5.333-1.467-11.333-2.2-18-2.2-9.067 0-17.267 1.4-24.6 4.2-7.2 2.8-12.933 7-17.2 12.6C2.133-82.8 0-75.733 0-67.2c0 12.8 2.533 23.6 7.6 32.4 5.067 8.8 11.933 15.933 20.6 21.4 8.667 5.333 18.533 9.267 29.6 11.8C69 .8 80.6 2 92.6 2c6.8 0 12.867-.533 18.2-1.6C116.267-.667 121.667-2.467 127-5l12-34.8c-6.8 5.733-14.267 9.333-22.4 10.8-8.133 1.333-16.4 2-24.8 2-11.2 0-22.067-.6-32.6-1.8-10.533-1.333-20-3.467-28.4-6.4C22.533-38.133 15.933-42.067 11-47c-4.933-5.067-7.4-11.267-7.4-18.6 0-5.2 2.067-9.267 6.2-12.2s10.667-4.4 19.6-4.4c6.533 0 12.8 1 18.8 3A179.04 179.04 0 0 1 66-72.6c6 2.4 12.2 4.533 18.6 6.4 6.533 1.733 13.467 2.467 20.8 2.2 4.667-.133 9-1.2 13-3.2 4.133-2.133 7.4-5 9.8-8.6 2.533-3.733 3.8-8.067 3.8-13 0-5.733-1.933-10.467-5.8-14.2-3.733-3.733-8.733-6.8-15-9.2-6.133-2.533-12.933-4.667-20.4-6.4a1080.251 1080.251 0 0 0-22.2-5.4c-7.467-1.867-14.333-4-20.6-6.4-6.133-2.4-11.133-5.333-15-8.8-3.733-3.6-5.6-8.133-5.6-13.6 0-7.067 3.267-12.333 9.8-15.8 6.667-3.467 17.267-5.2 31.8-5.2 8.533 0 16.933.733 25.2 2.2 8.4 1.333 15.933 3.133 22.6 5.4 6.8 2.267 12.133 4.8 16 7.6l8.2-30c-3.067-2.533-7.333-4.6-12.8-6.2-5.333-1.733-11.267-3.133-17.8-4.2-6.533-1.067-13-1.8-19.4-2.2-6.4-.533-12.2-.8-17.4-.8zm102.8 0c-1.333 0-2.933.2-4.8.6-1.733.267-3.133.733-4.2 1.4V0H209c-8.4-15.2-15.467-31.4-21.2-48.6-5.6-17.333-9.8-36.333-12.6-57-2.8-20.667-4.2-43.733-4.2-69.2l1-.2c.667-.133 1.6.2 2.8 1 1.333.8 3 2.533 5 5.2 2.133 2.533 4.6 6.467 7.4 11.8 2.933 5.6 7.333 14.4 13.2 26.4 5.867 11.867 13.6 26.933 23.2 45.2 6.133 11.733 12.333 22.867 18.6 33.4 6.4 10.4 12.8 19.667 19.2 27.8 6.533 8.133 12.933 14.533 19.2 19.2 6.4 4.667 12.667 7 18.8 7 1.467 0 3.067-.2 4.8-.6 1.733-.4 3.133-.867 4.2-1.4v-200h-41.6c8.533 15.2 15.6 31.4 21.2 48.6 5.6 17.2 9.8 36.067 12.6 56.6 2.8 20.4 4.2 43.067 4.2 68l-1.4.6c-.933.4-2.467.133-4.6-.8-2-.933-4.8-3.333-8.4-7.2-4.267-4.667-9.8-12.133-16.6-22.4C267-67 258.6-81.467 248.6-100c-7.467-13.867-13.867-26.267-19.2-37.2-5.2-11.067-9.867-20.667-14-28.8-4-8.133-7.867-14.867-11.6-20.2-3.6-5.333-7.6-9.267-12-11.8-4.267-2.667-9.4-4-15.4-4zm152 2v32.8c4.4-4.533 9.867-8.933 16.4-13.2a126.914 126.914 0 0 1 20.4-11.2c7.067-3.067 13.6-4.8 19.6-5.2V0h29v-196.8c6 .4 12.533 2.133 19.6 5.2a126.916 126.916 0 0 1 20.4 11.2c6.533 4.267 12 8.667 16.4 13.2V-200H328.4zm161.8 0V0h29v-99.8H544c11.866 0 21.866 1.533 30 4.6 8.266 2.933 13.8 7.533 16.6 13.8v-39.8c-2.8 6.267-8.334 10.933-16.6 14-8.134 2.933-18.134 4.4-30 4.4h-24.8V-197h15.4c15.333 0 28.333 1.533 39 4.6 10.8 2.933 19.733 6.667 26.8 11.2 7.2 4.533 13.067 9.2 17.6 14V-200H490.2zm145.8 0v156c0 8.133 1.8 15.733 5.4 22.8 3.733 6.933 9.2 12.533 16.4 16.8C665.133-.133 674.067 2 684.6 2c10.667 0 20.333-1.867 29-5.6 8.666-3.867 16.4-9 23.2-15.4 6.933-6.533 12.933-13.933 18-22.2a149.88 149.88 0 0 0 12.6-26.4c3.333-9.2 5.8-18.333 7.4-27.4 1.6-9.2 2.4-17.8 2.4-25.8V-200h-29l.2 155.8c0 5.067-1.534 9-4.6 11.8-3.067 2.667-7.2 4.6-12.4 5.8-5.2 1.2-11 1.933-17.4 2.2-6.4.267-12.934.4-19.6.4-12 0-22.067-.867-30.2-2.6-8.134-1.867-14.267-5-18.4-9.4-4.134-4.533-6.2-10.8-6.2-18.8 0-4.667.533-11.133 1.6-19.4 1.2-8.267 2.867-17.6 5-28 2.133-10.533 4.733-21.467 7.8-32.8a472.66 472.66 0 0 1 10.4-33.8c4-11.2 8.4-21.6 13.2-31.2H636zm167.2 0V0h120v-32.8c-3.333 3.467-8.334 7-15 10.6-6.534 3.467-14.067 6.667-22.6 9.6-8.4 2.8-17.2 5.133-26.4 7C850-3.867 841-3 832.2-3v-197h-29z"
      transform="translate(3373.92 2382.09) scale(6.95526)"
    />
  </svg>
);
export default Logo;
