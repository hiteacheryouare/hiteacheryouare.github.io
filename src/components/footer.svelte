<script>
    var year = new Date()
</script>
<div class="flex">
    <img src="/pattern.svg" alt="" id="pattern">
</div>

<footer class="bg-gray-900 dark:bg-black">
    <div class="flex justify-between content-center">
        <div class="flex justify-between flex-col">
            <img src="/white.png" alt="Ryan Enterprises" id="logo">
            <hr />
            <p class="text-white p-4">Copyright &copy; {year.getFullYear()}, Ryan Enterprises. All Rights Reserved</p>
        </div>
        <div class="flex justify-between flex-col p-4 text-white underline">
            <a href="/">Home</a><a href="/blog">Blog</a><a href="/about">About</a>
        </div>
    </div>
</footer>

<style>
    #pattern {
        background-size: cover;
        object-fit: fill;
    }
    #logo {
        width: 15rem;
        padding: 2rem;
    }
    a {
        color: white;
        text-decoration: underline;
    }
    a:hover {
        color: hsl(247, 79%, 32%)
    }
    hr {
        border: 1px solid white;
    }
    @media (prefers-color-scheme: dark) {
        a:hover {
            color: hsl(184, 66%, 28%);
        }
    }
    * {
        margin-bottom: 0;
    }
</style>