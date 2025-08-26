import { db } from "@/server/db";


await db.user.create({
    data:{
        emailAddress: "example123@gmail.com",
        firstName: "John",
        lastName:"Wick",

    }
})
console.log("Done---------->")