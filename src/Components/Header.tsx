import { PageState } from "../App";
import "../App.css";

const arr: {
  text: "خرید" | "فروش" | "مبادله";
  icon: ({ color }: { color: string }) => JSX.Element;
}[] = [
  {
    text: "خرید",
    icon: function Icon({ color }: { color: string }) {
      return (
        <svg
          width="10"
          height="14"
          viewBox="0 0 10 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.4308 13L5.4308 1M5.4308 1L2.00223 4.42857M5.4308 1L8.85937 4.42857"
            stroke={color}
            stroke-width="1.5"
            stroke-linecap="square"
            stroke-linejoin="round"
          ></path>
        </svg>
      );
    },
  },
  {
    text: "فروش",
    icon: function Icon({ color }: { color: string }) {
      return (
        <svg
          width="10"
          height="14"
          viewBox="0 0 10 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.42857 1L5.42857 13M5.42857 13L8.85714 9.57143M5.42857 13L2 9.57143"
            stroke={color}
            stroke-width="1.5"
            stroke-linecap="square"
            stroke-linejoin="round"
          ></path>
        </svg>
      );
    },
  },
  {
    text: "مبادله",
    icon: function Icon({ color }: { color: string }) {
      return (
        <svg
          width="21"
          height="14"
          viewBox="0 0 21 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.42857 1L5.42857 13M5.42857 13L8.85714 9.57143M5.42857 13L2 9.57143"
            stroke={color}
            stroke-width="1.5"
            stroke-linecap="square"
            stroke-linejoin="round"
          ></path>
          <path
            d="M16.4286 13L16.4286 1M16.4286 1L19.8571 4.42857M16.4286 1L13 4.42857"
            stroke={color}
            stroke-width="1.5"
            stroke-linecap="square"
            stroke-linejoin="round"
          ></path>
        </svg>
      );
    },
  },
];

export default function Header({
  page,
  setPage,
}: {
  page: PageState;
  setPage: React.Dispatch<React.SetStateAction<PageState>>;
}) {
  return (
    <div className="TopChangeItem_content">
      {arr.map((item, index) => (
        <div
          key={index}
          className="ItemBuy_content"
          onClick={() => setPage(item.text)}
          style={item.text === page ? { borderBottom: "3px solid black" } : {}}
        >
          {<item.icon color={item.text === page ? "black" : "#909090"} />}
          <p
            className="TextStyle_Item"
            style={item.text === page ? { color: "black" } : {}}
          >
            {item.text}
          </p>
        </div>
      ))}
    </div>
  );
}
