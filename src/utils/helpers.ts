export const getInitials = function (string: string): string {
  var names = string?.split(" "),
    initials = names[0]?.substring(0, 1)?.toUpperCase();

  if (names?.length > 1) {
    initials += names[1]?.substring(0, 1)?.toUpperCase();
  }
  return initials;
};
