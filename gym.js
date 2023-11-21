class Gymnasium {
    constructor(gym_id, name, address, telephoneNumber) {
    this.gym_id = gym_id;
    this.name = name;
    this.address = address;
    this.telephoneNumber = telephoneNumber;
    }
}

class Member {
    constructor(member_id, lastName, firstName, address, dateOfBirth, gender) {
    this.member_id = member_id;
    this.lastName = lastName;
    this.firstName = firstName;
    this.address = address;
    this.dateOfBirth = dateOfBirth;
    this.gender = gender;
    }
}

class Session {
    constructor(session_id, typeOfSport, schedule, gymnasium) {
    this.session_id = session_id;
    this.typeOfSport = typeOfSport;
    this.schedule = schedule;
    this.gymnasium = gymnasium;
    this.members = []; // Array to store registered members for this session
    this.coaches = []; // Array to store assigned coaches for this session
}

    registerMember(member) {
        this.members.push(member);
    }

    assignCoach(coach) {
        this.coaches.push(coach);
    }
}

class Coach {
    constructor(coach_id, lastName, firstName, age, specialty) {
        this.coach_id = coach_id;
        this.lastName = lastName;
        this.firstName = firstName;
        this.age = age;
        this.specialty = specialty;
    }
}

// Example usage:
const gym = new Gymnasium(1, "AZ Gym", "230 Azali Main Street", "+2349065003698");
const session = new Session(1, "Yoga", "Monday, 6 PM", gym);
const member1 = new Member(1, "Gift", "James", "456 Yaba Street", "09087364731", "Male");
const member2 = new Member(2, "Great", "Jane", "789 Oak Avenue", "08098739201", "Female");
const coach1 = new Coach(1, "Johnson", "Mike", 35, "Yoga Instructor");
const coach2 = new Coach(2, "Adams", "Sarah", 28, "Fitness Trainer");

session.registerMember(member1);
session.registerMember(member2);
session.assignCoach(coach1);
session.assignCoach(coach2);

console.log(session.members);
console.log(session.coaches);
