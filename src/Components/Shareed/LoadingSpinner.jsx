import React from 'react';

const LoadingSpinner = () => {
    return (
        <div>
            render(<Puff
                visible={true}
                height="80"
                width="80"
                color="#4fa94d"
                ariaLabel="puff-loading"
                wrapperStyle={{}}
                wrapperClass=""
            />)
        </div>
    );
};

export default LoadingSpinner;