export const SpinnerIcon = ({
  height = 18,
  width = 18,
  fill = "currentColor",
  stroke = "currentColor",
  className = "",
}) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        fill={fill}
        stroke={stroke}
        className={`${className} animate-spin`}
        viewBox="0 0 20 20"
      >
        <path d="M10 1v2a7 7 0 11-7 7H1a9 9 0 109-9z"></path>
      </svg>
    </>
  );
};

export const DocumentSearchIcon = ({ className = "", height = "24", width = "24" }) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        className={className}
        viewBox="256 256 128 128"
      >
        <g transform="translate(320 320)">
          <path fill="#FFF" d="M0 128V0h128v128z" transform="translate(-64 -64)"></path>

          <path
            fillRule="evenodd"
            d="M22.968 5A5.968 5.968 0 0017 10.968v106.099a5.968 5.968 0 005.968 5.968h68.964a5.968 5.968 0 005.968-5.968V77.121c2.275 2.866 6.56 6.861 11.052 2.37 3.714-3.714-.81-8.474-3.536-10.39L97.9 76.617v-3.925l5.526-5.359-5.526-5.526V10.968A5.968 5.968 0 0091.932 5H22.968zm71.838 5.968a2.873 2.873 0 00-2.874-2.873H22.968a2.874 2.874 0 00-2.873 2.873v106.099a2.873 2.873 0 002.873 2.873h68.964a2.873 2.873 0 002.874-2.873V73.135L80.81 59.723a24.16 24.16 0 01-11.645 2.968c-13.306 0-24.093-10.688-24.093-23.872s10.787-23.872 24.093-23.872 24.093 10.688 24.093 23.872c0 5.171-1.659 9.958-4.479 13.867l6.027 6.026V10.968zM29.378 25.336a1.326 1.326 0 100 2.652h13.705a1.326 1.326 0 100-2.652H29.378zM27.831 37.05c0-.733.594-1.327 1.326-1.327H40.21a1.326 1.326 0 110 2.653H29.157a1.326 1.326 0 01-1.326-1.326zm1.326 8.4a1.326 1.326 0 100 2.652h12.378a1.326 1.326 0 000-2.653H29.157zm-1.326 11.493c0-.732.594-1.326 1.326-1.326h17.241a1.326 1.326 0 110 2.652h-17.24a1.326 1.326 0 01-1.327-1.326zm1.326 10.61a1.326 1.326 0 100 2.653h53.934a1.326 1.326 0 000-2.653H29.157zM27.831 79.49c0-.732.594-1.326 1.326-1.326h53.934a1.326 1.326 0 110 2.652H29.157a1.326 1.326 0 01-1.326-1.326zm1.326 9.726a1.326 1.326 0 100 2.652h53.934a1.326 1.326 0 000-2.652H29.157zm-1.326 12.378c0-.732.594-1.326 1.326-1.326h53.934a1.326 1.326 0 010 2.652H29.157a1.326 1.326 0 01-1.326-1.326zm41.334-41.113c12.105 0 21.883-9.718 21.883-21.662 0-11.944-9.778-21.662-21.883-21.662-12.105 0-21.883 9.718-21.883 21.662 0 11.944 9.778 21.662 21.883 21.662zm8.078-27.41h5.305v1.77h-3.36v3.27h2.67v1.769h-2.67v3.802h3.36v1.768h-5.305V33.072zm-6.19 11.76c.483.53 1.196.796 2.14.796.954 0 1.68-.271 2.175-.814.506-.542.76-1.32.76-2.334 0-.778-.153-1.456-.46-2.033-.306-.578-.866-1.22-1.68-1.928-.636-.554-1.078-1.025-1.326-1.414a2.38 2.38 0 01-.354-1.256c0-.79.324-1.185.973-1.185.318 0 .56.1.725.301.165.189.248.495.248.92v.636h1.838v-.513c0-1.002-.241-1.768-.724-2.298-.472-.543-1.173-.814-2.105-.814-.943 0-1.662.271-2.157.813-.495.531-.743 1.285-.743 2.264 0 .72.16 1.367.478 1.945.318.566.878 1.203 1.68 1.91.636.554 1.072 1.031 1.308 1.432.236.39.354.843.354 1.362 0 .436-.089.754-.266.955-.165.188-.412.283-.742.283-.672 0-1.008-.401-1.008-1.203v-.849h-1.84v.708c0 1.002.243 1.774.726 2.316zm-5.932-11.76h2.635l2.016 12.38h-1.945l-.354-2.459v.036h-2.21l-.354 2.422h-1.804l2.016-12.378zm2.122 8.277l-.866-6.119h-.036l-.848 6.119h1.75zM57.45 44.83c.495.53 1.208.796 2.14.796.931 0 1.638-.265 2.122-.796.495-.53.742-1.279.742-2.245v-1.751h-1.839v1.892c0 .754-.324 1.132-.972 1.132-.649 0-.973-.378-.973-1.132v-6.914c0-.766.324-1.15.973-1.15.648 0 .972.384.972 1.15v1.432h1.84v-1.308c0-.967-.248-1.716-.743-2.246-.484-.53-1.19-.796-2.122-.796-.932 0-1.645.265-2.14.796-.483.53-.725 1.279-.725 2.246v6.649c0 .966.242 1.715.725 2.245z"
            transform="translate(-.322 .018) translate(-63.678 -64.017)"
          ></path>
        </g>

        <path
          fill="#FFF"
          stroke="#C4AE9A"
          strokeWidth="0"
          d="M0-15.625c8.625 0 15.625 7 15.625 15.625S8.625 15.625 0 15.625-15.625 8.625-15.625 0s7-15.625 15.625-15.625z"
          transform="translate(325.71 294.26)"
        ></path>
      </svg>
    </>
  );
};

