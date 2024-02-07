import { db } from "$lib/database";
import { json } from "@sveltejs/kit"


//GET
async function getUser() {
    try {
        const user = await db.user.findMany();
        return user;
    } catch (error) {
        
    }
}

export async function GET() {
    const user = await getUser();
    return json(user);
    // return new Response(JSON.stringify(user));
    
}

//POST
async function createUser(obj) {
    try {
        const user = await db.user.create({
            data: { 
                email: obj.email,
                name: obj.name
            },
        });
        return user;
    } catch (error) {
        
    }
}

export async function POST(requestEvent) {
    const { request } = requestEvent;
    const obj  = await request.json();

    const newObj = {
        email: obj.email,
        name: obj.name
    }
    const res = await createUser(newObj);
    return json(res);
}



//PATCH
async function updateUser(obj) {
    try {
        const user = await db.user.update({
            where: { id: obj.id },
            data: { 
                email: obj.email,
                name: obj.name
            },
        });
        return user;
    } catch (error) {
        
    }
}


export async function PATCH({ request, params }) {    
    const { userId } = params;

    console.log(userId);
    const obj  = await request.json();
    const newObj = {
        id: parseInt(userId),
        email: obj.email,
        name: obj.name
    }
    const res = await updateUser(newObj);
    return json(res);
}


//DELETE

// 1
async function deleteUser(obj) {
    try {
        const user = await db.user.delete({
            where: { id: obj.id }
        });
        return user;
    } catch (error) {
        
    }
}

export async function DELETE({ params }) {    
    const { userId } = params;

    const res = await deleteUser(parseInt(userId));

    return json(res);
}


//2

// async function deleteUser(obj) {
//     try {
//         const user = await db.user.delete({
//             where: { id: obj.id }
//         });
//         return user;
//     } catch (error) {
        
//     }
// }


// export async function DELETE(requestEvent) {    
//     const request  = requestEvent;
//     const obj  = await request.json();

//     const res = await deleteUser(parseInt(obj.id));
//     return json(res);
// }