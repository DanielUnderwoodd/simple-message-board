// Regex patterns with maximum lengths

const messageValidator = (data) => {
  const { alias, subject, text } = data;
  const aliasRegex = /^(?!.*\s{2,})[a-zA-Z0-9\s]{5,30}$/; // Alphanumeric with spaces allowed, without consecutive spaces, with a length between 10 and 30 characters
  const subjectRegex = /^(?!.*\s{2,})[a-zA-Z0-9\s]{5,30}$/; // Alphanumeric with spaces allowed, without consecutive spaces, with a length between 10 and 30 characters

  const textRegex = /^(?!.*\s{2,})[^\s].{5,150}$/; // No leading spaces, no consecutive spaces, with a length between 30 and 150 characters without leading or trailing whitespaces

  // Validate title and description using regex patterns
  let error;
  switch (true) {
    case !aliasRegex.test(alias) || !alias:
      error = "Alias should consist of at most 30 alphanumeric characters.";
      break;
    case !subjectRegex.test(subject) || !subject:
      error =
        "Subject should consist of at most 150 characters without leading or trailing whitespaces.";
      break;
    case !textRegex.test(text) || !text:
      error =
        "Text should consist of at most 150 characters without leading or trailing whitespaces.";
      break;
    default:
      // No validation errors
      break;
  }
  if (error) {
    return {
      error,
    };
  } else {
    return {
      success: true,
    };
  }
};

module.exports = messageValidator;
