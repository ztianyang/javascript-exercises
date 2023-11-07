const getAge = function(person) {
    if ("yearOfDeath" in person) {
        return person.yearOfDeath - person.yearOfBirth;
    } else {
        return new Date().getFullYear() - person.yearOfBirth;
    }
};

const findTheOldest = function(people) {
    return people.reduce((oldest, person) => {
        if (getAge(person) > getAge(oldest)) {
            return person;
        } else {
            return oldest;
        }
    });
};

// Do not edit below this line
module.exports = findTheOldest;
