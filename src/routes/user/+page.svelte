
<script>
    import { page } from "$app/stores";
    import ComponentTest from "./componentTest.svelte";

    const { pathname, search, searchParams } = $page.url;

    console.log(pathname);
    console.log(search);
    console.log(searchParams);
    console.log(searchParams.get("key1"));

    const key1 = searchParams.get("key1");

</script>

<h1>User List</h1>
<div>
    <h3>pathname : {pathname}</h3>
    <h3>query String key1 : {key1}</h3>
</div>
<ComponentTest></ComponentTest>