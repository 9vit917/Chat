export default (num) => {
    const min = Math.floor(num / 60);
    const sec = (num % 60).toFixed();
    return `${ min < 10 ? '0': '' }${min}:${sec < 10 ? '0': '' }${sec}`;
}