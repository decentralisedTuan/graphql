import styles from "./error-message.module.scss";

type ErrorMessageProps = {
  message: string;
};

export default function ErrorMessage({ message }: ErrorMessageProps) {
  return (
    <div className={styles.container}>
      <span className={styles.message}>{message}</span>
    </div>
  );
}
