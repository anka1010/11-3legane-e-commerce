function Button({ children, styles = "", onClick = undefined }) {
  return (
    <button className={styles} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
