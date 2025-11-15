function CommentLayout() {
  return (
    <div className="flex w-full my-5 min-h-30 bg-grey-1">
      <div className="w-30 h-30 m-5 bg-grey-2">{/*PICTURE HERE*/}</div>
      <div className="block ml-3 mt-5 text-white-text">
        <p>Name of User</p>
        <p className="text-xs mb-2">Date of comment</p>
        <p>Comment Text</p>
      </div>
    </div>
  );
}

export default CommentLayout;
