export const statusConfig = {
        available: {
            color: 'bg-green-500',
            text: 'Available for opportunities',
            animate: true
        },
        busy: {
            color: 'bg-yellow-500',
            text: 'A little busy but still taking jobs',
            animate: true
        },
        unavailable: {
            color: 'bg-red-500',
            text: 'Not currently available for opportunities',
            animate: false
        }
};

export const availabilityStatus: 'available' | 'busy' | 'unavailable' = 'available';