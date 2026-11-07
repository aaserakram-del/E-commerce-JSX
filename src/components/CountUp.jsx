import { useEffect, useState } from "react";


const CountUp = ({ number, duration = 2000 }) => {

    const [count, setCount] = useState(0);


    useEffect(() => {

        let start = 0;

        const step = number / (duration / 10);


        const timer = setInterval(() => {

            start += step;


            if (start >= number) {

                setCount(number);
                clearInterval(timer);

            } else {

                setCount(Math.floor(start));

            }


        }, 10);



        return () => clearInterval(timer);


    }, [number, duration]);



    return <span>{count}</span>;

};


export default CountUp;