const Nav = () => {
  return (
    <nav className="border-gray-200 dark:bg-gray-900 absolute max-w-full justify-center">
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
        <a
          href="https://flowbite.com/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src="https://ik.imagekit.io/yqzsxknxfs/link-drop%201(1).png?updatedAt=1702363711255"
            className=" h-10"
            alt="Flowbite Logo"
          />
        </a>
      </div>
    </nav>
  );
};

export default Nav;
