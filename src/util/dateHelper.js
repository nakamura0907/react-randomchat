export const time = () => {
    const today = new Date();
    return (today.getHours() + ":" +  today.getMinutes());
}