import { useEffect, useState } from "react";
import useTime from "./useTime";

const HOURS_0 = [0, 1, 2];
const HOURS_00 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const MINUTES_0 = [0, 1, 2, 3, 4, 5];
const MINUTES_00 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const SECONDS_0 = [0, 1, 2, 3, 4, 5];
const SECONDS_00 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

export const Clock = () => {

	const [secondsUnitTop, setSecondsUnitTop] = useState(0);
	const [secondsTensTop, setSecondsTensTop] = useState(0);
	const [minutesUnitTop, setMinutesUnitTop] = useState(0);
	const [minutesTensTop, setMinutesTensTop] = useState(0);
	const [hoursUnitTop, setHoursUnitTop] = useState(0);
	const [hoursTensTop, setHoursTensTop] = useState(0);


	const { HH, MM, SS } = useTime();

	useEffect(() => {
		const [secondTens, secondUnit] = SS.split("").map(i => parseInt(i));
		setSecondsUnitTop(secondUnit * 5);
		setSecondsTensTop(secondTens * 5);

		const [minutesTens, minutesUnit] = MM.split("").map(i => parseInt(i));
		setMinutesUnitTop(minutesUnit * 5);
		setMinutesTensTop(minutesTens * 5);

		const [hoursTens, hoursUnit] = HH.split("").map(i => parseInt(i));
		setHoursUnitTop(hoursUnit * 5);
		setHoursTensTop(hoursTens * 5);

	}, [HH, MM, SS])

	return (<>

		<div className="w-dvw h-dvh flex flex-col items-center justify-center">
			<div className="flex items-start justify-evenly w-1/3 h-[5dvh] z-100 rounded bg-slate-500/70 border-slate-400/50 border-1 shadow-xl shadow-slate-400/50 ">
				<div className="flex items-center jusify-evenly gap-4">
					<div className="relative w-15 h-full">
						<div style={{ top: `-${hoursTensTop}dvh` }} className="absolute w-full h-fit top-0 left-0 bg-slate-400/60 rounded-md border-1 border-slate-400 flex flex-col items-center -z-1 transition-all duration-500">
							{
								HOURS_0.map((c, i) => (
									<div className="text-4xl font-mono leading-[5dvh] h-[5dvh]" key={i}>{c}</div>
								))
							}

						</div>
					</div>
					<div className="relative w-15 h-full">
						<div style={{ top: `-${hoursUnitTop}dvh` }} className="absolute w-full h-fit bottom-[-50dvh] left-0  bg-slate-400/60 rounded-md border-1 border-slate-400 flex flex-col items-center -z-1 transition-all duration-500">
							{
								HOURS_00.map((c, i) => (
									<div className="text-4xl font-mono leading-[5dvh] h-[5dvh]" key={i}>{c}</div>
								))
							}
						</div>
					</div>
				</div>

				{/* MINUTES */}
				<div className="flex items-center jusify-evenly gap-4">
					<div className="relative w-15 h-full">
						<div style={{ top: `-${minutesTensTop}dvh` }} className="absolute w-full h-fit top-0 left-0 bg-slate-400/60 rounded-md border-1 border-slate-400 flex flex-col items-center -z-1 transition-all duration-500">
							{
								MINUTES_0.map((c, i) => (
									<div className="text-4xl font-mono leading-[5dvh] h-[5dvh]" key={i}>{c}</div>
								))
							}

						</div>
					</div>
					<div className="relative w-15 h-full">
						<div style={{ top: `-${minutesUnitTop}dvh` }} className="absolute w-full h-fit top-0 left-0 bg-slate-400/60 rounded-md border-1 border-slate-400 flex flex-col items-center -z-1 transition-all duration-500">
							{
								MINUTES_00.map((c, i) => (
									<div className="text-4xl font-mono leading-[5dvh] h-[5dvh]" key={i}>{c}</div>
								))
							}
						</div>
					</div>
				</div>

				{/* HOURS */}
				<div className="flex items-center jusify-evenly gap-4">
					<div className="relative w-15 h-full">
						<div style={{ top: `-${secondsTensTop}dvh` }} className="absolute w-full h-fit top-0 left-0 bg-slate-400/60 rounded-md border-1 border-slate-400 flex flex-col items-center -z-1 transition-all duration-500">
							{
								SECONDS_0.map((c, i) => (
									<div className="text-4xl font-mono leading-[5dvh] h-[5dvh]" key={i}>{c}</div>
								))
							}

						</div>
					</div>
					<div className="relative w-15 h-full">
						<div style={{ top: `-${secondsUnitTop}dvh` }} className="absolute w-full h-fit left-0 bg-slate-400/60 rounded-md border-1 border-slate-400 flex flex-col items-center -z-1 transition-all duration-500">
							{
								SECONDS_00.map((c, i) => (
									<div className="text-4xl font-mono leading-[5dvh] h-[5dvh]" key={i}>{c}</div>
								))
							}
						</div>
					</div>
				</div>
			</div>
		</div>
	</>)

}
