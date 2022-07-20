export const MenuIcon = ({ click, ...props }) => {
  return (
    <svg
      {...props}
      onClick={click}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="img"
      width="min(14vw, 1.6rem)"
      height="1.5em"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 24 24"
    >
      <path fill="#111" d="M12 18H3v-2h9v2Zm9-5H3v-2h18v2Zm0-5h-9V6h9v2Z" />
    </svg>
  );
};

export const Logo = ({ ...props }) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="img"
      width="1.4em"
      height="1.4em"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 48 48"
    >
      <path
        fill="none"
        stroke="#111"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="4"
        d="M29.796 24H16.204s-3.986 7.708 2.548 10.833c4.183 2.5-2.548 9.167-2.548 9.167h13.592s-6.73-7.292-2.548-9.167C33.782 31.708 29.796 24 29.796 24ZM37 10l-7 14H16L9 10s3-6 14-6s14 6 14 6ZM25 24l2-12m-6 12l-2-12"
      />
    </svg>
  );
};

export const Close = ({ click, ...props }) => {
  return (
    <svg
      {...props}
      onClick={click}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="img"
      width="1em"
      height="1em"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 24 24"
    >
      <path
        fill="white"
        d="M24 2.4L21.6 0L12 9.6L2.4 0L0 2.4L9.6 12L0 21.6L2.4 24l9.6-9.6l9.6 9.6l2.4-2.4l-9.6-9.6z"
      />
    </svg>
  );
};

export const CardIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="img"
      width="5em"
      height="5em"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 64 64"
    >
      <path
        fill="#f8f8f8"
        d="M45 19.449c1.104 0 2-.824 2-1.84v-1.943c0-1.018-.896-1.842-2-1.842c0-15.766-26-15.766-26 0c-1.104 0-2 .824-2 1.842v1.943c0 1.016.896 1.84 2 1.84h.281v36.926H19c-1.104 0-2 .824-2 1.84v1.943c0 1.016.896 1.842 2 1.842h26c1.104 0 2-.826 2-1.842v-1.943c0-1.016-.896-1.84-2-1.84h-.281V19.449H45M20.914 40.781v-5.898c7.391-1.809 14.781-8.826 22.172-10.635v5.896c-7.391 1.809-14.781 8.827-22.172 10.637m22.172-5.361v5.896c-7.391 1.809-14.781 8.826-22.172 10.635v-5.896c7.391-1.811 14.781-8.828 22.172-10.635M23.709 56.375c6.459-2.584 12.918-8.126 19.377-9.705v5.896c-3.299.808-5.967 2.272-8.566 3.809H23.709m-2.795-26.844v-5.898c3.058-.748 6.115-2.39 9.172-4.184h11.191c-6.788 2.377-13.576 8.419-20.363 10.082"
      />
    </svg>
  );
};

