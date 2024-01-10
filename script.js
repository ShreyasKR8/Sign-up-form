const password1 = document.getElementById("password");
const password2 = document.getElementById("confirm-password");

password2.addEventListener("input", validate);

function validate()
{
    if(!password1.value.includes(password2.value))
    {
        password2.style.borderColor = "brown";
        // password2.classList.add(".password-error");
    }
    else
    {
        // password2.classList.remove(".password-error");
        password2.style.borderColor = "rgb(44, 148, 183)";
    }
}
