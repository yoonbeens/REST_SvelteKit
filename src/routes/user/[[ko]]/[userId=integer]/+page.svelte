<script>
    //아래는 컨벤션 코드
    import { page } from '$app/stores';
    // const { pathname, search, searchParams } = $page.url;

    // const { params } = $page;
    // const { userId } = params; 
    // ==

    const { userId } = $page.params;
    const { ko } = $page.params;

    console.log(userId);
    console.log($page.params.userId)
    console.log(ko);
</script>

<!-- http://localhost:5173/user/3 -->
<!-- http://localhost:5173/user/en/3 -->
{#if ko === 'en'}
    <h1>user id : {userId}</h1>
{:else}
    <h1>유저 아이디 : {userId}</h1>
{/if}