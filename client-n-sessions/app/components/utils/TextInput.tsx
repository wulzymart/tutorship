import { TextInputInterface } from "@/app/interfaces/Interfaces";

const TextInput = ({
  type,
  name,
  value,
  placeholder,
  handleChange,
  Icon,
}: TextInputInterface) => {
  return (
    <div className="w-full relative">
      {Icon && (
        <div className="absolute text-main2 text-xl left-4 top-2">
          <Icon />
        </div>
      )}
      <input
        className="w-full h-10 rounded outline-main2 px-12 bg-white"
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default TextInput;
