export const renderUserNameIfNUll = (name) => {
  if (name == "") {
    return "Anonymous";
  }
  return name;
};
