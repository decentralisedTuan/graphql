import styles from "./error-message.module.scss";

type ErrorMessageProps = {
  message: string;
};

const ErrorMessage = ({ message }: ErrorMessageProps) => (
  <div className={styles.container}>
    <span className={styles.message}>{message}</span>
  </div>
);

export default ErrorMessage;
