const getUser = (id, callback) => {
    const user = {
        id: id,
        user: 'Name'
    }
}

getUser(31, (user) => {
    console.log(user);
});