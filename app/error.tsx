'use client'; // Error components must be Client components
import WarningTriangle from 'bootstrap-icons/icons/exclamation-triangle.svg'
import Image from 'next/image';
import { useEffect } from 'react';

export default function Error({
    error,
    reset,
}: {
    error: Error;
    reset: () => void;
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error);
    }, [error]);

    return (
        <div className=''>
            <div className='flex content-center justify-center p-4'>
                <Image src={WarningTriangle} alt="Warning Triangle"></Image>
            </div>
            <h2 className='text-center text-red-600'>Blunder!</h2>
            <div className='flex content-center justify-center p-4'>
                <button
                className='btn btn-danger'
                    onClick={
                        // Attempt to recover by trying to re-render the segment
                        () => reset()
                    }
                >
                    Retry
                </button>
            </div>
        </div>
    );
}

