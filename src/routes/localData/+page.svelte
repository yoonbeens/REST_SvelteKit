<script>

    export let data;

    let { users } = data;
    
    console.log(users);
</script>

{#each users as user}
    <h4>{user.id}</h4>
    <h4>{user.email}</h4>
    <h4>{user.name}</h4>
{/each}
