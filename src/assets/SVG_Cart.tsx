import * as React from "react";
const SVG_Cart = ({ ...props }: React.ComponentProps<"svg">) => (
  <svg
    width="800px"
    height="800px"
    viewBox="0 0 15 15"
    fill="#555"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M2.40114 6.38957L1.9042 6.33435L2.40114 6.38957ZM1.62336 13.3896L2.1203 13.4448L1.62336 13.3896ZM13.3766 13.3896L12.8797 13.4448L13.3766 13.3896ZM12.5988 6.38957L13.0958 6.33435L12.5988 6.38957ZM1.9042 6.33435L1.12642 13.3344L2.1203 13.4448L2.89808 6.44478L1.9042 6.33435ZM2.61724 15H12.3827V14H2.61724V15ZM13.8735 13.3344L13.0958 6.33435L12.1019 6.44478L12.8797 13.4448L13.8735 13.3344ZM11.6049 5H3.39502V6H11.6049V5ZM13.0958 6.33435C13.0114 5.5747 12.3693 5 11.6049 5V6C11.8597 6 12.0737 6.19157 12.1019 6.44478L13.0958 6.33435ZM12.3827 15C13.2767 15 13.9723 14.2229 13.8735 13.3344L12.8797 13.4448C12.9126 13.741 12.6807 14 12.3827 14V15ZM1.12642 13.3344C1.02769 14.2229 1.72323 15 2.61724 15V14C2.31924 14 2.08739 13.741 2.1203 13.4448L1.12642 13.3344ZM2.89808 6.44478C2.92622 6.19157 3.14025 6 3.39502 6V5C2.6307 5 1.9886 5.5747 1.9042 6.33435L2.89808 6.44478ZM4.99998 4V3.5H3.99998V4H4.99998ZM9.99998 3.5V4H11V3.5H9.99998ZM7.49998 1C8.88069 1 9.99998 2.11929 9.99998 3.5H11C11 1.567 9.43298 0 7.49998 0V1ZM4.99998 3.5C4.99998 2.11929 6.11927 1 7.49998 1V0C5.56698 0 3.99998 1.567 3.99998 3.5H4.99998Z"
      fill="#000000"
    />
  </svg>
);
export default SVG_Cart;
