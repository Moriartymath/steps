import "./CloseButton.css";

type CloseButtonProps = {
  setClosed: Function;
};

function CloseButton({ setClosed }: CloseButtonProps) {
  return (
    <button
      onClick={() => setClosed((isClosed: boolean) => !isClosed)}
      className="button--close"
    ></button>
  );
}

export default CloseButton;
