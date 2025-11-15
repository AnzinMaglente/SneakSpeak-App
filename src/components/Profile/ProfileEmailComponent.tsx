function ProfileEmailComponent() {
  return (
    <div className="flex mb-5">
      <div className="w-20 h-20 bg-grey-1" />
      {/* Email Icon here */}
      <div className="flex-col mx-5 content-center">
        <p>username@gmail.com</p>
        <p className="text-grey-1">Date added</p>
      </div>
    </div>
  );
}

export default ProfileEmailComponent;
