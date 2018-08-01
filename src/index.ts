
/**
 * Taken from Computerphile - https://youtu.be/i7sm9dzFtEI
 */
const ack = (m: number, n: number): number => {

    let ans: number;
    if (m === 0) ans = n+1;
    else if (n === 0 ) ans = ack(m-1, 1);
    else ans = ack(m-1, ack(m, n-1));

    return ans;
}

for (let i=0; i<6; i++)
    for (let j=0; j<6; j++)
        console.log(`ackermanns (${i}, ${j})`, ack(i, j));

