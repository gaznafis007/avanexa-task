import React from "react";
import { useState } from "react";

const Filter = ({ categories, models, handleCategories, handleModels }) => {
  return (
    <div className="grid grid-cols-1 lg:w-1/2 md:grid-cols-2 mx-auto my-4 ">
      <select
        onChange={handleCategories}
        className="select select-bordered w-full max-w-xs"
      >
        <option disabled selected>
          Select category
        </option>
        {categories.map((category) => (
          <option key={category.category_id} value={category.name}>
            {category.name}
          </option>
        ))}
      </select>
      <select
        onChange={handleModels}
        className="select select-bordered w-full max-w-xs"
      >
        <option disabled selected>
          Select models
        </option>
        {models.map((model) => (
          <option key={model.model_id} value={model?.model_name}>
            {model?.model_name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
