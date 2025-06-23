// import { useState } from 'react';
import { useState } from 'react';
import Error from './Error';
import type { TUsers } from './Users';
import UserModal from './UserModal';
import Users from './Users';
import { useSuspenseQuery } from '@tanstack/react-query';


//fetch users from an API and display them in a list
const fetchUsers = async (): Promise<TUsers[]> => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    return response.json();
}

const UserList = () => {
    const [selectedUsers, setSelectedUsers] = useState<TUsers | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const { data: user, error } = useSuspenseQuery<TUsers[], Error>({
        queryKey: ['users'],
        queryFn: fetchUsers,
    });

    if (error) {
        return <Error error={error} />;
    }

    //handle modal open
    const openModal = (user: TUsers) => {
        console.log('Opening modal for user:', user);
        setSelectedUsers(user);
        setIsModalOpen(true);
    }

    return (
        <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-7 bg-gray-300'>
            {user && user.map(user => <Users key={user.id} user={user} openModal={openModal} />)}
            {isModalOpen && selectedUsers && (
                <UserModal
                    user={selectedUsers}
                    closeModal={() => {
                        setIsModalOpen(false);
                        setSelectedUsers(null);
                    }}
                />
            )}

        </div>
    );
}

export default UserList;
