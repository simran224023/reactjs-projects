import React from "react";
import useTheme from "../../contexts/theme";
import "./theme.css";

const Theme = () => {
  const { themeMode, darkTheme, lightTheme } = useTheme();
  const onChangeBtn = (e) => {
    if (e.target.checked) {
      darkTheme();
    } else {
      lightTheme();
    }
  };
  return (
    <label className="theme-switch-label">
      <input
        type="checkbox"
        value=""
        className="theme-switch-input"
        checked={themeMode === "dark"}
        onChange={onChangeBtn}
      />
      <div className="theme-switch-slider"></div>
      <span className="theme-switch-text">
        Toggle Theme
      </span>
    </label>
  );
};

export default Theme;