import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import ProfileEmailComponent from "./ProfileEmailComponent";

function ProfileContent() {
  return (
    <div className="h-190 px-38 py-5 bg-gradient-to-b from-white-2 from-1% via-secondary">
      <div className="flex w-full justify-between">
        <div className="flex">
          <div className="w-20 h-20 bg-grey-1" />
          {/* Insert profile picture here */}
          <div className="flex-col mx-5 content-center">
            <p>Username</p>
            <p className="text-grey-1">username@gmail.com</p>
          </div>
        </div>
        <button className="h-10 px-3 self-center bg-tertiary text-white-text">
          Edit Profile
        </button>
      </div>
      <div className="flex w-full my-3 justify-between">
        <div className="flex flex-col w-24/50">
          <label className="my-2">Full Name</label>
          <input type="text" className="border h-15" />
          <label className="my-2">Gender</label>
          <Select label="Gender">
            <MenuItem value={"Male"}>Male</MenuItem>
            <MenuItem value={"Female"}>Female</MenuItem>
          </Select>
          <label className="my-2">Languages</label>
          <Select label="Gender">
            <MenuItem value={"English"}>English</MenuItem>
            <MenuItem value={"Germary"}>Germary</MenuItem>
            <MenuItem value={"French"}>French</MenuItem>
            <MenuItem value={"Arabic"}>Arabic</MenuItem>
          </Select>
        </div>
        <div className="flex flex-col w-24/50">
          <label className="my-2">Nickname</label>
          <input type="text" className="border h-15" />
          <label className="my-2">Country</label>
          <Select label="Country">
            <MenuItem value={"North America"}>North America</MenuItem>
            <MenuItem value={"South America"}>South America</MenuItem>
            <MenuItem value={"Asia"}>Asia</MenuItem>
            <MenuItem value={"Europe"}>Europe</MenuItem>
            <MenuItem value={"Middle East"}>Middle East</MenuItem>
          </Select>
          <label className="my-2">Timezone</label>
          <Select label="Timezone">
            <MenuItem value={"GMT"}>GMT</MenuItem>
            <MenuItem value={"EST"}>EST</MenuItem>
            <MenuItem value={"UTC"}>UTC</MenuItem>
            <MenuItem value={"IST"}>IST</MenuItem>
            <MenuItem value={"CST"}>CST</MenuItem>
            <MenuItem value={"JST"}>JST</MenuItem>
            <MenuItem value={"AST"}>AST</MenuItem>
            <MenuItem value={"PT"}>PT</MenuItem>
          </Select>
        </div>
      </div>
      <label className="my-2">Email Addresses:</label>
      <div className="max-h-50 my-5 overflow-y-scroll">
        <ProfileEmailComponent />
        <ProfileEmailComponent />
        <ProfileEmailComponent />
        <ProfileEmailComponent />
      </div>
      <button className="h-10 px-3 self-center bg-tertiary text-white-text">
        +Add Email Address
      </button>
    </div>
  );
}

export default ProfileContent;
