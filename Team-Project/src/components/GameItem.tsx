import React from "react";

const GameItem = () => {
	const items = [
		{
			name: '샤롯데씨어터',
			isTrue: true,
			gameId: 1,
		},
		{
			name: '블루스퀘어',
			isTrue: true,
			gameId: 2,
		},
		{
			name: '세종문화회관',
			isTrue: false,
			gameId: 3,
		},
		{
			name: '예술의전당',
			isTrue: false,
			gameId: 4,
		}
	];

	interface gameItem {
		name: string;
		isTrue: boolean;
		gameId: number;
	}

	return (
		<>
			{items.map((item: gameItem) => {
				<div className="py-20 px-10">
					<p className="text-3xl">{item.name}</p>
					<p className="">바로가기<a href="" className="">GO</a></p>
				</div>
			})}
		</>
	);
};

export default GameItem;