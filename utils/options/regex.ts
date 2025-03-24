const regexOptions = {
  patterns: {
    number: /^[0-9]*$/,
    password:
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%\^&\*()_+{}\[\]:;<=>?,.\/\\|~`-])/,
    phone: /^[2-9][0-9]*$/,
    na_phone: /^[2-9][0-9][0-9][2-9][0-9]{2}[0-9]{4}$/,
    space: /^(?!\s+$).*/g,
    lettersAndNumbers: /^[A-Za-z0-9]*$/,
    lettersAndNumbersAndSpaces: /^[ A-Za-z0-9]*$/,
    lettersAndSpaces: /^[ A-Za-z]*$/,
    spaceWithSpecialChar: /^(?!\s*[ !@#$%\^&\*()_+{}\[\]:;<=>?,.\/\\|~`-]+\s*$).*$/,
  },
};

export default regexOptions;
