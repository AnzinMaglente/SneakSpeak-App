import { ThumbUp, Comment } from "@mui/icons-material";

function BlogEditorPanel() {
  return (
    <div className="w-2xs h-90 bg-grey-1">
      <div className="bg-white-2 w-full h-30"></div>
      <div className="flex mx-5 my-3 items-center justify-between text-white-text">
        <h3>Blog Title</h3>
        <div>
          <button>
            0 <ThumbUp />
          </button>
          <button className="ml-3">
            0 <Comment />
          </button>
        </div>
      </div>
      <p className="mx-5 text-sm text-justify text-white-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      </p>
      <div className="flex mx-5 my-5 items-center justify-between text-white-text">
        <p>
          Last Updated:
          <br />
          00/00/0000
        </p>
        <button className="w-20 h-10 border text-white-text bg-tertiary border-white-text">
          Edit
        </button>
      </div>
    </div>
  );
}

export default BlogEditorPanel;
