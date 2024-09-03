<script>
	import { PUBLIC_APIURL } from '$env/static/public';
	/** @type {import('./$types').PageData} */
	export let data;
</script>
<img src="{PUBLIC_APIURL}/assets/{data.post.image.filename_disk}?width=600" alt="{data.post.image.description}" />
<h1>{data.post.title}</h1>
<div>{@html data.post.content}</div>