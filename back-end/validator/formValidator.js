// Regex patterns with maximum lengths

const formValidator = (data) => {
  const { title, description } = data;

  const titleRegex = /^(?!.*\s{2,})[a-zA-Z0-9\s]{5,30}$/; // Alphanumeric with spaces allowed, without consecutive spaces, with a length between 10 and 30 characters
  const descriptionRegex = /^(?!.*\s{2,})[^\s].{5,150}$/; // No leading spaces, no consecutive spaces, with a length between 30 and 150 characters without leading or trailing whitespaces

  // Validate title and description using regex patterns
  let error;
  switch (true) {
    case !titleRegex.test(title) || !title:
      error = "Title should consist of at most 30 alphanumeric characters.";
      break;
    case !descriptionRegex.test(description) || !description:
      error =
        "Description should consist of at most 150 characters without leading or trailing whitespaces.";
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

module.exports = formValidator;
