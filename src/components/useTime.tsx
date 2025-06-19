import { useState, useEffect } from "react";


const useTime = () => {
	const [HH, setHH] = useState("00");
	const [MM, setMM] = useState("00");
	const [SS, setSS] = useState("00");


	useEffect(() => {
		const interval = setInterval(() => {

			const date = new Date();
			setHH(date.getHours().toString().padStart(2, '0'));
			setMM(date.getMinutes().toString().padStart(2, '0'));
			setSS(date.getSeconds().toString().padStart(2, '0'));

		}, 1000)
		return () => {
			clearInterval(interval);
		}
	}, [])

	return { HH, MM, SS }

}

export default useTime;
