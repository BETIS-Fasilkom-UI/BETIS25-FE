export function BigBlurredStarIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="196"
      height="197"
      viewBox="0 0 196 197"
      fill="none"
    >
      <g filter="url(#filter0_f_2128_9632)">
        <path
          d="M122.253 39.8503L115.763 84.6378L156.352 104.651L111.751 112.318L105.261 157.105L84.1861 117.057L39.585 124.724L71.1614 92.3049L50.087 52.256L90.6767 72.269L122.253 39.8503Z"
          fill="#FCFFCC"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_2128_9632"
          x="0.654556"
          y="0.919205"
          width="194.628"
          height="195.117"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="19.4652"
            result="effect1_foregroundBlur_2128_9632"
          />
        </filter>
      </defs>
    </svg>
  );
}

export function SmallBlurredStarIcon({
  className = "",
}: {
  className?: string;
}) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="75"
      height="64"
      viewBox="0 0 75 64"
      fill="none"
    >
      <g filter="url(#filter0_f_2202_3700)">
        <path
          d="M46.6171 15.6602L44.1432 28.1152L59.6141 33.6806L42.6142 35.8128L40.1403 48.2678L32.1077 37.1306L15.1078 39.2627L27.1433 30.2474L19.1107 19.1101L34.5817 24.6756L46.6171 15.6602Z"
          fill="#FCFFCC"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_2202_3700"
          x="0.268951"
          y="0.821686"
          width="74.1838"
          height="62.2844"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="7.41924"
            result="effect1_foregroundBlur_2202_3700"
          />
        </filter>
      </defs>
    </svg>
  );
}
