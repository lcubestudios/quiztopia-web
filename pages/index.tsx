import {useRouter} from 'next/router';
import {usePrivy} from '@privy-io/react-auth';
import {useEffect} from 'react';

export default function LoginPage() {
	const router = useRouter();
  const {
    ready,
    authenticated,
		login
	} = usePrivy();

	const handleAuthenticate = () => {
		const isUser = false
		if (isUser) {
			router.push('/dashboard');
		}
		else {
			router.push('/register');
		}
	}

  useEffect(() => {
    if (ready && authenticated) {
      handleAuthenticate()
    }
  }, [ready, authenticated, router]);

  return (
    <>
      <main className="flex min-h-screen min-w-full">
        <div className="flex flex-1 p-6 justify-center items-center">
          <div>
            <div className="text-center">
							<h2>Welcome to</h2>
              <h1 className="text-jumbo">Quiztopia</h1>
            </div>
            <div className="mt-6 flex justify-center text-center">
              <button
                className="bg-accent-primary hover:bg-accent-secondary py-3 px-6 text-white rounded-lg"
                onClick={login}
              >
                Log in
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
