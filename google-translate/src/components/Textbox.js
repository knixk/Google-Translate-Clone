import SelectDropDown from "./SelectDropDown";

function Textbox({
  style,
  selectedLanguage,
  setShowModal,
  setTextToTranslate,
  textToTranslate,
  translatedText,
  setTranslatedText,
}) {
  const handleClick = () => {
    setTranslatedText("");
    setTextToTranslate("");
  };

  return (
    <div className={style}>
      <SelectDropDown
        selectedLanguage={selectedLanguage}
        style={style}
        setShowModal={setShowModal}
      />

      <textarea
        placeholder={style === "input" ? "Enter text" : "Translation"}
        disabled={style === "output"}
        onChange={(e) => setTextToTranslate(e.target.value)}
        value={style == "input" ? textToTranslate : translatedText}
      />

      {style == "input" && (
        <div className="delete" onClick={handleClick}>
          x
        </div>
      )}
    </div>
  );
}

export default Textbox;
