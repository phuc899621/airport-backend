export const stringMsg = (label, required=false) => ({
  "string.base": `${label} phải là một chuỗi`,
  ...required && {
    "any.required": `Vui lòng cung cấp ${label.toLowerCase()}`,
  }
});

export const positiveIntMsg = (label, required=false) => ({
  "number.base": `${label} phải là số nguyên dương`,
  "number.integer": `${label} phải là số nguyên dương`,
  "number.positive": `${label} phải là số nguyên dương`,
  ...required && {
    "any.required": `Vui lòng cung cấp ${label.toLowerCase()}`,

  }
});

export const isoDateMsg = (label, required=false) => ({
  "string.base": `${label} phải là chuỗi`,
  "string.isoDate": `${label} phải đúng chuẩn ISO 8601`,
  ...required && {
    "any.required": `Vui lòng cung cấp ${label.toLowerCase()}`,
    "string.empty": `${label} không được để trống`,
  }
});
