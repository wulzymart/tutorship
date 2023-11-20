import { GrNext, GrPrevious } from "react-icons/gr";

function Carousel<T>({
  data,
  Element,
  limit = 0,
}: {
  data: T[];
  Element: React.JSX.Element;
  limit: number;
}) {
  let start = 0;
  let end = limit ? start + limit : data.length;

  return (
    <div>
      <button>
        <GrPrevious />
      </button>

      <button>
        <GrNext />
      </button>
    </div>
  );
}

export default Carousel;
