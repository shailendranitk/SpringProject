import React, { useState } from "react";

function useDropdown(label, defaultState, options) {
  const [state, updateState] = useState(defaultState);
  const id = `use-dropdown-${label.replace(" ", "").toLowerCase()}`;

  const Dropdown = () => (
    <label htmlFor={id}>
      {label}
      <select
        id={id}
        value={state}
        onChange={(e) => updateState(e.target.value)}
        onBlur={(e) => updateState(e.target.value)}
        disabled={options.length === 0}
      >
        {label == "animal" ? (
          ""
        ) : (
          <option key="all" value="all">
            All
          </option>
        )}

        {options.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>{" "}
    </label>
  );

  return [state, Dropdown, updateState];
}

export default useDropdown;
