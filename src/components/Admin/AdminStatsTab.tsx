function AdminStatsTab() {
  return (
    <div>
      <h2 className="mx-6 mt-9 mb-8 text-xl">Stats</h2>
      <hr className="w-19/20 mx-auto my-6 border-grey-1" />
      <h2 className="mx-6 my-7 text-xl">Last 7 Days</h2>
      <div className="w-19/20 h-105 mx-6 bg-white-2">
        <h3 className="mx-6 pt-5">Views</h3>
        <hr className="w-19/20 mx-auto my-6 border-grey-1" />
        <div className="flex w-19/20 h-65 mx-auto bg-white-1 items-center justify-center text-center ">
          Graph goes here
        </div>
        <div className="flex">
          <div className="flex w-30 h-10 mx-6 my-3.5 bg-grey-2 text-black-text justify-center items-center text-center">
            Views: {0}
          </div>
          <div className="flex w-30 h-10 mx-6 my-3.5 bg-grey-2 text-black-text justify-center items-center text-center">
            Likes: {0}
          </div>
          <div className="flex w-30 h-10 mx-6 my-3.5 bg-grey-2 text-black-text justify-center items-center text-center">
            Comments: {0}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminStatsTab;
