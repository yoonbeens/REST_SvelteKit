import { db } from "$lib/database";


//post
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

//form 태그로 할 거면 svelteKit이 제공하는 이 형식의 컨벤션 코드를 따라야 한다

export const actions = {
    form1: async (requestEvent) => {

        const { request } = requestEvent;
        const body = await request.formData();

        const id = body.get('formId');
        const email = body.get('formEmail');
        const name = body.get('formName');
        
        console.log(`id: ${id}`);
        console.log(`email: ${email}`);
        console.log(`name: ${name}`);

        const obj = {
            email: email,
            name: name
        }
        const res = await createUser(obj);

    },

    form2: async (requestEvent) => {

        const { request } = requestEvent;
        const { url } = requestEvent;
        // const { searchParams } = url;

        const body = await request.formData();
        
        const age = body.get('formAge');
        
        console.log(`age: ${age}`);
        console.log(url);
        // console.log(`url: ${request}`);
        // console.log(searchParams.get("id"));
    }

}