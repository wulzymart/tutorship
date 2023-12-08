import React from "react";

const TextArea = ({
  className,
  rows,
  cols,
  name,
  value,
  handleChange,
}: {
  className: string;
  rows?: number;
  cols?: number;
  value: string;
  name: string;
  handleChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}) => {
  return (
    <div className={className}>
      <textarea
        className="w-full h-full rounded-lg bg-white"
        rows={rows}
        cols={cols}
        name={name}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default TextArea;
