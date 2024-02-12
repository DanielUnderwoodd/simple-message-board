export const substringExtractor = (fieldName) => {
  const channelTitle = fieldName;
  const substring1 = "channel";
  const substring2 = "message";

  const index1 = channelTitle.indexOf(substring1);
  const index2 = channelTitle.indexOf(substring2);

  const extractedSubstring =
    index1 !== -1 && index2 !== -1
      ? index1 < index2
        ? channelTitle.substring(index1, index1 + substring1.length)
        : channelTitle.substring(index2, index2 + substring2.length)
      : index1 !== -1
      ? channelTitle.substring(index1, index1 + substring1.length)
      : index2 !== -1
      ? channelTitle.substring(index2, index2 + substring2.length)
      : null;

  return extractedSubstring;
};
