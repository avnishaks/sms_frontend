import { Player } from '@lottiefiles/react-lottie-player';
import { Loading, User } from '../lotties/index';




export default function AnimationComponent({ status }: { status: string }) {
  return (
    <>

      <div className="flex flex-col items-center justify-center h-screen">
        {status === 'loading' && (
          <Player
            autoplay
            loop
            src={Loading}
            style={{ height: '200px', width: '200px' }}
          />
        )}
      </div>
      {status === 'user' && (
        <Player
          autoplay
          loop
          src={User}
          style={{ height: '200px', width: '200px' }}
        />
      )}

      {status === 'users' && (
        <Player
          autoplay
          loop
          src={User}
          style={{ height: '100%', width: '100%' }}
        />
      )}
    </>


  );
};

