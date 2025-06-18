import Link from "next/link";

export default function Header({ links }: HeaderProps) {

  return (
    <div className="hidden lg:grid grid-cols-3 items-center">
      <div className="col-span-1" />
      <div className="col-span-1 flex justify-center">
        <ul className="flex gap-x-8 list-none">
          {links &&
            links.map((link) => (
              <li
                key={link.href}
                className="hover:text-black transition-colors duration-300"
              >
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}