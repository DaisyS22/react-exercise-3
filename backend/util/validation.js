function isValidText(value) {
  return value && value.trim().length > 0;
}

function isValidPrice(value) {
  return value && value !== 0;
}

function isValidImageUrl(value) {
  return value && value.startsWith("http");
}

exports.isValidText = isValidText;
exports.isValidPrice = isValidPrice;
exports.isValidImageUrl = isValidImageUrl;
