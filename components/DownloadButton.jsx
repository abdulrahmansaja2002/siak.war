

const DownloadButton = ({ textOutput, outputName="matkuls.txt", label, ...props }) => {
  const file = new Blob([textOutput], { type: "text/plain" });

  return (
    <button {...props}>
      <a
        download={outputName}
        target="_blank"
        rel="noreferrer"
        href={URL.createObjectURL(file)}
        style={{
          textDecoration: "inherit",
          color: "inherit",
        }}
      >
        {label}
      </a>
    </button>
  );
};

export default DownloadButton;
