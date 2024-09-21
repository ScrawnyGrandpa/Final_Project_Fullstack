export function ucFirst(str) {
    if (!str?.length) return str;
    return str[0].toUpperCase() + str.substring(1);
}

export function capitalize(str) {
    return str.split(" ").map(ucFirst).join(" ");
}

