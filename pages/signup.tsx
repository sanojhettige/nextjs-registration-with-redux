import type { NextPage } from 'next';
import { useRouter } from "next/router";
import { connect } from 'react-redux';
import AuthLayout from '../components/Layout';
import Input from '../components/uielements/TextField';
import Button from '../components/uielements/Button';
import { H5, Small } from '../components/uielements/Typography';
import Link from '../components/uielements/Link';
import Form from '../components/uielements/Form';
import { useEffect, useState } from 'react'
import { doSignUp } from '../store/auth/actions';

type ErrorKeys = 'name' | 'email' | 'password' | 'passwordConfirmation';
type SignUpErrors = { [error in ErrorKeys]: string };


interface Props {
    dispatchDoSignUp: Function,
    isFetching: boolean,
    errors?: SignUpErrors | undefined,
    registrationSuccessful: boolean,
}

const SignUp: NextPage<Props> = ({ dispatchDoSignUp, isFetching, errors, registrationSuccessful }: Props) => {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [passwordConfirmation, setPasswordConfirmation] = useState<string>('');
    const router = useRouter()

    const hanldeNameChange = (e: any) => setName(e.target?.value);
    const hanldeEmailChange = (e: any) => setEmail(e.target?.value);
    const hanldePasswordChange = (e: any) => setPassword(e.target?.value);
    const hanldeCpasswordChange = (e: any) => setPasswordConfirmation(e.target?.value);

    const doUserSignUp = async () => {
        await dispatchDoSignUp(name, email);
    }

    useEffect(() => {
        if (registrationSuccessful) {
            router.push('/signin')
        }
    }, [registrationSuccessful])
    return (
        <AuthLayout>
            <div className="text-center pt-2 pb-2">
                <H5 className="typing-effect">Enter your your details for the registration</H5>
            </div>
            <div className="px-5 py-7">
                <Form>
                    <Input placeholder="Name" error={errors?.name} value={name} onChange={hanldeNameChange} />
                    <Input type="email" placeholder="Email" error={errors?.email} value={email} onChange={hanldeEmailChange} />
                    <Input type="password" placeholder="Password" error={errors?.password} value={password} onChange={hanldePasswordChange} />
                    <Input type="password" placeholder="Retype Password" error={errors?.passwordConfirmation} value={passwordConfirmation} onChange={hanldeCpasswordChange} />
                    <Button type="primary" isLoading={isFetching} disabled={isFetching} onClick={doUserSignUp}>sign up</Button>
                </Form>
            </div>
            <div className="py-5">
                <div className="flex flex-row pr-5 pl-5">
                    <div className="flex-grow text-center sm:text-left whitespace-nowrap">
                        <Link to="/forgot-password"> Forgot Password </Link>
                    </div>
                    <div className="flex-grow text-center sm:text-right whitespace-nowrap">
                        <Link to="/signin">
                            SignIn
                        </Link>
                    </div>
                </div>
            </div>
        </AuthLayout>
    )
}

const mapStateToProps = ({ auth }: any) => ({
    isFetching: auth.isFetching,
    errors: auth.errors,
    registrationSuccessful: auth.registrationSuccessful
});

const mapDispatchToProps = (dispatch: any) => ({
    dispatchDoSignUp: (name: string, email: string, password: string, passwordConfirmation: string) => dispatch(doSignUp(name, email, password, passwordConfirmation)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)