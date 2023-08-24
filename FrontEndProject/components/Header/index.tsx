import Image from "next/image";
import navigation from "./navigation";
import {useWeb3React} from "@web3-react/core";
import useEagerConnect from "../../hooks/useEagerConnect";
import Account from "../Account";
import {useRouter} from "next/router";
import {classNames} from "../../utils/utils";

export default function Header() {
    const {account, library} = useWeb3React()
    const triedToEagerConnect = useEagerConnect()
    const router = useRouter()

    return (
        <header className="bg-indigo-600">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
                <div className="w-full py-2 flex items-center justify-between border-b border-indigo-500 lg:border-none">
                    <div className="flex items-center">
                        <a href="#">
                            <span className="sr-only">Front End Project</span>
                            <Image src={'/neuromancerIcon.jpg'} className={'rounded'} height={48} width={48}/>
                        </a>
                        <div className="hidden ml-10 space-x-8 lg:block">
                            {navigation.map((link) => ( <a key={link.name} href={link.href}
                                          className={classNames(
                                              "text-base font-medium text-white hover:text-indigo-50",
                                              `${router.pathname === link.href ? 'border-b-2 border-b-amber-200' : ''}`
                                          )}>
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className="ml-10 space-x-4">
                        <Account triedToEagerConnect={triedToEagerConnect}/>
                    </div>
                </div>
                <div className="py-4 flex flex-wrap justify-center space-x-6 lg:hidden">
                    {navigation.map((link) => (
                        <a key={link.name} href={link.href}
                           className={classNames(
                               "text-base font-medium text-white hover:text-indigo-50",
                               `${router.pathname === link.href ? 'border-b-2 border-b-amber-200' : ''}`
                           )}>
                            {link.name}
                        </a>
                    ))}
                </div>
            </nav>
        </header>
    )
}
