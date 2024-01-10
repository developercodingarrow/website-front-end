import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export const useCheckboxUrlUpdater = (placeholder) => {
  const router = useRouter();
  const [checkedItems, setCheckedItems] = useState([]);

  useEffect(() => {
    // Load checkedItems from localStorage on component mount
    const storedItems = localStorage.getItem(placeholder);
    if (storedItems) {
      setCheckedItems(JSON.parse(storedItems));
    }
  }, [placeholder]);

  const handleCheckboxChange = (value) => {
    const newCheckedItems = [...checkedItems];
    if (newCheckedItems.includes(value)) {
      newCheckedItems.splice(newCheckedItems.indexOf(value), 1);
    } else {
      newCheckedItems.push(value);
    }
    setCheckedItems(newCheckedItems);

    // Store the updated checkedItems in localStorage
    localStorage.setItem(placeholder, JSON.stringify(newCheckedItems));

    const queryParams =
      newCheckedItems.length > 0
        ? `${placeholder}=${newCheckedItems
            .map(encodeURIComponent)
            .join(`&${placeholder}=`)}`
        : "";
    const newUrl = `${window.location.pathname}${
      queryParams ? `?${queryParams}` : ""
    }`;

    router.push(newUrl);
  };

  return { checkedItems, handleCheckboxChange };
};
