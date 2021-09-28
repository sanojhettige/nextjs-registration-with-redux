import { PropsWithChildren } from 'react'
import Head from 'next/head'

interface Props {
    title?: string,
    children: React.ReactNode,
}

const Layout = ({ title = 'Welcome to NextJs Auth By Sanoj', children }: PropsWithChildren<Props>) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta charSet="utf-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="description" content="Nextjs Auth System using react typescript and tailwindcss" />
                <meta name="author" content="Sanoj Hettige" />
                <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1" />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
                <meta name="apple-touch-fullscreen" content="yes"></meta>
            </Head>
            <main>
                <div className="min-h-screen bg-gray-100 flex flex-col justify-center sm:py-12">
                    <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
                        <div className="bg-white shadow w-full rounded-lg divide-y divide-gray-200">
                            {children}
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Layout;