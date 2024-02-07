<script>
    import { page } from '$app/stores';

    const { userId, postId } = $page.params;

    console.log($page.params.userId)
    console.log($page.params.postId)
    console.log(userId);
    console.log(postId);
</script>

<!-- http://localhost:5173/user/8/post/5 -->
<h1>User {userId}번 님의 Post {postId}번 내용입니다</h1>
<h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>