import CommentLayout from "../CommentLayout";

function AdminCommentsTab() {
  return (
    <div>
      <h2 className="mx-6 mt-9 mb-8 text-xl">Comments</h2>
      <hr className="w-19/20 mx-auto my-6 border-grey-1" />
      <div className="w-19/20 h-120 mx-auto overflow-y-scroll ">
        <CommentLayout />
        <CommentLayout />
        <CommentLayout />
        <CommentLayout />
      </div>
    </div>
  );
}

export default AdminCommentsTab;
