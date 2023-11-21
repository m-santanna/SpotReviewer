import { SignIn } from '@clerk/nextjs'

const SignInPage = () => {
  return (
    <div className="full-screen flex-center">
      <SignIn />
    </div>
  )
}

export default SignInPage
