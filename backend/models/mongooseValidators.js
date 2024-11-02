const EMAIL = {
    type: String,
    required: true,
    match: RegExp(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/),
    trim: true,
    unique: true,
};

// imageURL, avatarImgURL
const IMAGEURL = {
    type: String,
    trim: true,
    match: RegExp(
        /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/
    ),
}

const NICKNAME = {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 256,
    trim: true,
    unique: true,
}

// firstName, lastName, imageALT, location, name, avatarImgALT
const DEFAULT_VALIDATION = {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 256,
    trim: true,
};

export { EMAIL, IMAGEURL, NICKNAME, DEFAULT_VALIDATION }