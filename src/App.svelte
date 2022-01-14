<script>
    import Footer from './Footer.svelte';
</script>

<div class="cover" id="cover">
    <h1>தமிழிலக்கியம்</h1>
    <h3>Tamil Literature</h3>
</div>

<div class="content" id="content">
    <h2 class="tamil" style="margin: 0;">இணையதளங்கள் / Website</h2>

    {#each window.projects as project}
        <div class="content-box">
            <h2 class="tamil">{project.tamil} / {project.name}</h2>
            <p class="tamil" style="margin-top: 10px;">{project.description}</p>
            <div class="kural-button">பார்க்க / View</div>
        </div>
    {/each}
</div>

<Footer/>