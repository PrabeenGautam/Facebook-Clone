import { SVGTypes } from "@/types/svg/svg.types";

function AddFriend(props: SVGTypes) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 16 16"
      {...props}
    >
      <g fillRule="evenodd" transform="translate(-448 -544)">
        <g>
          <path
            d="M97 391.5c-.827 0-1.5-.784-1.5-1.75 0-1.08.575-1.75 1.5-1.75s1.5.67 1.5 1.75c0 .966-.673 1.75-1.5 1.75m10 0c-.827 0-1.5-.784-1.5-1.75 0-1.08.575-1.75 1.5-1.75s1.5.67 1.5 1.75c0 .966-.673 1.75-1.5 1.75m-5-.5c-1.24 0-2.25-1.122-2.25-2.5 0-1.542.862-2.5 2.25-2.5s2.25.958 2.25 2.5c0 1.378-1.01 2.5-2.25 2.5m-5.5 5.06v-.496c0-.963.302-1.856.816-2.593a.3.3 0 0 0-.246-.471h-.388A2.685 2.685 0 0 0 94 395.182a1.32 1.32 0 0 0 1.319 1.318h.885a.302.302 0 0 0 .3-.318 1.975 1.975 0 0 1-.004-.122m7.5.94c0-.825.675-1.5 1.5-1.5h.5v-.5c0-.29.087-.56.231-.79a3.568 3.568 0 0 0-3.295-2.21h-1.872a3.568 3.568 0 0 0-3.564 3.564v.495c0 .795.646 1.441 1.44 1.441h5.153a1.46 1.46 0 0 1-.093-.5m3.04-3.42c.146-.048.299-.08.46-.08.825 0 1.5.675 1.5 1.5v.5h.5c.152 0 .296.03.434.072.04-.124.066-.253.066-.39a2.685 2.685 0 0 0-2.681-2.682h-.388a.3.3 0 0 0-.246.472c.134.192.251.396.355.608"
            transform="translate(354 160)"
          />
          <path
            fillRule="nonzero"
            d="M108 399v-4a.5.5 0 0 0-1 0v4a.5.5 0 0 0 1 0z"
            transform="translate(354 160)"
          />
          <path
            fillRule="nonzero"
            d="M105.5 397.5h4a.5.5 0 0 0 0-1h-4a.5.5 0 0 0 0 1z"
            transform="translate(354 160)"
          />
        </g>
      </g>
    </svg>
  );
}

export default AddFriend;
