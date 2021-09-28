import type { NextPage } from 'next';
import { connect } from 'react-redux';
import { useRouter } from "next/router";
import AuthLayout from '../components/Layout';
import Input from '../components/uielements/TextField';
import Button from '../components/uielements/Button';
import { H5 } from '../components/uielements/Typography';
import Link from '../components/uielements/Link';
import Form from '../components/uielements/Form';
import { doPasswordReset } from '../store/auth/actions';
import { useEffect, useState } from 'react'

type ErrorKeys = 'email' | 'password' | 'passwordConfirmation';
type SigninErrors = { [error in ErrorKeys]: string };

interface Props {
    dispatchDoResetPassword: Function,
    isFetching: boolean,
    errors?: SigninErrors,
    resetSuccessful: boolean,
};


const ResetPassword: NextPage<Props> = ({ dispatchDoResetPassword, isFetching, errors, resetSuccessful }) => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [passwordConfirmation, setPasswordConfirmation] = useState<string>('');
    const router = useRouter()
    const { resetToken } = router.query

    const hanldeEmailChange = (e: any) => setEmail(e.target?.value);
    const hanldePasswordChange = (e: any) => setPassword(e.target?.value);
    const hanldePasswordConfirmationChange = (e: any) => setPasswordConfirmation(e.target?.value);

    const doResetPassword = async () => {
        await dispatchDoResetPassword(email, password, passwordConfirmation, resetToken);
    }

    useEffect(() => {
        if (resetSuccessful) {
            router.push('/signin')
        }
    }, [resetSuccessful])

    return (
        <AuthLayout>
            <div className="text-center pt-2 pb-2">
                <H5>Change your Password</H5>
            </div>
            <div className="px-5 py-7">
                <Form>
                    <Input placeholder="Email address" error={errors?.email} value={email} onChange={hanldeEmailChange} />
                    <Input type="password" error={errors?.password} placeholder="Password" value={password} onChange={hanldePasswordChange} />
                    <Input type="password" error={errors?.passwordConfirmation} placeholder="Password Confirmation" value={passwordConfirmation} onChange={hanldePasswordConfirmationChange} />
                    <Button fullwith type="primary" disabled={isFetching} isLoading={isFetching} onClick={doResetPassword}>change my password</Button>
                </Form>
            </div>
            <div className="py-5">
                <div className="flex flex-row pr-5 pl-5">
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

const mapStateToProps = ({ auth }: any) => ({
    isFetching: auth.isFetching,
    errors: auth.errors || {},
    resetSuccessful: auth.resetSuccessful
});

const mapDispatchToProps = (dispatch: any) => ({
    dispatchDoResetPassword: (email: string, password: string, passwordConfirmation: string, token: string) => dispatch(doPasswordReset(email, password, passwordConfirmation, token)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ResetPassword)