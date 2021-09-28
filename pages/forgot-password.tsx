import type { NextPage } from 'next';
import { connect } from 'react-redux';
import AuthLayout from '../components/Layout';
import Input from '../components/uielements/TextField';
import Button from '../components/uielements/Button';
import { H5 } from '../components/uielements/Typography';
import Link from '../components/uielements/Link';
import Form from '../components/uielements/Form';
import { useState } from 'react'
import { sendPasswordResetToken } from '../store/auth/actions';


type ErrorKeys = 'email'
type SigninErrors = { [error in ErrorKeys]: string };

interface Props {
    dispatchDoSendResetToken: Function,
    isFetching: boolean,
    errors?: SigninErrors,
};


const ForgotPassword: NextPage<Props> = ({ dispatchDoSendResetToken, isFetching, errors }) => {
    const [email, setEmail] = useState<string>('');

    const hanldeEmailChange = (e: any) => setEmail(e.target?.value);

    const doRequestResetToken = async () => {
        await dispatchDoSendResetToken(email);
    }

    return (
        <AuthLayout>
            <div className="text-center pt-2 pb-2">
                <H5 className="typing-effect">Enter your user account's registered email address.</H5>
            </div>
            <div className="px-5 py-7">
                <Form>
                    <Input type="email" error={errors?.email} placeholder="Enter your email address" value={email} onChange={hanldeEmailChange} />
                    <Button type="primary" onClick={doRequestResetToken} isLoading={isFetching} disabled={isFetching} fullwith>send password reset email</Button>
                </Form>
            </div>
            <div className="py-5">
                <div className="flex flex-row pr-5 pl-5">
                    <div className="flex-grow text-center sm:text-left whitespace-nowrap">
                        <Link to="/signin"> Sign In </Link>
                    </div>
                </div>
            </div>
        </AuthLayout>
    )
}

const mapStateToProps = ({ auth }: any) => ({
    isFetching: auth.isFetching,
    errors: auth.errors || {},
});

const mapDispatchToProps = (dispatch: any) => ({
    dispatchDoSendResetToken: (email: string) => dispatch(sendPasswordResetToken(email)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassword)