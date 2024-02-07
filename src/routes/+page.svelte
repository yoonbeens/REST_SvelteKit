<script>
    import TestComponent from "./testComponent.svelte";
    const name = 'richard';
</script>

<h1>SvelteKit</h1>
<p>Visit
<br>
    <a href="/user">User</a>
<br>
user list</p>

<!-- export한 변수명과 import 한 곳에 있는 변수명이 같으면
    'data='이 생략 가능 -->
<TestComponent data={name}/>