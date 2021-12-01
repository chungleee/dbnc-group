// 1
const rooms = [
	{ room_type: 'Queen', vacant_rooms: 5, price: 100 },
	{ room_type: 'Double', vacant_rooms: 3, price: 75 },
	{ room_type: 'Twin', vacant_rooms: 8, price: 60 },
];

const RoomsListComponent = ({ rooms }) => {
	return (
		<ol>
			{rooms.map((room) => {
				return (
					<li>{`${room.room_type}, ${room.vacant_rooms}, $${room.price}`}</li>
				);
			})}
		</ol>
	);
};