export const ServicesIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="img"
      width="min(10vw, 4rem)"
      height="min(10vw, 4rem)"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 32 32"
    >
      <g fill="rgb(33, 50, 32)">
        <path d="M25.5 29c1.93 0 3.5-1.57 3.5-3.5S27.43 22 25.5 22S22 23.57 22 25.5s1.57 3.5 3.5 3.5zm0-6c1.378 0 2.5 1.121 2.5 2.5S26.878 28 25.5 28S23 26.879 23 25.5s1.122-2.5 2.5-2.5z" />
        <path d="M18.732 23.95c0 1.451.357 3.271.836 4.301C20.548 30.738 22.476 32 25.3 32c3.694 0 6.7-3.006 6.7-6.7c0-3.593-2.818-6.2-6.7-6.2c-4.413 0-5.853-2.371-5.91-2.469a.541.541 0 0 0-.07-.095L3.965.158A.5.5 0 0 0 3.1.5c0 9.651 6.436 14.715 11.135 18.411c2.513 1.977 4.497 3.537 4.497 5.039zM4.144 1.811l14.412 15.372c.268.424 2.044 2.917 6.744 2.917c3.303 0 5.7 2.187 5.7 5.2c0 3.144-2.557 5.7-5.7 5.7c-2.405 0-3.976-1.02-4.813-3.144c-.366-.786-.755-2.423-.755-3.906c0-1.987-2.153-3.681-4.878-5.825c-4.317-3.396-10.152-7.985-10.71-16.314zM3 25.5C3 27.43 4.57 29 6.5 29s3.5-1.57 3.5-3.5S8.43 22 6.5 22S3 23.57 3 25.5zm6 0C9 26.879 7.878 28 6.5 28S4 26.879 4 25.5S5.122 23 6.5 23S9 24.121 9 25.5z" />
        <path d="M20.634 15.471a.5.5 0 1 0 .674.738C24.843 12.989 28.9 8.294 28.9.5a.5.5 0 0 0-.865-.342l-10.92 11.646a.5.5 0 0 0 .73.684l10.014-10.68c-.426 6.63-4.046 10.766-7.225 13.663zm-9.723 3.425a.498.498 0 1 0-.361-.931a16.03 16.03 0 0 0-.684.292c-.844.375-1.895.843-3.166.843c-3.882 0-6.7 2.607-6.7 6.2C0 28.994 3.006 32 6.7 32c2.824 0 4.752-1.262 5.719-3.722c.506-1.085.581-3.46.581-4.778c0-.269.762-.843 1.218-1.186c.421-.316.856-.644 1.156-.982a.5.5 0 0 0-.748-.664c-.234.265-.628.561-1.01.848C12.785 22.142 12 22.732 12 23.5c0 2.072-.182 3.701-.499 4.384C10.676 29.98 9.105 31 6.7 31A5.706 5.706 0 0 1 1 25.3c0-3.014 2.397-5.2 5.7-5.2c1.484 0 2.691-.538 3.573-.931c.228-.102.441-.196.638-.273z" />
        <circle cx="16" cy="16.984" r=".806" />
      </g>
    </svg>
  );
};

export const Moustache = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="img"
      width="min(10vw, 6rem)"
      height="min(10vw, 6rem)"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 48 48"
    >
      <g
        fill="none"
        stroke="rgb(33, 50, 32)"
        stroke-linejoin="round"
        stroke-width="3"
      >
        <path d="M10.064 24.058c3.287-1.073 3.465-5.092 7.797-5.94c3.465-.68 5.547 1.708 6.064 4.243c.433 2.122-.866 7.639-7.797 7.639C7.465 30 4.578 24.483 4 22.361c.866.849 3.465 2.546 6.064 1.697Z" />
        <path d="M37.936 24.058c-3.288-1.073-3.465-5.092-7.797-5.94c-3.465-.68-5.547 1.708-6.064 4.243c-.433 2.122.866 7.639 7.797 7.639c8.663 0 11.55-5.517 12.128-7.639c-.866.849-3.465 2.546-6.064 1.697Z" />
      </g>
    </svg>
  );
};

export const Wash = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="img"
      width="min(10vw, 6rem)"
      height="min(10vw, 6rem)"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 48 48"
    >
      <mask id="svgIDa">
        <g fill="none" stroke="#fff" stroke-width="4">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M24 4v7m5 6v-6H19v6M31 4H19.8C17.142 4 15 5.2 15 8m23 18.977V26a9 9 0 0 0-9-9H19a9 9 0 0 0-9 9v9a9 9 0 0 0 9 9h5"
          />
          <path
            fill="#555"
            d="M40 39.77c0 2.336-2.015 4.23-4.5 4.23S31 42.106 31 39.77c0-2.337 2.94-6.77 4.5-6.77s4.5 4.433 4.5 6.77Z"
          />
        </g>
      </mask>
      <path fill="rgb(33, 50, 32)" d="M0 0h48v48H0z" mask="url(#svgIDa)" />
    </svg>
  );
};