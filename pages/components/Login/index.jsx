const Login = () => {
    return (
        <>
            <div className="text-center w-full">
                <button onClick={() => signIn('google')} className="bg-white p-2 px-4 rounded-md">login with google</button>
            </div>
        </>
    )
}

export default Login