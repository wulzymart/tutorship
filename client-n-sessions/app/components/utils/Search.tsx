"use client";
import { useState } from "react";
import Button from "./Button";
import TextInput from "./TextInput";
import { IoIosSearch } from "react-icons/io";

const Search = () => {
  const [searchKey, setSearchkey] = useState("");
  return (
    <div className="flex gap-6 items-center w-full">
      <TextInput
        type="text"
        name="course-search"
        value={searchKey}
        Icon={IoIosSearch}
        handleChange={(e) => {
          setSearchkey(e.target.value);
        }}
      />
      <Button
        text="search"
        handleClick={() => {
          console.log(searchKey);
        }}
      />
    </div>
  );
};

export default Search;
