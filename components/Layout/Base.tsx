import { PropsWithChildren, useEffect } from 'react'
import Head from 'next/head'
import { connect } from 'react-redux';
import Link from '../uielements/Link';
import Button from '../uielements/Button';
import { signOut } from '../../store/auth/actions';
import { getProfile } from '../../store/user/actions';

interface Props {
    title?: string,
    children: React.ReactNode,
    dispatchDoSignOut?: Function,
    isAuthorized: boolean,
    dispatchGetProfile: Function
}

const BaseLayout = ({ title = 'Welcome to NextJs Auth By Sanoj', children, dispatchDoSignOut, isAuthorized, dispatchGetProfile, profile }: PropsWithChildren<Props>) => {

    const doSignOut = () => {
        dispatchDoSignOut();
    }

    const getProfile = async () => await dispatchGetProfile();


    useEffect(() => {
        getProfile();
    }, [profile]);

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
                <nav className="bg-primary-500 p-2 mt-0 w-full h-16">
                    <div className="container mx-auto flex flex-wrap items-center">
                        <div className="flex w-full md:w-1/2 justify-center md:justify-start text-white font-extrabold">
                            <a className="text-white no-underline hover:text-white hover:no-underline" href="#">
                                <span className="text-2xl pl-2 text-white-500"><i className="em em-grinning"></i> NextJS Redux Auth</span>
                            </a>
                        </div>
                        <div className="flex w-full pt-2 content-center justify-between md:w-1/2 md:justify-end">
                            <ul className="list-reset flex justify-between flex-1 md:flex-none items-center">
                                {!isAuthorized && (
                                    <>
                                        <li className="mr-3">
                                            <Link to="/signin" className="text-white-500">Sign In</Link>
                                        </li>
                                        <li className="mr-3">
                                            <Link to="/signup" className="text-white-500">Sign Up</Link>
                                        </li>
                                    </>
                                )}
                                {isAuthorized && (
                                    <li className="mr-3">
                                        <Button type="link" onClick={doSignOut}>Sign Out</Button>
                                    </li>
                                )}

                            </ul>
                        </div>
                    </div>
                </nav>

                <div className="min-h-screen bg-gray-100 flex flex-col justify-center sm:py-12">
                    <div className="p-10 xs:p-0 mx-auto">
                        <div className="bg-white w-full rounded-lg divide-y divide-gray-200">
                            {children}
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
const mapStateToProps = ({ auth, user }: any) => ({
    isFetching: auth.isFetching || user.isGettingProfile,
    profile: user.profile || {},
    isAuthorized: auth.isAuthorized
});

const mapDispatchToProps = (dispatch: any) => ({
    dispatchDoSignOut: () => dispatch(signOut()),
    dispatchGetProfile: () => dispatch(getProfile()),
})

export default connect(mapStateToProps, mapDispatchToProps)(BaseLayout)