import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

const userList = [
    {name: "hablu", password: "1234"},
    {name: "dablu", password: "5678"},
    {name: "kablu", password: "9012"},
]

export const authOptions = {


    // Configure one or more authentication providers
    providers: [
        CredentialsProvider({
            // sign in with {name} button
            name: 'Credentials',
            
            //from input
            credentials: {
                username: { label: "Username", type: "text", placeholder: "jsmith" },
                password: { label: "Password", type: "password" },
                SecretCode: { label: "Secret Code", type: "number", placeholder: "enter Code" },
            },
            async authorize(credentials, req) {
               const { username, password, SecretCode } = credentials;

               const user = userList.find(u => u.name == username);
               if(!user) return null;

               const passwordMatch = user.password === password;
               if(passwordMatch) return user;

                return null
            }
        })
        // ...add more providers here
    ],
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };