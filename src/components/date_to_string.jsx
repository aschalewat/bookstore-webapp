import moment from 'moment'
//new commit
function toString (date, format) {
    if(!date){
        return "";
    }
    const mom = moment(date);
    return mom.format(format);
}

export function dateOfBirthToString(dob, Date) {
    return toString(dob, 'D, MMMM, YYYY');
}

export function toShortDate(dob, Date) {
    return toString(dob, 'DD/MM/YYYY');
}