export const ReloadIcon = ({
  height = 16,
  width = 16,
  fill = "currentColor",
  stroke = "currentColor",
  className = "",
}) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        stroke={stroke}
        className={className}
        viewBox="0 0 32 32"
      >
        <g>
          <g fill="none" fillRule="evenodd" strokeWidth="0">
            <g fill={fill} transform="translate(-154 -1141)">
              <path d="M184.858 1143.56c.539-.54 1.151-1.01 1.151-1.56s-.447-1-1-1h-10c-.121 0-1 0-1 1v10c0 .55.448 1 1 1 .553 0 .938-.53 1.364-.95l2.779-2.78A11.916 11.916 0 01182 1157c0 6.63-5.373 12-12 12s-12-5.37-12-12c0-5.94 4.327-10.87 10-11.82v-4.04c-7.891.98-14 7.7-14 15.86 0 8.84 7.164 16 16 16s16-7.16 16-16c0-4.06-1.516-7.75-4.007-10.57l2.865-2.87"></path>
            </g>
          </g>
        </g>
      </svg>
    </>
  );
};

export const CloseIcon = ({
  className = "",
  stroke = "currentColor",
  height = "10",
  width = "10",
}) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        className={className}
        fill="none"
        viewBox="0 0 10 11"
      >
        <path
          stroke={stroke}
          strokeLinecap="round"
          strokeWidth="2.5"
          d="M.885 9.9l8.067-8.067M.885 9.9l8.067-8.067M.885 9.9l8.067-8.067M.933 1.688L9 9.755M.933 1.688L9 9.755M.933 1.688L9 9.755"
        ></path>
      </svg>
    </>
  );
};

export const PlusIcon = ({
  height = 18,
  width = 18,
  fill = "currentColor",
  className = "",
}) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        className={className}
        viewBox="0 -0.5 9 9"
      >
        <g>
          <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
            <g fill={fill} transform="translate(-345 -206)">
              <g transform="translate(56 160)">
                <path d="M298 49L298 51 294.625 51 294.625 54 292.375 54 292.375 51 289 51 289 49 292.375 49 292.375 46 294.625 46 294.625 49z"></path>
              </g>
            </g>
          </g>
        </g>
      </svg>
    </>
  );
};

export const WarningIcon = ({
  className = "",
  fill = "currentColor",
  height = 18,
  width = 18,
}) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        className={className}
        viewBox="0 0 512 512"
      >
        <g>
          <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
            <g fill={fill} transform="translate(32 42.667)">
              <path d="M246.313 5.629a42.667 42.667 0 0115.876 15.876l182.478 319.336c11.691 20.46 4.583 46.523-15.876 58.214a42.667 42.667 0 01-21.169 5.622H42.667C19.103 404.677 0 385.574 0 362.01a42.667 42.667 0 015.622-21.169L188.099 21.505C199.79 1.046 225.854-6.062 246.313 5.63zM224 272c-15.238 0-26.667 11.264-26.667 26.283 0 15.701 11.083 26.965 26.667 26.965 15.238 0 26.667-11.264 26.667-26.624S239.238 272 224 272zm21.333-165.333h-42.666v128h42.666v-128z"></path>
            </g>
          </g>
        </g>
      </svg>
    </>
  );
};

export const CheckMarkIcon = ({
  className = "",
  height = "18",
  width = "18",
  stroke = "currentColor",
}) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        fill="none"
        className={className}
        aria-hidden="true"
        viewBox="0 0 16 12"
      >
        <path
          stroke={stroke}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M1 5.917L5.724 10.5 15 1.5"
        ></path>
      </svg>
    </>
  );
};

export const InfoIcon = ({ height = 16, width = 16, className = "" }) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        fill="currentColor"
        className={className}
        aria-hidden="true"
        viewBox="0 0 64 64"
      >
        <path d="M32 2C15.432 2 2 15.432 2 32s13.432 30 30 30 30-13.432 30-30S48.568 2 32 2m5 49.75H27v-24h10v24m-5-29.5a5 5 0 110-10 5 5 0 010 10"></path>
      </svg>
    </>
  );
};

export const DeleteIcon = ({
  height = 16,
  width = 16,
  fill = "currentColor",
  className = "",
}) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        fill={fill}
        className={className}
        viewBox="0 0 24 24"
      >
        <g>
          <g data-name="delete">
            <path d="M23 2h-6V0H7v2H1a1 1 0 00-1 1v2a1 1 0 001 1h22a1 1 0 001-1V3a1 1 0 00-1-1zM18.28 24H5.82a2 2 0 01-2-1.75L2 8h20l-1.73 14.25A2 2 0 0118.28 24z"></path>
          </g>
        </g>
      </svg>
    </>
  );
};
