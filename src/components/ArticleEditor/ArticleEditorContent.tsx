import "react-quill-new/dist/quill.snow.css";
import ArticleEditorComponent from "./ArticleEditorComponent";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

function ArticleEditorContent() {
  return (
    <div className="min-h-140 mx-37 my-10">
      <div className="flex my-5">
        <label className="w-30 mr-5 text-xl self-center">Title Name:</label>
        <input
          type="Text"
          className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
        />
      </div>
      <label className="w-30 mr-5 text-xl">Article Tags:</label>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="Life" control={<Radio />} label="Life" />
        <FormControlLabel value="Gaming" control={<Radio />} label="Gaming" />
        <FormControlLabel value="Reviews" control={<Radio />} label="Reviews" />
        <FormControlLabel value="Other" control={<Radio />} label="Other" />
      </RadioGroup>
      <div className="my-5"></div>
      <ArticleEditorComponent />
      <hr className="w-full mx-auto mt-17 mb-6 border-grey-1" />
      <div className="flex my-5 items-center justify-between">
        <button className="h-10 px-8 bg-tertiary text-white-text">
          Cancel
        </button>
        <div>
          <button className="h-10 px-8 bg-tertiary text-white-text">
            Preview
          </button>
          <button className="h-10 ml-6 px-8 bg-tertiary text-white-text">
            Post
          </button>
        </div>
      </div>
    </div>
  );
}

export default ArticleEditorContent;
