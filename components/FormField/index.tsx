import classNames from 'classnames';

import styles from './FormField.module.css';

interface Props extends React.HTMLProps<HTMLInputElement> {
  labelText?: React.ReactNode;
  isInvalid?: boolean;
  validationMessage?: React.ReactNode;

  inputClassName?: string;
  className?: string;
}

export const FormField: React.FC<Props> = (props) => {
  const {
    labelText,
    isInvalid,
    validationMessage,
    inputClassName,
    className,
    ...restProps
  } = props;

  return (
    <div className={className}>
      <label className={styles['form-field']}>
        {labelText}
        <input
          className={classNames(styles['number-input'], inputClassName)}
          {...restProps}
        />
      </label>
      {isInvalid && (
        <div className={styles['invalid-caption']}>{validationMessage}</div>
      )}
    </div>
  );
};
