function generateRandomEmail() {
    const randomNumber = Math.floor(Math.random() * 10000);
    return `user${randomNumber}@test.com`;
}

function generateRandomName() {
    const randomNumber = Math.floor(Math.random() * 1000);
    return `User${randomNumber}`;
}

module.exports = {
    generateRandomEmail,
    generateRandomName
};

//"I use utility/helper files to store reusable functions such as generating random test data, date utilities, or common helper methods. 
// This avoids code duplication and improves maintainability."