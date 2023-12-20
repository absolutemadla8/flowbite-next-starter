const PlanCard = () => {
    return (
      <div className="max-w-sm rounded-lg border border-gray-200 bg-white shadow-md">
        <a href="#">
          <img
            className=""
            src="https://ik.imagekit.io/yqzsxknxfs/Group%2033318.png?updatedAt=1702388036885"
            alt=""
          />
        </a>
        <div className="p-5">
          <h3 className="mb-2 text-2xl font-bold font-sans text-gray-800 dark:text-white">
            Goa Beach Serenity
          </h3>
          <div className="mb-2 flex items-center">
          <div class="flex -space-x-4 rtl:space-x-reverse">
                <img class="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src="/docs/images/people/profile-picture-5.jpg" alt="" />
                <img class="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src="/docs/images/people/profile-picture-2.jpg" alt="" />
                <img class="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src="/docs/images/people/profile-picture-3.jpg" alt="" />
                <a class="flex items-center justify-center w-10 h-10 text-xs font-medium text-white bg-gray-700 border-2 border-white rounded-full hover:bg-gray-600 dark:border-gray-800" href="#">+99</a>
        </div>
          </div>
          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 13.43a3.12 3.12 0 1 0 0-6.24 3.12 3.12 0 0 0 0 6.24Z" stroke="#000000" stroke-width="1.5"></path><path d="M3.62 8.49c1.97-8.66 14.8-8.65 16.76.01 1.15 5.08-2.01 9.38-4.78 12.04a5.193 5.193 0 0 1-7.21 0c-2.76-2.66-5.92-6.97-4.77-12.05Z" stroke="#000000" stroke-width="1.5"></path></svg>
            <p className="text-lg font-medium text-gray-800">Goa, India</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default PlanCard;
  