// Replace part of a string by a substring a a defined size at a specific position
// Ex: replaceAt('convulsion', 'y', 1)  -> 'cynvulsion'
function replaceAt(string, substring, position)
{
    let newString = '';

    if (position == 0)
        newString = substring + string.substr(substring.length, string.length - 1);
    else if (position <= string.length - 1)
        newString = string.substr(0, position) + substring + string.substr(position + substring.length, string.length - 1);
    else
        newString = string;
    
    return newString;
}
