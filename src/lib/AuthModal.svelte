<script lang="ts">
    export let signup

    let email = ""
    let password = ""

    let invalidEmail = false
    let invalidPassword = false

    function go() {
        invalidEmail = !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)
        invalidPassword = password.length < 8

        if (invalidEmail || invalidPassword) {
            return
        }

        alert("ok")
    }
</script>

<div class="flex flex-col pt-6 px-4 sm:px-0 sm:pt-0 sm:justify-center sm:items-center h-screen bg-[#0D0B0D]">
    <a href="/">
        <img src="/logo.png" alt="Flyte Logo" class="mb-4 mx-auto h-8 w-24">
    </a>
    <div class="bg-[#121012] p-4 sm:p-12 flex flex-col text-white sm:w-[500px] min-w-[250px] rounded-[6px]">
        <h1 class="font-medium text-3xl">{signup ? 'Create account' : 'Welcome back'}</h1>
        <h2 class="text-[#b7b7b7] mt-1.5 mb-8">{signup ? 'Get started with Flyte Domains.' : 'Sign in to Flyte Domains.'}</h2>
        <div class="flex flex-col gap-3">
            <button class="secondary-button">
                <div class="flex justify-center gap-2.5">
                    <svg class="h-5 w-5 items-center mt-1" width="31" height="32" viewBox="0 0 31 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M30.5 16.3625C30.5 25.2062 24.4438 31.5 15.5 31.5C6.925 31.5 0 24.575 0 16C0 7.425 6.925 0.5 15.5 0.5C19.675 0.5 23.1875 2.03125 25.8937 4.55625L21.675 8.6125C16.1562 3.2875 5.89375 7.2875 5.89375 16C5.89375 21.4062 10.2125 25.7875 15.5 25.7875C21.6375 25.7875 23.9375 21.3875 24.3 19.1063H15.5V13.775H30.2563C30.4 14.5687 30.5 15.3312 30.5 16.3625Z" fill="white"/>
                    </svg>
                    <p class="font-semibold items-center justify-center">{signup ? 'Sign up with' : 'Sign in with'} Google</p>
                </div>
            </button>
            <button class="secondary-button">
                <div class="flex justify-center gap-2.5">
                    <svg class="h-6 w-6 mt-0.5" width="40" height="32" viewBox="0 0 40 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M32.7832 4.36479C32.773 4.34499 32.756 4.32949 32.7354 4.32104C30.3527 3.22783 27.8383 2.44828 25.2551 2.00191C25.2316 1.99755 25.2073 2.0007 25.1858 2.01091C25.1642 2.02112 25.1464 2.03787 25.1349 2.05879C24.7925 2.68022 24.4817 3.31853 24.2036 3.97129C21.419 3.54859 18.5866 3.54859 15.802 3.97129C15.5221 3.31687 15.2063 2.6784 14.8561 2.05879C14.844 2.03833 14.8261 2.02196 14.8047 2.01181C14.7832 2.00167 14.7592 1.99822 14.7358 2.00191C12.1523 2.44735 9.63769 3.22695 7.2553 4.3211C7.23491 4.32975 7.2177 4.34451 7.20605 4.36335C2.44174 11.4782 1.13662 18.4182 1.77687 25.2722C1.77867 25.289 1.78383 25.3052 1.79204 25.32C1.80026 25.3347 1.81135 25.3477 1.82468 25.3581C4.59889 27.4122 7.70189 28.9801 11.0012 29.9949C11.0245 30.0019 11.0493 30.0016 11.0723 29.994C11.0954 29.9865 11.1156 29.972 11.1302 29.9527C11.8388 28.9885 12.4667 27.9675 13.0075 26.9C13.0149 26.8854 13.0192 26.8693 13.0199 26.8529C13.0207 26.8365 13.018 26.8201 13.012 26.8049C13.006 26.7896 12.9968 26.7757 12.985 26.7643C12.9733 26.7528 12.9592 26.7439 12.9438 26.7383C11.9537 26.3594 10.9951 25.9027 10.0771 25.3725C10.0604 25.3627 10.0464 25.3489 10.0363 25.3324C10.0262 25.3159 10.0203 25.2972 10.0192 25.2779C10.018 25.2586 10.0216 25.2393 10.0297 25.2217C10.0378 25.2041 10.0501 25.1888 10.0655 25.1771C10.2581 25.0328 10.4509 24.8827 10.6348 24.731C10.6511 24.7176 10.6709 24.7089 10.6919 24.7061C10.7129 24.7033 10.7342 24.7064 10.7536 24.715C16.7679 27.4598 23.2792 27.4598 29.2223 24.715C29.2417 24.7058 29.2633 24.7023 29.2845 24.7049C29.3058 24.7075 29.3259 24.716 29.3426 24.7296C29.5266 24.8812 29.7192 25.0328 29.9133 25.1771C29.9288 25.1887 29.9412 25.2039 29.9494 25.2214C29.9576 25.2389 29.9614 25.2582 29.9604 25.2775C29.9594 25.2968 29.9536 25.3156 29.9437 25.3321C29.9337 25.3487 29.9198 25.3626 29.9032 25.3725C28.9872 25.9072 28.0278 26.3636 27.0351 26.7368C27.0196 26.7427 27.0056 26.7518 26.994 26.7634C26.9823 26.7751 26.9732 26.7891 26.9673 26.8045C26.9614 26.8199 26.9588 26.8363 26.9597 26.8528C26.9606 26.8693 26.965 26.8854 26.9726 26.9C27.5224 27.9615 28.1494 28.9812 28.8484 29.951C28.8626 29.9709 28.8827 29.9858 28.9058 29.9936C28.929 30.0015 28.954 30.0019 28.9774 29.9947C32.2826 28.9834 35.3911 27.4153 38.1687 25.3581C38.1823 25.3482 38.1935 25.3356 38.2018 25.321C38.21 25.3064 38.2151 25.2903 38.2166 25.2736C38.9831 17.3497 36.9333 10.4666 32.7832 4.36479ZM13.9057 21.0988C12.0949 21.0988 10.6029 19.4371 10.6029 17.3963C10.6029 15.3556 12.066 13.6938 13.9057 13.6938C15.7597 13.6938 17.2373 15.37 17.2084 17.3962C17.2084 19.4371 15.7452 21.0988 13.9057 21.0988ZM26.1169 21.0988C24.3062 21.0988 22.8142 19.4371 22.8142 17.3963C22.8142 15.3556 24.2773 13.6938 26.1169 13.6938C27.9711 13.6938 29.4486 15.37 29.4197 17.3962C29.4197 19.4371 27.9711 21.0988 26.1169 21.0988Z" fill="white"/>
                    </svg>
                    <p class="font-semibold items-center justify-center">{signup ? 'Sign up with' : 'Sign in with'} Discord</p>
                </div>
            </button>
        </div>
        <div class="h-[2px] w-full bg-[#292729] my-8"></div>
        <div class="flex flex-col gap-4">
            <div class="flex flex-col gap-1.5">
                <p>Email</p>
                <input bind:value={email} id="email" maxlength="100" class="primary-input" placeholder="Enter your email">
                {#if invalidEmail}
                    <p class="text-[#FF7575] text-sm">Invalid email format</p>
                {/if}
            </div>
            <div class="flex flex-col gap-1.5">
                <p>Password</p>
                <input bind:value={password} id="password" maxlength="100" type="password" class="primary-input" placeholder={signup ? 'Create a password' : 'Enter your password'}>
                {#if invalidPassword}
                    <p class="text-[#FF7575] text-sm">Password must be 8 or more characters</p>
                {/if}
            </div>
        </div>
        <button on:click={go} class="mt-6 primary-button">{signup ? 'Create account' : 'Sign in'}</button>
        <div class="flex text-md mx-auto gap-1.5 mt-6">
            <p class="text-[#b7b7b7]">{signup ? 'Already have an account?' : 'Don\'t have an account?'}</p>
            <a class="flex gap-1.5 items-center link group" href={signup ? '/signin' : '/signup'}>
                <p class="link">{signup ? 'Sign in' : 'Sign up'}</p>
                <svg class="w-6 h-6 link" xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" viewBox="0 0 37 49">
                    <path d="M31.6062 9.1875C32.8877 9.1875 33.9187 10.2115 33.9187 11.4844V34.4531C33.9187 35.726 32.8877 36.75 31.6062 36.75C30.3246 36.75 29.2937 35.726 29.2937 34.4531V17.0256L7.03584 39.1426C6.13012 40.0422 4.66553 40.0422 3.76944 39.1426C2.87334 38.243 2.86371 36.7883 3.76944 35.8982L26.0272 13.7908H8.48116C7.19965 13.7908 6.16866 12.7668 6.16866 11.4939C6.16866 10.2211 7.19965 9.19707 8.48116 9.19707H31.6062V9.1875Z" class="text-white"/>
                </svg>
            </a>
        </div>
    </div>
</div>
