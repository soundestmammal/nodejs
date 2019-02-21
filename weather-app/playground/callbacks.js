const getUser = (id, callback) => {
    const user = {
        id: id,
        user: 'Harriet'
    };
    setTimeout( () => {
        callback(user);
    }, 2000);
};

getUser(31, (user) => {
    console.log(user);
});