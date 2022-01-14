<script>
    import Footer from './Footer.svelte';
</script>

<div class="cover" id="cover">
    <h1>தமிழிலக்கியம்</h1>
    <h3>Tamil Literature</h3>
</div>

<div class="content" id="content">
    <h2 class="tamil" style="margin: 0;">இணையதளங்கள் / Websites</h2>

    {#each window.projects as project}
        <div class="content-box">
            <h2 class="tamil">{project.tamil} / {project.name}</h2>
            <p class="english" style="margin-top: 10px;">{project.tamilDescription}</p>
            <p class="tamil" style="margin-top: 5px;">{project.description}</p>
            <a class="kural-button" href={`https://tamizhilakkiyam.github.io/${project.href}`}>பார்க்க / View</a>
        </div>
    {/each}
</div>

<Footer/>