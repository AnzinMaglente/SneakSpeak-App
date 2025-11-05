import BlogEditorPanel from "./BlogEditorPanel";

function AdminHomeTab() {
  return (
    <div>
      <div className="flex mx-6 items-center justify-between">
        <div className="container mx-auto flex justify-between items-center">
          <h2 className="text-xl">Blogs</h2>
          <button className="bg-tertiary text-white-text p-3">
            Create New Blog
          </button>
        </div>
      </div>
      <hr className="w-19/20 mx-auto my-6 border-grey-1" />
      <div className="overflow-y-scroll h-120">
        <div className="grid grid-flow-row grid-cols-3 gap-13 mx-6">
          <BlogEditorPanel />
          <BlogEditorPanel />
          <BlogEditorPanel />
          <BlogEditorPanel />
          <BlogEditorPanel />
          <BlogEditorPanel />
          <BlogEditorPanel />
        </div>
      </div>
    </div>
  );
}

export default AdminHomeTab;
