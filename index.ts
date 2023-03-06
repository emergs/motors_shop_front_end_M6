import moment from "moment";
// import "moment/locale/pt-br.js";

let test = {
    id: "0722990f-c38c-4e4c-a65f-714eba8d8012",
    comment: "teste",
    createdAt: "2023-03-04T18:19:22.631Z",
    updatedAt: "2023-03-05T22:42:54.987Z",
};

// moment.locale('pt-br');

const updatedTime = moment(test.updatedAt).fromNow();
console.log(updatedTime);

function getTimeSinceUpdatedAt(obj) {
    const updatedTime = new Date(obj);
    const now = new Date();
    const diff = now.getTime() - updatedTime.getTime();
    const seconds = Math.floor(diff / 1000);

    if (seconds < 60) {
        if(seconds === 1){
            return `há ${seconds} segundo`;
        }
        return `há ${seconds} segundos`;
    }

    const minutes = Math.floor(seconds / 60);

    if (minutes < 60) {
        if(minutes === 1){
            return `há ${minutes} minuto`;
        }
        return `há ${minutes} minutos`;
    }

    const hours = Math.floor(minutes / 60);

    if (hours < 24) {
        if(hours === 1){
            return `há ${hours} hora`
        }
        return `há ${hours} horas`;
    }

    const days = Math.floor(hours / 24);

    if (days < 30) {
        if(days === 1){
            return `há ${days} dia`
        }
        return `há ${days} dias`;
    }

    const months = Math.floor(days / 30);

    if (months < 12) {
        if(months === 1){
            return `há ${months} mes`
        }
        return `há ${months} meses`;
    }

    const years = Math.floor(months / 12);
    if(years === 1){
        return `há ${years} ano`
    }
    return `há ${years} anos`;
}
console.log(getTimeSinceUpdatedAt("2022-08-06T14:53:42.254Z"));
// console.log(new Date())