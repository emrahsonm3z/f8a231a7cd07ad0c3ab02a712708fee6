import * as React from 'react'

const SvgSearch = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className=""
      width="1em"
      height="1em"
      viewBox="0 0 48 48"
      {...props}
    >
      <g fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth={4}>
        <path d="M21 38c9.389 0 17-7.611 17-17S30.389 4 21 4 4 11.611 4 21s7.611 17 17 17z" />
        <path
          strokeLinecap="round"
          d="M26.657 14.343A7.975 7.975 0 0021 12c-2.21 0-4.21.895-5.657 2.343m17.879 18.879l8.485 8.485"
        />
      </g>
    </svg>
  )
}

export default SvgSearch
