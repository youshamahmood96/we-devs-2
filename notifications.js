let allRead = true;
let notifications = [
{message: 'Lorem', read: true},
{message: 'Ipsum', read: true},
{message: 'Dolor', read: true},
{message: 'Sit', read: false},
{message: 'Amet', read: true}
];

const check = (notifications)=>{
    allRead = !notifications.some(message => !message.read)
}
check(notifications)
console.log(allRead);
