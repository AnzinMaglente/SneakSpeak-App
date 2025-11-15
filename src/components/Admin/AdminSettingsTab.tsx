function AdminSettingsTab() {
  return (
    <div>
      <h2 className="mx-6 mt-9 mb-8 text-xl">Settings</h2>
      <hr className="w-19/20 mx-auto my-6 border-grey-1" />
      <div className="mx-6">
        <label>Website Palette:</label>
        <ul className="ml-5 mb-3">
          <li>
            <input type="radio" id="PLT1" name="PLTs" value="PLT1" />
            <label className="mx-2">Light Mode</label>
          </li>
          <li>
            <input type="radio" id="PLT2" name="PLTs" value="PLT2" />
            <label className="mx-2">Dark Mode</label>
          </li>
          <li>
            <input type="radio" id="PLT3" name="PLTs" value="PLT3" />
            <label className="mx-2">Alternate Dark Mode</label>
          </li>
        </ul>
        <label>Font Style:</label>
        <ul className="ml-5 mb-3">
          <li>
            <input type="radio" id="FNT1" name="FNTs" value="FNT1" />
            <label className="mx-2">Arial</label>
          </li>
          <li>
            <input type="radio" id="FNT2" name="FNTs" value="FNT2" />
            <label className="mx-2">Helvetica</label>
          </li>
          <li>
            <input type="radio" id="FNT3" name="FNTs" value="FNT3" />
            <label className="mx-2">Georgia</label>
          </li>
          <li>
            <input type="radio" id="FNT4" name="FNTs" value="FNT4" />
            <label className="mx-2">Verdana</label>
          </li>
          <li>
            <input type="radio" id="FNT5" name="FNTs" value="FNT5" />
            <label className="mx-2">Roboto</label>
          </li>
        </ul>
      </div>

      <div className="flex justify-between">
        <button className="h-10 mx-7 my-5 px-3 bg-tertiary text-white-text">
          Delete your Account
        </button>
        <button className="h-10 mx-7 my-5 px-3 bg-tertiary text-white-text">
          Save Options
        </button>
      </div>
    </div>
  );
}

export default AdminSettingsTab;
