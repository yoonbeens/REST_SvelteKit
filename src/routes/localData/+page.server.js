import { db } from "$lib/database";

async function getUser() {
    try {
        const users = await db.user.findMany();
        return users;
    } catch (error) {
        
    }
}

//load와 return{}은 컨벤션
export const load = async () => {

    const users = await getUser();

    console.log(users);

    return {users};
}
