/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { db } from "@/server/db";

export const  POST = async(req:Request )=>{
   const  {data}  = await  req.json();



   // const  emailAddress = data.email_addresses[0].email_address;
    const FirstName = data.first_name;
   const   LastName = data.last_name;
    const imageUrl = data.image_url;
    const id = data.id;



   await db.user.create({
       data:{
           id: id,
           emailAddress: "example1@example.com",
            firstName: FirstName,
       lastName:LastName,
       imageUrl: imageUrl,
           
       }
   })
   
      console.log(data.email_addresses)
      return Response.json({mesaage: "Request successful"}, {status: 200})

}