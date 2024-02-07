<script>
    import { page } from '$app/stores';

    const { slug } = $page.params;
    console.log(slug);

    const slugArr = $page.params.slug.split('/');
    console.log(slugArr);
// http://localhost:5173/user/8/post/5/comment/3/asdf/jkl

</script>

<h1>Rest Parameters</h1>
<h2>[...slug] = {slug}</h2>

{#each slugArr as slug, i}
<h4>slug {i+1} : {slug}</h4>
{/each}