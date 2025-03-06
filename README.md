This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

Live site: [https://contact-list-nextjs-liart.vercel.app/](https://contact-list-nextjs-liart.vercel.app/).

### What I learned

## Using a library for form validation
Using libraries can be really helpful for complex processes, like form validation.

This project uses zod, zod schema object to validate data on the frontend and backend. Using a library that can do both means the schema can be shared.

React hook form makes managing the form data, validation and errors more straightforward.

I started by validating using my own logic. Although it functioned, I did not find the code I had written easy to read and therefore maintain. Switching to a library felt like the right thing to do.

Subsequently, it was straightforward to re-use my form component to edit a contact. React hook form made this easy by allowing me to pass the contact data into the form.

## Allowing parent to manage state of child
useImperateHandle hook and forwardRefs allowed me to do this. I did not want the state of a toast or modal to be managed by the parent. However, state is encasulated and private in React. It can be passed down but passing it up to the parent is not so straightforward.

It is possible to useContext. This was a solution I used in this project to hold the data for all the contacts once it had been loaded from the database. However, it didn't feel like the right solution for the toast and modal alerts. These should keep their individual state.

So, useImperative handle can be used to create an object which contains functions or variables. This object is then accessible by reference. The component is held as a reference in the parent and this reference is used to access the object in the child.

## Forcing a re-render
I understand this is not desireable as the more renders the greater the resource. However, in this situation it seemed like an elegant solution. This app caches the contacts. It does this by useEffect on app load and then stores the contacts in state. The contacts are then available across the app by way of useContext.

However, when the app interacts with the database to delete or update a contact the state of contacts is not updated.

The solution was to create another context that holds an empty object and to make it a dependency of the useEffect for contacts. When a contact is updated or deleted the empty object can be replaced with another empty object. This change of state in the dependency array forces useEffect to run, fetching the new state of contacts from the database and re-rendering with that new data.

## TypeScript
I discovered a resource for TypeScript in React.

https://react-typescript-cheatsheet.netlify.app/

This gives useful models of types for React specific situations. It was very useful in figuring out how to make useImperativeHandle and forwardRefs type safe.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.