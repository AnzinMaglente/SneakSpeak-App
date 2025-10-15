function IndexContent() {
  return (
    <main className="flex-column justify-items-center bg-gradient-to-b from-white-2 from-1% via-secondary">
      <div className="w-lg py-8 text-center text-2xl text-black-text">
        Start creating attractive, intuitive blogs from the tips of your fingers
        with SneakSpeak.
      </div>
      <div className="w-6xl h-100 bg-white-2">
        <img />
      </div>
      <div className="w-lg py-8">
        <p className="text-center text-xl text-black-text">
          Add Your Content and Personalize
        </p>
        <br />
        <p className="text-black-text">
          Create your blog within minutes with the use of a responsive template
          that allows you to add your own images, videos, text and audio to your
          page. Afterwards, change and customize how it looks with your own
          design in mind.
        </p>
        <div className="my-5 flex items-center justify-center">
          <button className="w-30 h-10 bg-tertiary text-white-text">
            Start Now
          </button>
        </div>
      </div>
      <hr className="w-6xl border-grey-1" />
      <div className="w-2xl py-8">
        <h1 className="text-center text-2xl text-black-text">We Offer:</h1>
        <div className="py-4 grid grid-cols-2 grid-rows-2 gap-x-35 gap-y-15">
          <div className="h-45 outline-2 outline-offset-2 outline-solid text-center">
            <img />
            <h3 className="my-2 text-black-text">Mobile Responsiveness</h3>
            <p className="mx-4.5 text-black-text text-justify">
              Your visitors will have a smooth viewing experience as your blog
              will be optimized for all devices.
            </p>
          </div>
          <div className="h-45 outline-2 outline-offset-2 outline-solid text-center">
            <img />
            <h3 className="my-2 text-black-text">Social Media</h3>
            <p className="mx-4.5 text-black-text text-justify">
              Link your accounts to your page in order to share your pictures,
              and videos to your blog.
            </p>
          </div>
          <div className="h-45 outline-2 outline-offset-2 outline-solid text-center">
            <img />
            <h3 className="my-2 text-black-text">Contact Forms</h3>
            <p className="mx-4.5 text-black-text text-justify">
              Make it easy for people to contact you by adding a contact form
              that goes into your email.
            </p>
          </div>
          <div className="h-45 outline-2 outline-offset-2 outline-solid text-center">
            <img />
            <h3 className="my-2 text-black-text">No Coding Required</h3>
            <p className="mx-4.5 text-black-text text-justify">
              Don’t know how to code? No worries, everything here is made in
              consideration for just that!
            </p>
          </div>
        </div>
      </div>
      <hr className="w-6xl border-grey-1" />
      <div className="w-2xl py-8">
        <h2 className="text-2xl text-black-text">Featured Blogs:</h2>
        <div className="w-full">
          <div className="w-100 bg-tertiary"></div>
        </div>
      </div>
    </main>
  );
}

export default IndexContent;
