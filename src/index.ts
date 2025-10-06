// You can start writing your code here
// The code below is for testing Typescript setup and debugging

interface User {
	name: string;
	age: number;
	gender: Gender;
}

enum Gender {
	male,
	female,
}

for (let i = 0; i < 10; ++i) {
	const user: User = {
		name: `User${i}`,
		age: 20 + i,
		gender: i % 2 === 0 ? Gender.male : Gender.female,
	};
	console.log(user);
}
