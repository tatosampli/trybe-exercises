function verificaPalindromo(palavra) {
  let letras = palavra.split('');
  let isPalindrome = true;
  for (let index in letras) {
    if (letras[index] != palavra[(palavra.length - 1) - index]) {
      isPalindrome = false;
    }
  }
  return isPalindrome;
}