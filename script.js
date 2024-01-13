const password1 = document.getElementById("password");
const password2 = document.getElementById("confirm-password");
const passwordRules = document.querySelector(".password-rules");
const checkRuleUpLetter = document.querySelector(".uppercase-letter");
const checkRuleNum = document.querySelector(".num");
const checkRuleSpecialChar = document.querySelector(".special-character");
const checkRuleLength = document.querySelector(".length");

password1.addEventListener("focusin", showPasswordRules)
password1.addEventListener("focusout", hidePasswordRules)
password1.addEventListener("input", validatePasswordRules);
password2.addEventListener("input", validateConfirmPassword);

let uppercaseLetter = /[A-Z]/;
let num = /[0-9]/;
let specialCharacter = /[@&$!%*#]/;

function validatePasswordRules()
{
    if(uppercaseLetter.test(password1.value))
    {
        checkRuleUpLetter.classList.add("checked-rules")
    }
    else {
        checkRuleUpLetter.classList.remove("checked-rules");
    }

    if(num.test(password1.value))
    {
        checkRuleNum.classList.add("checked-rules")
    }
    else {
        checkRuleNum.classList.remove("checked-rules");
    }

    if(specialCharacter.test(password1.value))
    {
        checkRuleSpecialChar.classList.add("checked-rules")
    }
    else {
        checkRuleSpecialChar.classList.remove("checked-rules");
    }

    if(password1.value.length >= 8)
    {
        checkRuleLength.classList.add("checked-rules")
    }
    else {
        checkRuleLength.classList.remove("checked-rules");
    }

}

function hidePasswordRules()
{
    passwordRules.style.display = "none";
}

function showPasswordRules()
{
    passwordRules.style.display = "block";
}

function validateConfirmPassword()
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
