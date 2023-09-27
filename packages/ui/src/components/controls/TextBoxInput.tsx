import styles from './Controls.module.scss';
import type {JSX} from 'preact';

type TextBoxInputProps = JSX.HTMLAttributes<HTMLTextAreaElement>;

export function TextBoxInput({onChange, onChangeCapture, ...props}: TextBoxInputProps) {
  return (
    <textarea
      onChangeCapture={onChangeCapture ?? onChange}
      onChange={onChangeCapture ? onChange : undefined}
      className={styles.textarea}
      {...props}
    />
  );
}