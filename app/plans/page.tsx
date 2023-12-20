/* eslint-disable prettier/prettier */
import Nav from "@/components/nav"
import PlanCard from "@/components/plan/PlanCard";
const page = () => {
  return (
    <>
    <Nav />
    <section className="bg-gray-700 bg-[url('https://ik.imagekit.io/yqzsxknxfs/unsplash_rsD_jv_A8Yo.png?updatedAt=1702379673643')] bg-center bg-no-repeat top-0">
          <div className=" align-bottom max-w-screen-xl px-4 pt-32 pb-6 text-start lg:py-56">
              <h1 className="w-72 mb-4 text-3xl font-bold font-sans leading-none tracking-tight text-white md:text-5xl lg:text-6xl">Where do you wanna go next?</h1>
              <div className="mb-6">
    <input type="text" id="large-input" className="sm:text-md block w-full opacity-80 rounded-lg border border-gray-300 bg-white  p-4 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 mt-5" />
</div>
          </div>
      </section>
      <div className="p-5 text-2xl text-gray-600 font-semibold">
        Planned Trips
      </div>
      <div className="p-5">
      <PlanCard />
      </div>
      </>
  );
};

export default page;
