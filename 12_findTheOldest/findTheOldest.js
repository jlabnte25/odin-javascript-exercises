const findTheOldest = function(people) {

    // create a new array with people [name:, age:]
    function getTotalAge (person) {
        const yearOfDeath = person.yearOfDeath ? person.yearOfDeath : new Date().getFullYear();
        const computedAge = yearOfDeath - person.yearOfBirth;
        return computedAge
            //return {name: , age: computedAge};
        }

        //sort the new array according to age
        const arrangedArray = people.sort((a,b) => {
            return getTotalAge(b) - getTotalAge(a)});

        // return only the eldest
        return arrangedArray[0];

};

// Do not edit below this line
module.exports = findTheOldest;
