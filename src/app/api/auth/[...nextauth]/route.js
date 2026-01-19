import { dbConnect } from "@/lib/dbConnect";
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from 'bcryptjs';

export const authOptions = {


    // Configure one or more authentication providers
    providers: [
        CredentialsProvider({
            // sign in with {name} button
            name: 'Credentials',

            //from input
            credentials: {
                email: { label: "email", type: "email", placeholder: "Enter your email" },
                password: { label: "Password", type: "password", placeholder: "Enter your password" }
            },
            async authorize(credentials, req) {
               const { email, password } = credentials;

            //    const user = userList.find(u => u.name == username);

            const user = await dbConnect("users").findOne({email: email});

               if(!user) return null;

            //    const passwordMatch = user.password === password;
            const passwordMatch = await bcrypt.compare(password, user.password);
               if(passwordMatch) return user;

                return null
            }
        })
        // ...add more providers here
    ],
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };


// import { dbConnect } from "@/lib/dbConnect";
// import NextAuth from "next-auth";
// import CredentialsProvider from "next-auth/providers/credentials";
// import bcrypt from "bcryptjs";

// export const authOptions = {
//     providers: [
//         CredentialsProvider({
//             name: "Credentials",

//             credentials: {
//                 email: {
//                     label: "Email",
//                     type: "email",
//                     placeholder: "Enter your email",
//                 },
//                 password: {
//                     label: "Password",
//                     type: "password",
//                     placeholder: "Enter your password",
//                 },
//             },

//             async authorize(credentials) {
//                 const { email, password } = credentials;

//                 const user = await dbConnect("users").findOne({ email });

//                 if (!user) return null;

//                 const passwordMatch = await bcrypt.compare(
//                     password,
//                     user.password
//                 );

//                 if (!passwordMatch) return null;

//                 // ⚠️ Important: password পাঠানো যাবে না
//                 return {
//                     id: user._id.toString(),
//                     name: user.name || "",
//                     email: user.email,
//                 };
//             },
//         }),
//     ],

//     session: {
//         strategy: "jwt",
//     },

//     pages: {
//         signIn: "/login", // তোমার কাস্টম লগইন পেজ
//     },

//     callbacks: {
//         async redirect({ url, baseUrl }) {
//             // ✅ লগইনের পর সবসময় Home এ যাবে
//             return baseUrl; // "/" === Home page
//         },
//     },

//     secret: process.env.NEXTAUTH_SECRET,
// };

// const handler = NextAuth(authOptions);

// export { handler as GET, handler as POST };
