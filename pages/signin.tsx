import type { NextPage } from 'next';
import { connect } from 'react-redux';
import AuthLayout from '../components/Layout';
import TextField from '../components/uielements/TextField';
import Button from '../components/uielements/Button';
import { H5 } from '../components/uielements/Typography';
import Link from '../components/uielements/Link';
import Form from '../components/uielements/Form';
import { doSignIn } from '../store/auth/actions';
import { getProfile } from '../store/user/actions';
import { useEffect, useState } from 'react'

type ErrorKeys = 'username' | 'password';
type SigninErrors = { [error in ErrorKeys]: string };

interface Props {
    dispatchDoSignIn: Function,
    dispatchGetProfile: Function,
    isFetching: boolean,
    errors?: SigninErrors,
    isAuthorized: boolean,
};


const SignIn: NextPage<Props> = ({ dispatchDoSignIn, isFetching, errors, isAuthorized, dispatchGetProfile, profile }) => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const hanldeUsernameChange = (e: any) => setUsername(e.target?.value);
    const hanldePasswordChange = (e: any) => setPassword(e.target?.value);

    const doUserSignIn = async () => await dispatchDoSignIn(username, password);

    const getProfile = async () => await dispatchGetProfile();

    // on update authorization
    useEffect(() => {
        if (isAuthorized) {
            getProfile();
        }
    }, [isAuthorized]);

    useEffect(() => {
        // redirect here
    }, [profile]);

    return (
        <AuthLayout>
            <div className="text-center pt-2 pb-2">
                <H5>Login to Dashboard</H5>
            </div>
            <div className="px-5 py-7">
                <Form>
                    <TextField placeholder="Username" error={errors?.username} value={username} onChange={hanldeUsernameChange} />
                    <TextField type="password" error={errors?.password} placeholder="Password" value={password} onChange={hanldePasswordChange} />
                    <Button type="primary" disabled={isFetching} isLoading={isFetching} onClick={doUserSignIn}>sign in</Button>
                </Form>
            </div>

            <div className="py-5">
                <div className="flex flex-row pr-5 pl-5">
                    <div className="flex-grow text-center sm:text-left whitespace-nowrap">
                        <Link to="/forgot-password"> Forgot Password </Link>
                    </div>
                    <div className="flex-grow text-center sm:text-right whitespace-nowrap">
                        <Link to="/signup">
                            Sign Up
                        </Link>
                    </div>
                </div>
            </div>
        </AuthLayout>
    )
}

const mapStateToProps = ({ auth, user }: any) => ({
    isFetching: auth.isFetching || user.isGettingProfile,
    errors: auth.errors || {},
    isAuthorized: auth.isAuthorized,
    profile: user.profile,
});

const mapDispatchToProps = (dispatch: any) => ({
    dispatchDoSignIn: (username: string, password: string) => dispatch(doSignIn(username, password)),
    dispatchGetProfile: () => dispatch(getProfile())
})

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)