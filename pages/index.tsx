import Hyperlink from '@/components/Hyperlink'
import Head from 'next/head'
import type { NextPage } from 'next'

const Heading = ({ title }: { title: string }) => {
  return (
    <h1 className="text-center font-text-primary text-4xl lg:text-5xl">
      {title}
      <img
        src="/images/underline.png"
        alt=""
        className="mx-auto w-3/5 md:w-[200px] lg:w-[300px]"
      />
    </h1>
  )
}

const Card = ({ plan, price }: { plan: string; price: string }) => {
  return (
    <div
      className={`flex flex-col items-center justify-center rounded-md border-4 border-border ${
        plan === 'Monthly'
          ? "bg-[url('../public/images/card-bg-1.png')]"
          : "bg-[url('../public/images/card-bg-2.png')]"
      } mb-6 w-full bg-cover p-6 md:mb-0 md:w-[240px] lg:w-[400px]`}
    >
      <h2 className="pb-5 font-text-primary text-4xl">{plan}</h2>
      <h3 className="pb-8 font-text-secondary lg:text-4xl">{price}</h3>
      <Hyperlink
        href="/"
        className="mx-auto block w-fit rounded-full bg-pink px-5 py-4 text-base font-bold uppercase text-white transition-all duration-150 ease-linear hover:scale-105"
      >
        find your box
      </Hyperlink>
    </div>
  )
}

