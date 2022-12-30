let is = true;

export const fetchData = (time, task) => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            if (is) {
                resolve (task);
            } else {
                reject ("Error");
            }
        }, time);
    });
};