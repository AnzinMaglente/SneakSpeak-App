import Carousel from "react-multi-carousel";
import { Link } from "react-router-dom";
import { InView } from "react-intersection-observer";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

function IndexContent() {
  return (
    <main className="flex-column justify-items-center bg-gradient-to-b from-white-2 from-1% via-secondary">
      <div className="w-lg py-8 text-center text-2xl text-black-text animate-fade-up animate-ease-in animate-delay-400 animate-once">
        Start creating attractive, intuitive blogs from the tips of your fingers
        with SneakSpeak.
      </div>
      <div className="w-6xl h-100 bg-white-2">
        <img />
      </div>

      <InView threshold={1} triggerOnce={true}>
        {({ inView, ref }) => (
          <div className="w-lg py-8" ref={ref}>
            <p
              className={
                inView
                  ? `text-center text-xl text-black-text animate-fade-up animate-ease-in animate-once`
                  : `opacity-0`
              }
            >
              Add and Personalize Your Content
            </p>
            <br />
            <p
              className={
                inView
                  ? `text-black-text text-justify animate-fade-up animate-ease-in animate-delay-500 animate-once`
                  : `opacity-0`
              }
            >
              Create your blog within minutes with the use of a responsive
              template that allows you to add your own images, videos, text and
              audio to your page. Afterwards, change and customize how it looks
              with your own design in mind.
            </p>
            <div
              className={
                inView
                  ? `my-5 flex items-center justify-center animate-fade-up animate-ease-in animate-delay-1000 animate-once`
                  : "opacity-0"
              }
            >
              <Link to="/auth">
                <button className="w-30 h-10 bg-tertiary text-white-text">
                  Start Now
                </button>
              </Link>
            </div>
          </div>
        )}
      </InView>

      <hr className="w-6xl border-grey-1" />

      <InView threshold={1} triggerOnce={true}>
        {({ inView, ref }) => (
          <div className="w-2xl py-8" ref={ref}>
            <h1
              className={
                inView
                  ? `text-center text-2xl text-black-text animate-fade-up animate-ease-in animate-once`
                  : `opacity-0`
              }
            >
              We Offer:
            </h1>
            <div className="py-4 grid grid-cols-2 grid-rows-2 gap-x-35 gap-y-15">
              <div
                className={
                  inView
                    ? `h-45 outline-2 outline-offset-2 outline-solid text-center animate-fade-up animate-ease-in animate-delay-500 animate-once`
                    : `opacity-0`
                }
              >
                <img />
                <h3 className="my-2 text-black-text">Mobile Responsiveness</h3>
                <p className="mx-4.5 text-black-text text-justify">
                  Your visitors will have a smooth viewing experience as your
                  blog will be optimized for all devices.
                </p>
              </div>
              <div
                className={
                  inView
                    ? `h-45 outline-2 outline-offset-2 outline-solid text-center animate-fade-up animate-ease-in animate-delay-1000 animate-once`
                    : `opacity-0`
                }
              >
                <img />
                <h3 className="my-2 text-black-text">Social Media</h3>
                <p className="mx-4.5 text-black-text text-justify">
                  Link your accounts to your page in order to share your
                  pictures, and videos to your blog.
                </p>
              </div>
              <div
                className={
                  inView
                    ? `h-45 outline-2 outline-offset-2 outline-solid text-center animate-fade-up animate-ease-in animate-delay-1500 animate-once`
                    : `opacity-0`
                }
              >
                <img />
                <h3 className="my-2 text-black-text">Contact Forms</h3>
                <p className="mx-4.5 text-black-text text-justify">
                  Make it easy for people to contact you by adding a contact
                  form that goes into your email.
                </p>
              </div>
              <div
                className={
                  inView
                    ? `h-45 outline-2 outline-offset-2 outline-solid text-center animate-fade-up animate-ease-in animate-delay-2000 animate-once`
                    : `opacity-0`
                }
              >
                <img />
                <h3 className="my-2 text-black-text">No Coding Required</h3>
                <p className="mx-4.5 text-black-text text-justify">
                  Don’t know how to code? No worries, everything here is made in
                  consideration for just that!
                </p>
              </div>
            </div>
          </div>
        )}
      </InView>

      <hr className="w-6xl border-grey-1" />
      <div className="w-6xl py-8">
        <h2 className="py-4 text-2xl text-black-text">Featured Blogs:</h2>
        <Carousel
          showDots={true}
          responsive={responsive}
          infinite={true}
          itemClass="px-5"
        >
          <div className="h-45 bg-white-2">Item 1</div>
          <div className="h-45 bg-white-2">Item 2</div>
          <div className="h-45 bg-white-2">Item 3</div>
          <div className="h-45 bg-white-2">Item 4</div>
        </Carousel>
      </div>
    </main>
  );
}

export default IndexContent;