const Home: NextPage = () => {
  return (
    <>
      <Head>UpBox</Head>
      <div>
        <img src="/images/topbar.png" alt="Top bar" />
      </div>

      {/* header */}
      <header className="h-20 w-full bg-white">
        <div className="mx-auto flex items-center justify-between px-4 py-4 md:w-11/12 md:px-0 lg:w-5/6">
          <div className="hidden md:block">
            <img
              src="/images/logo-main.png"
              alt="Upbox"
              className="md:w-[150px] lg:w-[200px]"
            />
          </div>
          <div className="block md:hidden">
            <img
              src="/images/logo-sm.png"
              alt="Upbox"
              className="block h-[50px] md:hidden"
            />
          </div>
          <span className="block md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </span>
          <nav className="hidden md:block">
            <ul className="flex items-center justify-start">
              <li className="uppercase transition-all duration-150 ease-linear hover:text-pink md:mx-5">
                <Hyperlink href="/">this month</Hyperlink>
              </li>
              <li className="uppercase transition-all duration-150 ease-linear hover:text-pink md:mx-5">
                <Hyperlink href="/">skin</Hyperlink>
              </li>
              <li className="uppercase transition-all duration-150 ease-linear hover:text-pink md:mx-5">
                <Hyperlink href="/">hair</Hyperlink>
              </li>
              <li className="uppercase transition-all duration-150 ease-linear hover:text-pink md:mx-5">
                <Hyperlink href="/">bath</Hyperlink>
              </li>
              <li className="uppercase transition-all duration-150 ease-linear hover:text-pink md:mx-5">
                <Hyperlink href="/">sale</Hyperlink>
              </li>
              <li className="uppercase transition-all duration-150 ease-linear hover:text-pink md:mx-5">
                <Hyperlink
                  href="/"
                  className="rounded-full border-2 border-black px-6 py-2"
                >
                  log in
                </Hyperlink>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* landing section */}
      <div className="h-[900px] w-full overflow-hidden bg-landing md:relative md:h-[500px]">
        <div className="mx-auto flex h-full w-11/12 flex-wrap items-center justify-between md:flex-nowrap lg:w-5/6">
          <div className="flex flex-col items-start justify-center px-4 md:h-full md:w-1/2 md:px-0">
            <h1 className="pb-5 font-text-primary text-5xl md:text-4xl lg:w-[500px] lg:text-5xl">
              Look good without <br />
              leaving your house.
            </h1>
            <h3 className="pb-5 font-text-secondary text-xl lg:w-[500px]">
              Upbox is the easiest way to look your best without having to hunt
              for the perfect makeup combination. Our stylists curate the latest
              trends and send them directly to your door every month.
            </h3>
            <Hyperlink
              href="/"
              className="block w-fit rounded-full border-4 border-pink bg-white px-8 py-3 font-semibold uppercase transition-all duration-150 ease-linear hover:bg-pink hover:text-white lg:px-10 lg:py-4"
            >
              sign up
            </Hyperlink>
          </div>
          <div className="md:w-1/2">
            <img
              src="/images/box.png"
              alt=""
              className="object-cover md:absolute md:-right-32 md:-bottom-32 md:h-full lg:right-64 lg:w-1/2"
            />
          </div>
        </div>
      </div>

      {/* pick a plan */}
      <section className="mx-auto md:max-w-screen-sm md:py-16 lg:w-3/4 lg:max-w-5xl">
        <Heading title="Pick your plan" />
        <div className="mx-auto w-11/12 py-12">
          <div className="flex flex-wrap items-center justify-between md:flex-nowrap">
            <Card plan="Monthly" price="$ 18 / mo" />
            <Card plan="Yearly" price="$15 / mo" />
          </div>
          <h3 className="pt-8 text-center font-text-secondary text-base font-normal">
            Your plan auto-renews at the end of 30 days from the 1st day you
            signed-up.
          </h3>
        </div>
      </section>

      {/* how it works */}
      <section className="mx-auto w-11/12 md:py-12 lg:w-[800px]">
        <Heading title="How it works?" />
        <div className="grid grid-cols-1 md:grid-cols-2 md:py-8">
          <div className="w-[340px] py-8">
            <img
              src="/images/illustration-1.png"
              className="object-fit h-full w-full"
            />
          </div>
          <div className="flex flex-col items-start justify-center">
            <h2 className="w-3/4 pb-5 font-text-primary text-3xl font-medium lg:text-4xl">
              Setup your profile & preferences
            </h2>
            <p className="font-text-secondary">
              Once you create an account, you can start to tell us your likes
              and dislikes so we can tailor the experience just for you.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 py-8 md:grid-cols-2">
          <div></div>
          <div className="relative">
            <div className="w-[300px] py-8">
              <img
                src="/images/illustration-2.png"
                alt=""
                className="object-fit h-full w-full"
              />
            </div>
            <h2 className="w-3/4 pb-5 font-text-primary text-3xl font-medium lg:text-4xl">
              Review your custom box
            </h2>
            <p className="font-text-secondary">
              Once we get to know you, we will show you the box we’ve crafted.
              This is your chance to approve it before we ship it to your house.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 py-8 md:grid-cols-2">
          <div className="w-[340px] py-8">
            <img
              src="/images/illustration-3.png"
              alt=""
              className="object-fit h-full w-full"
            />
          </div>
          <div className="flex flex-col items-start justify-center">
            <h2 className="w-3/4 pb-5 font-text-primary text-3xl font-medium lg:text-4xl">
              Try it on at home
            </h2>
            <p className="font-text-secondary">
              Your box will arrive within 3-5 days (usually sooner) and you get
              the joy to unbox your Upbox. Try it all on and send back whatever
              you’re not in love with.
            </p>
          </div>
        </div>

        <Hyperlink
          href="/"
          className="mx-auto mb-12 flex w-fit items-center justify-center rounded-full border-4 border-pink bg-white px-6 py-4 text-[18px] font-semibold uppercase transition-all duration-150 ease-linear hover:bg-pink hover:text-white md:mb-0"
        >
          try it for yourself
        </Hyperlink>
      </section>

      {/* social posts */}
      <section className="w-full bg-landing">
        <div className="mx-auto w-11/12 py-12 md:w-4/5 lg:max-w-screen-xl">
          <h1 className="pb-12 text-center font-text-primary text-4xl lg:text-5xl">
            Social Posts
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
            <div className="mb-32 h-[450px] md:mb-0 lg:h-[500px]">
              <img
                src="/images/post-1.png"
                alt=""
                className="h-full w-full object-cover"
              />
              <h3 className="pt-6 font-text-secondary text-2xl">
                How to rock the lip look that turns heads
              </h3>
            </div>
            <div className="mb-32 h-[450px] md:mb-0 lg:h-[500px]">
              <img
                src="/images/post-2.png"
                alt=""
                className="h-full w-full object-cover"
              />
              <h3 className="pt-6 font-text-secondary text-2xl">
                Find the perfect shade for the season
              </h3>
            </div>
            <div className="mb-32 h-[450px] md:mb-0 lg:h-[500px]">
              <img
                src="/images/post-3.png"
                alt=""
                className="h-full w-full object-cover"
              />
              <h3 className="pt-6 font-text-secondary text-2xl">
                The 5 eye shadow secrets you never know
              </h3>
            </div>
            <div className="mb-32 h-[450px] md:mb-0 lg:h-[500px]">
              <img
                src="/images/post-4.png"
                alt=""
                className="h-full w-full object-cover"
              />
              <h3 className="pt-6 font-text-secondary text-2xl">
                The pro-tips for at home hair dying
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* footer */}
      <footer className="mx-auto mt-24 w-11/12 rounded-md border border-border/50 bg-gray-100/50 py-8 px-6 md:px-0">
        <div className="mx-auto md:max-w-screen-sm lg:max-w-screen-xl">
          <div className="flex items-center justify-between pt-6 pb-12">
            <img
              src="/images/logo-main.png"
              alt=""
              className="w-[100px] md:w-[150px] lg:w-[200px]"
            />
            <ul className="hidden items-center justify-start md:flex">
              <li>
                <Hyperlink href="/">
                  <img
                    src="/images/icons/ig.png"
                    alt=""
                    className="mr-5 h-7 w-7"
                  />
                </Hyperlink>
              </li>
              <li>
                <Hyperlink href="/">
                  <img
                    src="/images/icons/fb.png"
                    alt=""
                    className="mx-5 h-7 w-7"
                  />
                </Hyperlink>
              </li>
              <li>
                <Hyperlink href="/">
                  <img
                    src="/images/icons/twitter.png"
                    alt=""
                    className="mx-5 h-7 w-7"
                  />
                </Hyperlink>
              </li>
              <li>
                <Hyperlink href="/">
                  <img
                    src="/images/icons/snap.png"
                    alt=""
                    className="ml-5 h-7 w-7"
                  />
                </Hyperlink>
              </li>
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-12 md:grid-cols-4">
            <div>
              <h5 className="pb-4 font-text-secondary text-xl font-semibold">
                Upbox
              </h5>
              <ul className="font-text-secondary">
                <li className="pb-2 font-text-secondary text-[14px] font-medium text-black transition-all duration-150 ease-linear hover:text-pink">
                  <Hyperlink href="/">Upbox Bag</Hyperlink>
                </li>
                <li className="pb-2 font-text-secondary text-[14px] font-medium text-black transition-all duration-150 ease-linear hover:text-pink">
                  <Hyperlink href="/">Upbox Box Platinum</Hyperlink>
                </li>
                <li className="pb-2 font-text-secondary text-[14px] font-medium text-black transition-all duration-150 ease-linear hover:text-pink">
                  <Hyperlink href="/">Upbox Box VIP</Hyperlink>
                </li>
                <li className="pb-2 font-text-secondary text-[14px] font-medium text-black transition-all duration-150 ease-linear hover:text-pink">
                  <Hyperlink href="/">Deals</Hyperlink>
                </li>
                <li className="pb-2 font-text-secondary text-[14px] font-medium text-black transition-all duration-150 ease-linear hover:text-pink">
                  <Hyperlink href="/">Seasonal Items</Hyperlink>
                </li>
                <li className="pb-2 font-text-secondary text-[14px] font-medium text-black transition-all duration-150 ease-linear hover:text-pink">
                  <Hyperlink href="/">Upbox Promise</Hyperlink>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="pb-4 font-text-secondary text-xl font-semibold">
                Find Us On
              </h5>
              <ul className="font-text-secondary">
                <li className="pb-2 font-text-secondary text-[14px] font-medium text-black transition-all duration-150 ease-linear hover:text-pink">
                  <Hyperlink href="/">Instagram</Hyperlink>
                </li>
                <li className="pb-2 font-text-secondary text-[14px] font-medium text-black transition-all duration-150 ease-linear hover:text-pink">
                  <Hyperlink href="/">Tiktok</Hyperlink>
                </li>
                <li className="pb-2 font-text-secondary text-[14px] font-medium text-black transition-all duration-150 ease-linear hover:text-pink">
                  <Hyperlink href="/">Facebook</Hyperlink>
                </li>
                <li className="pb-2 font-text-secondary text-[14px] font-medium text-black transition-all duration-150 ease-linear hover:text-pink">
                  <Hyperlink href="/">SnapChat</Hyperlink>
                </li>
                <li className="pb-2 font-text-secondary text-[14px] font-medium text-black transition-all duration-150 ease-linear hover:text-pink">
                  <Hyperlink href="/">Twitter</Hyperlink>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="pb-4 font-text-secondary text-xl font-semibold">
                Product
              </h5>
              <ul className="font-text-secondary">
                <li className="pb-2 font-text-secondary text-[14px] font-medium text-black transition-all duration-150 ease-linear hover:text-pink">
                  <Hyperlink href="/">Get the App</Hyperlink>
                </li>
                <li className="pb-2 font-text-secondary text-[14px] font-medium text-black transition-all duration-150 ease-linear hover:text-pink">
                  <Hyperlink href="/">Loyalty Program</Hyperlink>
                </li>
                <li className="pb-2 font-text-secondary text-[14px] font-medium text-black transition-all duration-150 ease-linear hover:text-pink">
                  <Hyperlink href="/">Affiliates</Hyperlink>
                </li>
                <li className="pb-2 font-text-secondary text-[14px] font-medium text-black transition-all duration-150 ease-linear hover:text-pink">
                  <Hyperlink href="/">Press</Hyperlink>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="pb-4 font-text-secondary text-xl font-semibold">
                Help
              </h5>
              <ul className="font-text-secondary">
                <li className="pb-2 font-text-secondary text-[14px] font-medium text-black transition-all duration-150 ease-linear hover:text-pink">
                  <Hyperlink href="/">Returns</Hyperlink>
                </li>
                <li className="pb-2 font-text-secondary text-[14px] font-medium text-black transition-all duration-150 ease-linear hover:text-pink">
                  <Hyperlink href="/">FAQ</Hyperlink>
                </li>
                <li className="pb-2 font-text-secondary text-[14px] font-medium text-black transition-all duration-150 ease-linear hover:text-pink">
                  <Hyperlink href="/">Contact</Hyperlink>
                </li>
                <li className="pb-2 font-text-secondary text-[14px] font-medium text-black transition-all duration-150 ease-linear hover:text-pink">
                  <Hyperlink href="/">Deals</Hyperlink>
                </li>
                <li className="pb-2 font-text-secondary text-[14px] font-medium text-black transition-all duration-150 ease-linear hover:text-pink">
                  <Hyperlink href="/">Community</Hyperlink>
                </li>
                <li className="pb-2 font-text-secondary text-[14px] font-medium text-black transition-all duration-150 ease-linear hover:text-pink">
                  <Hyperlink href="/">Videos</Hyperlink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <div className="mx-auto mb-12 w-11/12 rounded-md rounded-b-md border border-border/50 bg-gray-100/50 py-6 px-6 md:px-0">
        <ul className="mx-auto flex items-center justify-end font-text-secondary md:max-w-screen-sm lg:max-w-screen-xl">
          <li className="mr-5 pb-2 font-text-secondary text-[14px] font-medium text-black transition-all duration-150 ease-linear hover:text-pink">
            <Hyperlink href="/">Terms</Hyperlink>
          </li>
          <li className="pb-2 font-text-secondary text-[14px] font-medium text-black transition-all duration-150 ease-linear hover:text-pink">
            <Hyperlink href="/">Privacy Policy</Hyperlink>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Home
