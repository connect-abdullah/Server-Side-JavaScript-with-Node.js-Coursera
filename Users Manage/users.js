let users = [
    {
        "id": 1,
        "name": "User 1",
        "username": "user1",
        "email": "user1@test.com",
        "address": {
            "street": "Test Street 1",
            "suite": "Suite 1",
            "city": "Test City",
            "zipcode": "12345",
        }
    },
    {
        "id": 2,
        "name": "User 2",
        "username": "user2",
        "email": "user2@test.com",
        "address": {
            "street": "Test Street 2",
            "suite": "Suite 2",
            "city": "Test City",
            "zipcode": "12346",
        }
    }
];

const getUsers = () => {
    return Promise.resolve(users);
};

const getUserById = (id) => {
    const user = users.find(u => u.id === id);
    if (!user) {
        return Promise.reject('User does not exist');
    }
    return Promise.resolve([user]);
};

const addUser = (user) => {
    if (!user) {
        return Promise.reject('No user to be added');
    }
    users.push(user);
    return Promise.resolve(user);
};

module.exports = {
    getUsers,
    getUserById,
    addUser
}; 