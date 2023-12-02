"use client";
import React, { useState } from "react";
import Select from "react-select";

interface CategorySelectorProps {
  categories: string[];
  selectedCategories: { label: string; value: string }[];
  onSelectCategories: (categories: { label: string; value: string }[]) => void;
}

const CategorySelector: React.FC<CategorySelectorProps> = ({
  categories,
  selectedCategories,
  onSelectCategories,
}) => {
  const options = categories.map((category) => ({
    label: category,
    value: category,
  }));

  return (
    <div>
      <label>Select categories:</label>
      <Select
        isMulti
        options={options}
        value={selectedCategories}
        onChange={(selectedOptions) =>
          onSelectCategories(selectedOptions as any)
        }
      />
    </div>
  );
};

const TagInput: React.FC = () => {
  const [selectedCategories, setSelectedCategories] = useState<
    { label: string; value: string }[]
  >([]);

  const categories = ["Category 1", "Category 2", "Category 3"];

  const handleSelectCategories = (
    categories: { label: string; value: string }[]
  ) => {
    setSelectedCategories(categories);
  };

  return (
    <div>
      <CategorySelector
        categories={categories}
        selectedCategories={selectedCategories}
        onSelectCategories={handleSelectCategories}
      />
      <p>
        Selected categories:{" "}
        {selectedCategories.map((category) => category.label).join(", ")}
      </p>
    </div>
  );
};

export default TagInput;
