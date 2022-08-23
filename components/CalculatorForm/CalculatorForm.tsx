import React, { ChangeEvent, KeyboardEvent, useState } from 'react';
import classNames from 'classnames';
import { FormField } from '@/components/FormField';

import { useConvertedRomanNumeral } from '../../lib/hooks/useConvertedRomanNumeral';
import styles from './CalculatorForm.module.css';

interface Props {
  className?: string;
}

export const CalculatorForm: React.FC<Props> = (props) => {
  const { className } = props;
  const [numberText, setNumberText] = useState('');

  const { isValid, romanNumber, minPossibleValue, maxPossibleValue } =
    useConvertedRomanNumeral(parseInt(numberText, 10));

  const hasInvalidInput = !isValid && numberText.length > 0;

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNumberText(e.target.value);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (['KeyE', 'Period', 'Comma'].includes(e.code)) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  return (
    <div className={classNames(styles.container, className)}>
      <FormField
        type="number"
        value={numberText}
        labelText="Input a number here:"
        isInvalid={hasInvalidInput}
        validationMessage={`value should be between ${minPossibleValue} and ${maxPossibleValue}`}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />

      <FormField
        value={romanNumber}
        labelText="Converted Roman Numeral:"
        readOnly
      />
    </div>
  );
};
