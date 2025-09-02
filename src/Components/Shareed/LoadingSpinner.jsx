import {PuffLoader} from 'react-spinners'

const LoadingSpinner = () => {
    return (
        <div className='flex flex-col items-center justify-center min-h-screen'>
            <PuffLoader 
            size='80px'
            speedMultiplier={2}
            color='#1cab19' />
        </div>
    );
};

export default LoadingSpinner;