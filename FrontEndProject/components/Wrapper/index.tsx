import {ReactElement} from "react";
import Head from "next/head";
import Header from "../Header";

type PropTypes = {
    children?: (ReactElement | string | boolean)[] | (ReactElement | string | boolean),
    title: string,
    description: string
}

export default function Wrapper({children, title, description}: PropTypes) {
    return (
        <div className={'bg-white'}>
            <Head>
                <title>
                    {title}
                </title>
                <meta name={'description'} content={description}/>
                <link
                    rel={'icon'}
                    type={'image/jpg'}
                    sizes={'32x32'}
                    href={'/neuromancerIcon.jpg'}
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <div className={'py-10 max-w-7xl mx-auto px-2 sm:px-4 lg:px-8'}>
                {children}
            </div>
        </div>
    )
}