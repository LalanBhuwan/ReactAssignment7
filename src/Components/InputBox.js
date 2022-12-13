const InputBox = (props) => {
  return (
    <div>
      <p><label for="Markdown"></label>Type Markdown Here...</p>
      <textarea
        // id="Markdown"
        // name="Markdown"
        rows="25"
        cols="55"
        onChange={(e) => {
          props.setMarkupDataFn(e.target.value);
        }}
      ></textarea>
    </div>
  );
};
export default InputBox;
