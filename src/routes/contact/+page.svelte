<svelte:head>
    <title>Flyte</title>
    <meta content="Flyte" property="og:site_name" />
    <meta content="Flyte" property="og:title" />
    <meta content="Flyte is a talented team of engineers and artists who specialize in bringing exciting projects from concept to launch using new and innovative technologies." property="og:description" />
    <meta content="https://flyte.gg" property="og:url" />
    <meta content="https://flyte.gg/favicon.png" property="og:image" />
    <meta content="#2b2d31" data-react-helmet="true" name="theme-color" />
    <meta name="description" content="Flyte is a talented team of engineers and artists who specialize in bringing exciting projects from concept to launch using new and innovative technologies.">
    <meta name="keywords" content="flyte, flytegg, learnspigot, mcworkshop, mclicense, galamo, rcl, pluginportal">
    <link rel="icon" href="/favicon.png">
</svelte:head>

<script lang="ts">
    import Navbar from "$lib/Navbar.svelte";
    import Footer from "$lib/Footer.svelte";

    let emailInput
    let subjectInput
    let messageInput
    let submitButton

    let email = ""
    let subject = ""
    let message = ""

    let invalidEmail = false
    let noSubject = false
    let noMessage = false

    let worky = ""

    const contact = {
        email: '',
        subject: '',
        message: '',
        accessKey: 'f625cc5d-5096-4b75-8f01-b3a286e3956e' // get your access key from https://www.staticforms.xyz
    };

    async function go() {
        invalidEmail = !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)
        noSubject = subject.length === 0
        noMessage = message.length === 0

        contact.email = email
        contact.subject = subject
        contact.message = message

        if (invalidEmail || noSubject || noMessage) {
            return
        }

        try {
            const res = await fetch('https://api.staticforms.xyz/submit', {
                method: 'POST',
                body: JSON.stringify(contact),
                headers: {'Content-Type': 'application/json'}
            });

            const json = await res.json();

            worky = json.success ? "worky" : "nop"
        } catch (e) {
            console.log('An error occurred', e);
            worky = "nop"
        }

        emailInput.disabled = true;
        subjectInput.disabled = true;
        messageInput.disabled = true;
        submitButton.disabled = true
    }
</script>

<section class="bg-[#0d0b0d] relative">
    <img src="/misc/blur.svg" alt="Blur" class="absolute top-0 w-[70%] z-30 h-screen">
    <img src="/misc/wireframe-logo.svg" alt="Blur" class="hidden lg:block absolute right-16 top-[-230px] w-[800px] z-0">
    <div class="w-[90%] mx-auto">
        <Navbar />
    </div>
    <div class="w-[90%] 2xl:w-[70%] mx-auto pb-20">
        <div class="flex flex-col font-medium gap-6 w-[100%] md:w-[50%] 3xl:bg-white">
            <h1 class="text-white text-5xl">We are Flyte</h1>
            <h2 class="text-[#b6b5b6] text-2xl">Flyte is a talented team of engineers and artists who specialize in bringing exciting projects from concept to launch using new and innovative technologies. </h2>
        </div>
    </div>
</section>

<section class="bg-[#121012] z-20 relative">
    <div class="w-[90%] 2xl:w-[70%] mx-auto py-20">
        <h1 class="text-white text-5xl text-[45px]">Get in touch</h1>
        <p class="gap-4 text-[#b8b7b8] text-2xl break-after-all mb-16 mt-3">Email us at <a class="link text-white" href="mailto:hello@flyte.gg">hello@flyte.gg</a> or use the form below if you have a query or want to start working with us.</p>
        <div class="flex flex-col gap-8 text-white text-lg">
            <input type="hidden" name="accessKey" value="f625cc5d-5096-4b75-8f01-b3a286e3956e">
            <input type="text" name="honeypot" style="display: none;"> <!-- honeypot -->
            <div class="flex flex-wrap md:flex-nowrap gap-8 md:gap-20">
                <div class="flex flex-col gap-2 w-[100%]">
                    <p>Email</p>
                    <input id="email" bind:this={emailInput} bind:value={email} placeholder="Enter your email address" type="email" name="email" class="resize-none primary-input">
                    {#if invalidEmail}
                        <p class="text-[#FF7575] text-sm">Invalid email format</p>
                    {/if}
                </div>
                <div class="flex flex-col gap-2 w-[100%]">
                    <p>Subject</p>
                    <input id="subject" bind:this={subjectInput} bind:value={subject} placeholder="Summarize your message" type="text" name="subject" class="resize-none primary-input">
                    {#if noSubject}
                        <p class="text-[#FF7575] text-sm">No subject provided</p>
                    {/if}
                </div>
            </div>
            <div class="flex flex-col gap-2">
                <p>Message</p>
                <textarea bind:this={messageInput} id="message" bind:value={message} placeholder="What's up?" name="message" class="resize-none primary-input"></textarea>
                {#if noMessage}
                    <p class="text-[#FF7575] text-sm">No message provided</p>
                {/if}
            </div>
            <div class="flex justify-between">
                {#if worky === "worky"}
                    <p class="text-[#75FFB3] text-md">Your message has been sent! Thanks for getting in touch - we'll respond soon.</p>
                {:else if worky === "nop"}
                    <p class="text-[#FF7575] text-md">Your message has not been sent due to an error. We recommend emailing hello@flyte.gg directly.</p>
                {/if}
                <button bind:this={submitButton} on:click={go} class="primary-button w-fit px-20 ml-auto">Submit</button>
            </div>
        </div>
    </div>
</section>

<section class="bg-[#0d0b0d]">
    <div class="w-[90%] mx-auto">
        <Footer />
    </div>
</section>


