<script>
    import { page } from "$app/stores";
    const { searchParams } = $page.url;

    console.log(searchParams);
</script>

<h4>code : {searchParams.get('code')}</h4>