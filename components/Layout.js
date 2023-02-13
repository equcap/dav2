import Link from "next/link";
import { useRouter } from "next/router";

import { ConnectButton } from "web3uikit";

export default function Layout({ children }) {
  const router = useRouter();
  const menuItems = [
    {
      href: "/",
      title: "Home",
    },
    {
      href: "/auckland",
      title: "Auckland",
    },
    {
      href: "/wellington",
      title: "Wellington",
    },
    {
      href: "/christchurch",
      title: "Christchurch",
    },
    {
      href: "/about",
      title: "About",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-blue-200 text-4xl sticky top-0 h-20 flex justify-center items-center font-semibold">
        DonateAssist
        <div className>
          <ConnectButton moralisAuth={false} />
        </div>
      </header>
      <div className="flex flex-col md:flex-row flex-1">
        <aside className="bg-blue-100 w-full md:w-60">
          <nav>
            <ul>
              {menuItems.map(({ href, title }) => (
                <li className="m-2" key={title}>
                  <Link legacyBehavior href={href}>
                    <a
                      className={`flex p-2 bg-blue-200 rounded hover:bg-blue-400 cursor-pointer ${
                        router.asPath === href && "bg-blue-600 text-white"
                      }`}
                    >
                      {title}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
}
