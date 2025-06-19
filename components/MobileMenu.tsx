import Link from "next/link";

type ModileMenuProps = {
  links: IHeader[];
  isOpen: any;
  isFirstRender: any;
  onClose: any;
};

export default function MobileMenu({
  links,
  isOpen,
  isFirstRender,
  onClose,
}: ModileMenuProps) {

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    <div
      onClick={() => onClose()}
      className={`fixed z-10 w-full text-xl font-light lg:hidden ${isOpen ? "animate-slide-in" : `animate-slide-out ${isFirstRender ? "hidden" : ""}`}`}
    >
      <div
        className="bg-white min-h-screen grid grid-cols-1 place-content-start gap-y-16 px-8 py-28 text-right md:w-7/12 w-8/12 ml-auto shadow-md"
        aria-label="mobile"
      >
        {links &&
          links.map((link) => (
            <div
              key={link.href}
              className={`transition-colors duration-300 text-gray-800`}
            >
              <Link href={link.href}>{link.label}</Link>
            </div>
          ))}
      </div>
    </div>
  );
}