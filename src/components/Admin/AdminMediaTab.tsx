// import MediaGallery from "../mediaGallery";

function AdminMediaTab() {
  return (
    <div>
      <div className="flex mx-6 items-center justify-between">
        <div className="container mx-auto flex justify-between items-center">
          <h2 className="text-xl">Media</h2>
          <button className="bg-tertiary text-white-text p-3">
            Add New Media
          </button>
        </div>
      </div>
      <hr className="w-19/20 mx-auto my-6 border-grey-1" />
      <div className="mx-6">
        <h2 className="text-lg">Photos</h2>
        {/* <MediaGallery/> */}
      </div>
      {/* Add gallary view here for photos, audio, and videos. */}
    </div>
  );
}

export default AdminMediaTab;
