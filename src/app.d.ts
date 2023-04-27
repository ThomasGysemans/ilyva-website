// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
	}

	// This is how an author is described. It is a JavaScript object.
	// Each author will have its own section which this information.
	interface Author {
		firstname: string;
		lastname: string;
		quote: string;
		ad?: string;
		avatar: string; // the name of our default avatar's file
	}

	interface Screenshot {
		name: string;
		description: string;
	}
}

export {};
