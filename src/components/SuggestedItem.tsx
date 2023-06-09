import React, { useState, forwardRef, type Ref } from 'react';
import { type ISuggestedItemProps } from '../types/global';

const SEPARATOR = '~!@#$^*#%^&';
const MAX_STRING_LENGTH = 47;

function SuggestedItem(
  { suggestedItem, inputText, setInputText }: ISuggestedItemProps,
  ref: Ref<HTMLLIElement>,
) {
  const [isSelected, setIsSelected] = useState(false);
  const cutItem =
    suggestedItem?.length > MAX_STRING_LENGTH
      ? `${suggestedItem.slice(0, MAX_STRING_LENGTH)}...`
      : suggestedItem;

  const handleItemClick = () => {
    setIsSelected(!isSelected);
    setInputText(suggestedItem);
  };

  return (
    <li ref={ref} className={`item${isSelected ? ' selected' : ''}`} onClick={handleItemClick}>
      {cutItem
        .replaceAll(inputText, `${SEPARATOR}${inputText}${SEPARATOR}`)
        .split(SEPARATOR)
        .map((item, index) => (
          <span key={index} style={{ color: item === inputText ? '#2BC9BA' : 'black' }}>
            {item}
          </span>
        ))}
    </li>
  );
}

export default forwardRef(SuggestedItem);
