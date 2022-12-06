import React, { useState, useEffect } from "react";
import { Navigation } from "@shopify/polaris";
import {
  DraftOrdersMajorMonotone,
  HomeMajorMonotone,
  SettingsMinor,
} from "@shopify/polaris-icons";
import MenuArray from "../routes/route";

const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    const getMenuItems = () => {
      const array = [];
      MenuArray.map((menu) => {
        const object = {
          url: `/${menu.slug}`,
          label: menu.label,
          icon: renderIcon(menu.slug),
        };
        array.push(object);
      });
      setMenuItems(array);
    };
    getMenuItems();
  }, [MenuArray]);

  const renderIcon = (slug) => {
    switch (slug) {
      case "dashboard":
        return HomeMajorMonotone;
      case "posts-management":
        return DraftOrdersMajorMonotone;
      case "settings":
        return SettingsMinor;
      default:
        return "";
    }
  };

  return (
    <Navigation location="/">
      <Navigation.Section items={menuItems} />
    </Navigation>
  );
};

export default Menu;
