import postBackground from "@/assets/data/postBackground.data";

interface Props {
  onClose: () => void;
}

function BackgroundSelector({ onClose }: Props) {
  const data = postBackground.slice(0, 8);

  return (
    postBackground && (
      <div className="flex space-x-1.5">
        <div
          className="center h-8 w-8 cursor-pointer rounded-lg bg-[--divider]"
          onClick={onClose}
        >
          <i className="filter-primary inline-block h-4 w-4 cursor-pointer bg-whole bg-no-repeat object-cover [background-position:-18px_-132px]"></i>
        </div>

        <div className="inner-shadow h-8 w-8 cursor-pointer rounded-lg bg-[--body]"></div>

        {data.map((bg, index) => {
          return bg.backgroundColor ? (
            <div
              key={index}
              style={{ backgroundColor: bg.backgroundColor }}
              className="h-8 w-8 cursor-pointer rounded-lg"
            ></div>
          ) : (
            <div
              key={index}
              style={{
                backgroundImage: `url(${bg.backgroundImage})`,
                backgroundSize: "100%",
              }}
              className="h-8 w-8 cursor-pointer rounded-lg"
            ></div>
          );
        })}

        <div className="center h-8 w-8 cursor-pointer rounded-lg bg-[--divider]">
          <i className="filter-primary inline-block h-4 w-4 bg-icons-alternate bg-no-repeat [background-position:-0_-140px]"></i>
        </div>
      </div>
    )
  );
}

export default BackgroundSelector;
