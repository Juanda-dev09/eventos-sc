import "../CSS/button.css";

export function Button({ text, onClick, styleClass, typeBtn }) {
  return (
    <>
      <button
        type={typeBtn}
        className={`stylesForDefault ${styleClass}`}
        onClick={onClick}
      >
        {text}
      </button>
    </>
  );
}
