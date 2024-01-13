const password1 = document.getElementById("password");
const password2 = document.getElementById("confirm-password");

password1.addEventListener("focusin", showPasswordRules)
password1.addEventListener("focusout", hidePasswordRules)
password2.addEventListener("input", validate);

function hidePasswordRules()
{
    const doc = document.querySelector(".password-rules");
    doc.style.display = "none";
}

function showPasswordRules()
{
    const doc = document.querySelector(".password-rules");
    doc.style.display = "block";

}

function validate()
{
    if(!password1.value.includes(password2.value))
    {
        password2.classList.add("password-error");
    }
    else
    {
        password2.classList.remove("password-error");
    }
}
